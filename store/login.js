export const state = () => ({
  user: {},
  loggedIn: false,
  token: '',
})

export const actions = {
  async loguinUser({ commit }, userForm) {
    console.log('action - loguinUser')
    try {
      const { data } = await this.$auth.loginWith('local', { data: userForm })
      console.log(data)
      const accessToken = data.access_token
      const userDB = data.user
      console.log(accessToken)
      commit('login', { userDB, accessToken })
      return data
    } catch (error) {
      return { ok: false, message: error.message }
    }
  },
}

export const mutations = {
  login(state, { userDB, accessToken }) {
    console.log(accessToken)
    if (accessToken) {
      localStorage.setItem('token', accessToken)
      state.token = accessToken
    }
    state.user = userDB
    state.loggedIn = true
  },
}
