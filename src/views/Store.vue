<template>
  <div>
    <!--父子通信-->
    <!--<a-input v-model="inputValue"/>-->
    <!--<p>{{ inputValue }}</p>-->
    <!--兄弟通信-->
    <!--<a-input @input="handleInput" />-->
    <!--<a-show :content="inputValue" />-->
    <!--调用store的state-->
    <p>appName: {{ appName }}</p>
    <p>appNameWithVersion: {{ appNameWithVersion }}</p>
    <p>userName: {{ userName }}</p>
    <!--getter-->
    <a-input @input="handleInput" />
    <p>{{ inputValue }} -> lastLetter is {{ inputValueLastLetter }}</p>

  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState } from 'vuex'
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
      appName: state => state.appName,
      userName: state => state.user.userName
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
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>
