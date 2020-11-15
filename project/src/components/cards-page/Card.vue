<template>
  <div>
    <div>
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
