export default class BaseService {
  constructor (options) {
    this.options = options
  }

  static build (options) {
    return new this(options)
  }
}
