<template>
  <div>
    <draggable
      class="cards-list"
      v-model="cardsList"
      group="cards"
      @update="$emit('updated', cardsList)"
      :move="storMove"
    >
      <Card
        class="card-item"
        v-for="item in cardsList"
        :key="item.id"
        :item="item"
        :is-drag-disable="isDragDisable"
        @click.native="$emit('showModal', item)"
      />
    </draggable>
  </div>
</template>
<script>
import Card from './Card.vue'
import draggable from 'vuedraggable'

export default {
  name: 'CardsList',
  components: {
    Card,
    draggable
  },
  data () {
    return {
      cardsList: this.cards
    }
  },
  props: {
    cards: {
      type: Array,
      required: true
    },
    isDragDisable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    storMove () {
      return this.isDragDisable ? false : null
    }
  }
}
</script>
<style lang="scss" scoped>
.cards-list {
  max-width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px auto;
  padding: 10px;
  justify-content: flex-start;

  @media screen and (max-width: 836px) {
    justify-content: center;
  }
}
</style>
