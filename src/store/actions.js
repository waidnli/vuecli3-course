import { getAppName } from '@/api/app'

const actions = {
  // 用es6的解构赋值
  // updateAppName ({ commit }) {
  //   getAppName().then(res => {
  //     // console.log(res)
  //     // commit('SET_APP_NAME', res.info.appName)
  //     // es6
  //     const { info: { appName } } = res
  //     commit('SET_APP_NAME', appName)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }

  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (e) {
      console.log(e)
    }
  }
}

export default actions
