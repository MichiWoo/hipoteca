export const state = () => ({
  inForm: false,
  idSession: '',
  formularios: [],
  conexiones: [],
})

export const getters = (state) => ({
  getInForm: state.inForm,
  getSession: state.idSession,
  formularios(state) {
    return state.formularios
  },
  conexiones(state) {
    return state.conexiones
  },
})

export const mutations = {
  goToForm(state, position) {
    state.inForm = position
  },
  setIdSession(state, idSession) {
    state.idSession = idSession
  },
  SET_FORMULARIOS(state, formularios) {
    state.formularios = formularios
  },
  SET_CONEXIONES(state, conexiones) {
    state.conexiones = conexiones
  },
  CREATE_CONEXION(state, conexion) {
    state.conexiones.push(conexion)
  },
}

export const actions = {
  async createConexion({ commit }, conexion) {
    console.log(JSON.stringify(conexion))
    await this.$axios
      .post('/conexiones', JSON.stringify(conexion))
      .then((res) => {
        commit('CREATE_CONEXION', res.data)
      })
      .catch((err) => console.log(err))
  },
}
