import HttpService from './base/HttpService'

export default class MoviesService extends HttpService {
  static api = process.env.VUE_APP_API_MOVIES

  getListMovie = (param) => {
    const api = this.api
    return this.get(param, api)
  }

  getDetailMovie = (param, id) => {
    const api = this.api + '/' + id
    return this.get(param, api)
  }
}
