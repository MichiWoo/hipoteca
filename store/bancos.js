export const state = () => ({
  bancos: [],
  bancoSel: {},
})

export const getters = {

}

export const actions = {
  async getBancos({commit}) {
    console.log('action - getBancos')
    const data = await this.$axios.$get('api/bancos')
    console.log(data)
    commit('addBancos', data)
    return data
    
  },
}

export const mutations = {
  addBancos(state, bancos) {
    console.log('mutation - addBancos')
    console.log(bancos)
    state.bancos = bancos
  },
}