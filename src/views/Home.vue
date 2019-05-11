<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到Parent</button>
    <button @click="handleClick('replace')">替换到Parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back()
      // else if (type === 'push') this.$router.push('/parent')
      else if (type === 'push') {
        // es6先定义name
        // const name = 'lison'
        // push会加入记录，回退正确
        this.$router.push({
          name: 'argu',
          // 可以添加一些参数
          // query: {
          //   name: 'lison'
          // }
          params: {
            name: 'lison'
          }
          // es6
          // path: `/argu/${name}`
        })
      } else if (type === 'replace') {
        // replace不会加入记录，回退的不正确
        this.$router.replace({
          name: 'parent'
        })
      }
    }
  }
}
</script>
