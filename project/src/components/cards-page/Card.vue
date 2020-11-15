<template>
  <div class="card">
    <div class="card__name">
        {{ item.name }}
    </div>
    <div>
        {{ item.description }}
    </div>
  </div>
</template>
<script>
import { VueDraggableDirective } from 'vue-draggable'

export default {
  name: 'Card',
  components: {
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  directives: {
    dragAndDrop: VueDraggableDirective
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
  transition: .3s;

  &:hover {
    box-shadow: 0 0 8px rgba(0,0,0,0.5);
  }

  &__name {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }
}
</style>
