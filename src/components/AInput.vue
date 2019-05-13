<template>
  <input @input="handleInput" :value="value">
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      // 获取输入的值
      const value = event.target.value
      this.$emit('input', value)
    }
  }
}
</script>
