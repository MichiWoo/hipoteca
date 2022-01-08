export const state = () => ({
  csrfToken: '',
  inForm: false,
  formularios: [],
  conexiones: [],
})

export const getters = (state) => ({
  getInForm: state.inForm,
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
  SET_FORMULARIOS(state, formularios) {
    state.formularios = formularios
  },
  SET_CONEXIONES(state, conexiones) {
    state.conexiones = conexiones
  },
  CREATE_CONEXION(state, conexion) {
    state.conexiones.push(conexion)
  },
  SET_CSRF_TOKEN(state, csrfToken) {
    state.csrfToken = csrfToken
  },
}

export const actions = {}
