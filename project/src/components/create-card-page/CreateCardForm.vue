<template>
  <div>
    <input @input="changeName" v-model="name" />
    <textarea @input="changeDescription" v-model="description" />
  </div>
</template>
<script>
export default {
  name: 'CreateCardForm',
  data () {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    changeName () {
      this.$emit('changeName', this.name)
    },
    changeDescription () {
      this.$emit('changeDescription', this.description)
    }
  }
}
</script>
