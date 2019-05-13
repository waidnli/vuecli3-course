const state = {
  userName: 'lison'
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}

const actions = {
  updateUserName ({ commit, state, rootState, dispatch }) {
    // rootState.appName
    // state.userName
    // dispatch('xxx', '')
  }
  // xxx () {
  //
  // }
}

export default {
  // 命名空间
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
