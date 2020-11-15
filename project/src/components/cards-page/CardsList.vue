<template>
  <div>
    <draggable class="cards-list" v-model="cardsList" group="people" @start.prevent="drag=false" @update="$emit('updated', cardsList)" :move="storMove">
      <Card class="card-item" v-for="item in cardsList" :key="item.id" :item="item" />
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
<style lang="scss">
.cards-list {
  width: 100%;
  max-width: 500px;
  display: flex;
  direction: row;
  flex-wrap: wrap;
  margin: 100px auto;
  border: 1px solid gray;
  padding: 10px;
}
.card-item {
  width: 105px;
  height: 70px;
  background: gray;
  margin: 10px;
}
</style>
