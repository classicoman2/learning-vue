import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  mutations: {
    afegirUsuari: (state, user) => {
      //TIP-JS spread operator to duplicate objects
      state.users.push( { ... user })
    }
  },
  actions: {
  },
  modules: {
  }
})
