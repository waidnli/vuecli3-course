<template>
  <div>
    <!--父子通信-->
    <!--<a-input v-model="inputValue"/>-->
    <!--<p>{{ inputValue }}</p>-->
    <!--兄弟通信-->
    <!--<a-input @input="handleInput" />-->
    <!--<a-show :content="inputValue" />-->
    <!--调用store的state-->
    <!--<p>appName: {{ appName }}</p>-->
    <!--<p>appNameWithVersion: {{ appNameWithVersion }}</p>-->
    <!--<p>userName: {{ userName }}</p>-->
    <!--getter-->
    <!--<a-input @input="handleInput" />-->
    <a-input :value="stateValue" @input="handleStateValueChange"/>
    <p>{{ stateValue }}</p>
    <p>{{ inputValue }} -> lastLetter is {{ inputValueLastLetter }}</p>
    <p>{{ inputValue }} -> firstLetter is {{ inputValueFirstLetter }}</p>
    <button @click="handleChangeAppName">修改appName {{appName}}</button>
    <p>appName: {{ appName }}</p>
    <button @click="changeUserName">修改userName</button>
    <p>userName: {{ userName }}</p>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li,index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    // ...mapState(['appName'])
    ...mapState({
      // appName: state => state.appName,
      userName: state => state.user.userName,
      todoList: state => state.user.todo ? state.user.todo.todoList : {}
    }),
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    appNameWithVersion () {
      return this.$store.getters.appWithVersion
    },
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    },
    inputValueFirstLetter () {
      return this.inputValue.substr(0, 1)
    },
    appName () {
      return this.$store.state.appName
    },
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (val) {
        this.SET_STATE_VALUE(val)
      }
    }
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_USER_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    handleChangeAppName () {
      // SET_APP_NAME 是在mutations设置的方法
      // this.SET_APP_NAME('newAppName')
      // 两个参数
      // this.$store.commit('SET_APP_NAME', {
      //   appName: 'newAppName'
      // })
      // object -> params也是对象的 params.appName
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })
      this.updateAppName()
    },
    changeUserName () {
      this.SET_USER_NAME('vue-course')
      // this.$store.dispatch('uppdateAppName', '1323')
    },
    registerModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
    },
    handleStateValueChange (val) {
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>
