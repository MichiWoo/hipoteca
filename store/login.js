export const state = () => ({
  user: {},
  loggedIn: false,
  token: '',
})

export const mutations = {
  login(state, user, token) {
    state.user = user
    state.loggedIn = true
    state.token = token
  },
}

export const actions = {
  loguinIn({ commit }, user, token) {
    commit('login', user, token)
  },
}
