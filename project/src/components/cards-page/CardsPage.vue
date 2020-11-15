<template>
    <div class="cards-page-wrapper">
      <CardsList
        class="card-list"
        :cards="cards"
      />
    </div>
</template>
<script>
import CardsList from './CardsList.vue'

export default {
  name: 'CardsPage',
  components: {
    CardsList
  },
  data () {
    return {
      cards: [
        {
          name: 'name 1',
          description: 'description 1',
          id: 1
        },
        {
          name: 'name 2',
          description: 'description 2',
          id: 2
        },
        {
          name: 'name 3',
          description: 'description 2',
          id: 3
        },
        {
          name: 'name 4',
          description: 'description 2',
          id: 4
        },
        {
          name: 'name 5',
          description: 'description 2',
          id: 5
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.cards-page-wrapper {
  .card-list {
  }
}
</style>
