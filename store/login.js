export const state = () => ({
  user: {},
  loggedIn: false,
  token: '',
})

export const mutations = {
  login(state, user) {
    state.user = user
    state.loggedIn = true
  },
  saveToken(state, token) {
    state.token = token
  },
}
