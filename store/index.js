export const state = () => ({
  inForm: false,
  idSession: '',
})

export const getters = (state) => ({
  getInForm: state.inForm,
  getSession: state.idSession,
})

export const mutations = {
  goToForm(state, position) {
    state.inForm = position
  },
  setIdSession(state, idSession) {
    state.idSession = idSession
  },
}
