export const state = () => ({
  inForm: false,
})

export const getters = (state) => ({
  getInForm: state.inForm,
})

export const mutations = {
  goToForm(state, position) {
    state.inForm = position
  },
}
