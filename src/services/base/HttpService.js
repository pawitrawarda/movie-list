import service from '../../commons/config/service.config'
import BaseService from './BaseService'
import ErrorService from './ErrorService'

export default class HttpService extends BaseService {
  static api = ''
  static entity = ''

  constructor (api, entity, options = {}, http = null) {
    super(options)
    this.api = api
    this.entity = entity
    this.http = http || service
  }

  static build (options) {
    return new this(this.api, this.entity, options)
  }

  static setHeader (token = '') {
    service.defaults.headers.common.Authorization = `Bearer ${token}`
    service.defaults.headers.common['Content-Type'] = 'application/json'
    service.defaults.headers.common.Accept = 'application/json'
  }

  static removeHeader () {
    service.defaults.headers.common = {}
  }

  get (param = {}, url = '') {
    const api = url === '' ? this.api : url
    return this.http
      .get(api, { params: param })
      .then(this.constructor.then)
      .catch((e) => {
        if (e instanceof ErrorService) {
          e.showError()
        } else {
          const alert = new ErrorService(e)
          alert.showError()
        }
      })
  }

  post (data, url = '', param = {}) {
    const api = url === '' ? this.api : url
    return this.http
      .post(api, data, { params: param })
      .then(this.constructor.then)
      .catch((e) => {
        if (e instanceof ErrorService) {
          e.showError()
        } else {
          const alert = new ErrorService(e)
          alert.showError()
        }
      })
  }
}
