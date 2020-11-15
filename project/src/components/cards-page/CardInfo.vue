<template>
  <div>
    <div>{{ item.name }}</div>
    <div>{{ item.description }}</div>
  </div>
</template>
<script>
export default {
  name: 'CardInfo',
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
