const state = {
  activeKey: 'home', // 激活的tab
}

const mutations = {
  setActiveKey(state, key) {
    state.activeKey = key
  }
}
const getters = {}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}