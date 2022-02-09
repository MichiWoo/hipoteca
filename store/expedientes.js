export const state = () => ({
  expedientes: [],
  expedienteSel: {},
})

export const getters = {}

export const actions = {
  async getExpedientes({commit}) {
    console.log('action - getExpedientes')
    const data = await this.$axios.$get('api/expedientes')
    console.log(data)
    commit('addExpedientes', data)
    return data
  }
}

export const mutations = {
  addExpedientes(state, expedientes) {
    console.log('mutation - addExpedientes')
    console.log(expedientes)
    state.expedientes = expedientes
  }
}
