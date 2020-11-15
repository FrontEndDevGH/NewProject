<template>
    <div class="cards-page-wrapper">
      <button class="add-card" @click="addCard">Добавить</button>
      <button :class="['drag-switcher', {'drag-disabled': isDragDisable}]" @click="disableDrag">
        {{ isDragDisable ? 'Разблокировать' : 'Заблокировать' }}
      </button>
      <CardsList
        class="card-list"
        :cards="cards"
        :is-drag-disable="isDragDisable"
        @updated="updateCards"
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
          id: `f${(~~(Math.random() * 1e8)).toString(16)}`
        },
        {
          name: 'name 2',
          description: 'description 2',
          id: `f${(~~(Math.random() * 1e8)).toString(16)}`
        },
        {
          name: 'name 3',
          description: 'description 2',
          id: `f${(~~(Math.random() * 1e8)).toString(16)}`
        },
        {
          name: 'name 4',
          description: 'description 2',
          id: `f${(~~(Math.random() * 1e8)).toString(16)}`
        },
        {
          name: 'name 5',
          description: 'description 2',
          id: `f${(~~(Math.random() * 1e8)).toString(16)}`
        }
      ],
      isDragDisable: false
    }
  },
  beforeMount () {
    const savedCardsList = sessionStorage.getItem('cardsArr')
    this.cards = savedCardsList ? JSON.parse(savedCardsList) : this.cards
    if (this.$route.params.newCard) {
      this.cards.push(this.$route.params.newCard)
      this.updateCards()
    }
  },
  methods: {
    disableDrag () {
      this.isDragDisable = !this.isDragDisable
    },
    updateCards (cards = this.cards) {
      this.cards = cards
      sessionStorage.setItem('cardsArr', JSON.stringify(cards))
    },
    addCard () {
      this.$router.push({ name: 'CreateCardPage' })
    }
  }
}
</script>
<style lang="scss">
.cards-page-wrapper {
  .add-card {
    width: 100px;
    border: 1px solid blue;
  }
  .drag-switcher {
    width: 120px;
  }
  .drag-disabled {
    background: gray;
  }
}
</style>
