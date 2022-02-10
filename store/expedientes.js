export const state = () => ({
  expedientes: [],
  expedienteSel: {},
})

export const getters = {
  expedientesNoContactados (state) {
    return state.expedientes.filter( (exp) => exp.estado === 0 )
  },

  expedientesContactados (state) {
    return state.expedientes.filter( (exp) => exp.estado === 5 )
  },

  expedientesEsperando (state) {
    return state.expedientes.filter( (exp) => exp.estado === 1 )
  },

  expedientesTramitando (state) {
    return state.expedientes.filter( (exp) => exp.estado === 2 )
  },

  expedientesFirmando (state) {
    return state.expedientes.filter( (exp) => exp.estado === 3 )
  },

  expedientesFallida (state) {
    return state.expedientes.filter( (exp) => exp.estado === 4 )
  },

  expedientesBanco (state) {
    return state.expedientes.filter( (exp) => exp.tramites.length > 0 )
  }
}

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
