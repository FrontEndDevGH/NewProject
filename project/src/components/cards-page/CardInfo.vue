<template>
  <div class="modal">
    <div class="modal__name">{{ item.name }}</div>
    <div class="modal__description">{{ item.description }}</div>
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
<style lang="scss">
.modal {
  padding: 40px 20px;

  &__name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  &__description {
    font-size: 18px;
  }
}
</style>
