const AUTH_KEY = 'auth_data'

const AuthStorageService = {
  getAuthdata () {
    const data = JSON.parse(localStorage.getItem(AUTH_KEY))
    return data
  },

  saveAuthdata (data, token) {
    const datas = Object.assign({
      email: data.email,
      fullName: data.fullName,
      company: data.company,
      token: token
    })
    localStorage.setItem(AUTH_KEY, JSON.stringify(datas))
  },

  removeAuthdata () {
    localStorage.removeItem(AUTH_KEY)
  }
}

export default AuthStorageService
