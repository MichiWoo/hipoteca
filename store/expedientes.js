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
  },

  expedientesSinAsignar (state) {
    return state.expedientes.filter( (exp) => !exp.usuario || !exp.user_id )
  }
}

export const actions = {
  async getExpedientes({commit}) {
    console.log('action - getExpedientes')
    const data = await this.$axios.$get('api/expedientes')
    console.log(data)
    commit('addExpedientes', data)
    return data
    
  },

  async addExpedientes({commit}, data) {
    console.log('action - addExpedientes')
    console.log(data)
    try {
      const { expediente } = await this.$axios.$post('api/expedientes', data)
      console.log(expediente)
      commit('createExpedientes', expediente)
      return expediente
    } catch (error) {
      return error.message      
    }
  }
}

export const mutations = {
  addExpedientes(state, expedientes) {
    console.log('mutation - addExpedientes')
    console.log(expedientes)
    state.expedientes = expedientes
  },
  createExpedientes(state, expediente) {
    console.log('mutation - createExpedientes')
    console.log(expediente)
    state.expedientes.push(expediente)
    state.expedienteSel = expediente
  },
}
