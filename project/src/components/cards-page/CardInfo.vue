<template>
  <div class="modal">
    <div class="modal__close" @click="$modal.hide('card-info-modal')">
      &#10005;
    </div>
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
<style lang="scss" scoped>
.modal {
  padding: 40px 20px;
  position: relative;

  &__name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  &__description {
    font-size: 18px;
  }

  &__close {
    font-size: 20px;
    display: block;
    width: 40px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
}
</style>
