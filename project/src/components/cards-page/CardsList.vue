<template>
  <div>
    <draggable class="cards-list" v-model="cards" group="people" @start.prevent="drag=false" @end="drag=false" :move="storMove">
      <Card class="card-item" v-for="item in cards" :key="item.id" :item="item" />
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
      isDrogDisable: false
    }
  },
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  methods: {
    storMove () {
      return this.isDrogDisable ? false : null
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
