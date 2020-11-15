<template>
    <div class="cards-page__wrapper">
      <div class="cards-page__header">
        <button class="cards-page__add" @click="addCard">Добавить</button>
        <button :class="['drag-switcher', {'drag-disabled': isDragDisable}]" @click="disableDrag">
          {{ dragSwitcherText }}
        </button>
      </div>
      <CardsList
        class="card-list"
        :cards="cards"
        :is-drag-disable="isDragDisable"
        @updated="updateCards"
        @showModal="show"
      />
      <modal name="my-first-modal">
        <CardInfo
          :item="currentCard"
        />
      </modal>
    </div>
</template>
<script>
import CardsList from './CardsList.vue'
import CardInfo from './CardInfo.vue'

export default {
  name: 'CardsPage',
  components: {
    CardsList,
    CardInfo
  },
  data () {
    return {
      currentCard: {},
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
        }
      ],
      isDragDisable: false
    }
  },
  computed: {
    dragSwitcherText () {
      return this.isDragDisable ? 'Разблокировать' : 'Заблокировать'
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
    show (value) {
      this.currentCard = value
      this.$modal.show('my-first-modal')
    },
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
.cards-page {
  &__wrapper {
    margin-top: 30px;
  }
  &__header {
    width: 800px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  &__add {
    width: 130px;
    padding: 15px 0;
    border: none;
    background: #29c2a7;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;

    &:hover {
      background: #2ed8ba;
    }
  }
}
.drag-switcher {
  width: 120px;
}
.drag-disabled {
  background: gray;
}
</style>
