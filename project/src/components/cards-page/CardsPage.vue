<template>
    <div class="cards-page__wrapper">
      <div class="cards-page__header">
        <button class="cards-page__add" @click="addCard">Добавить</button>
        <Switcher @click="disableDrag" />
      </div>
      <CardsList
        :cards="cards"
        :is-drag-disable="isDragDisable"
        @updated="updateCards"
        @showModal="show"
      />
      <modal name="card-info-modal" adaptive>
        <CardInfo :item="currentCard" />
      </modal>
    </div>
</template>
<script>
import CardsList from './CardsList.vue'
import CardInfo from './CardInfo.vue'
import Switcher from './Switcher.vue'

export default {
  name: 'CardsPage',
  components: {
    CardsList,
    CardInfo,
    Switcher
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
  beforeMount () {
    const savedCardsList = sessionStorage.getItem('cardsArr')
    this.cards = savedCardsList ? JSON.parse(savedCardsList) : this.cards
    if (this.$route.params.newCard) {
      this.$toast.success('Вы успешно добавили новую карточку!', { position: 'top-right' })
      this.cards.unshift(this.$route.params.newCard)
      this.updateCards()
    }
  },
  methods: {
    show (value) {
      this.currentCard = value
      this.$modal.show('card-info-modal')
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
<style lang="scss" scoped>
.cards-page {
  &__wrapper {
    margin-top: 30px;
  }

  &__header {
    width: 100%;
    max-width: 800px;
    margin: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
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
</style>
