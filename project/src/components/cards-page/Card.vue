<template>
  <div :class="['card', {'card-draggable': isDragDisable}]">
    <div class="card__name">
        {{ item.name }}
    </div>
    <div>
        {{ item.description }}
    </div>
  </div>
</template>
<script>

export default {
  name: 'Card',
  components: {
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    isDragDisable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
.card {
  padding: 5px 10px;
  box-sizing: border-box;
  border: none;
  box-shadow: 0 0 4px rgba(0,0,0,0.5);
  width: 180px;
  height: 100px;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
  }

  &-draggable {
    background: #f1f1f1;
  }

  &__name {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }
}
</style>
