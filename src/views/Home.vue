<template>
  <div class="home">
    {{ food }}
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
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  // hook函数 beforeRouteEnter\beforeRouteLeave\beforeRouteUpdate...
  beforeRouteEnter (to, from, next) {
    // console.log(from.name)
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    const leave = confirm('您确定要离开吗')
    if (leave) next()
    else next(false)
  },
  // beforeEnter: (to, from, next) => {
  // if (from.name === 'about') alert('这是从about页来的')
  // else alert('这不是about页来的')
  // // 一定要调用next() 否则不会跳转
  //   next()
  // }
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
