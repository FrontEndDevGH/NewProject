<template>
  <div class="create-card">
    <CreateCardForm
      @changeName="fields.name = $event"
      @changeDescription="fields.description = $event"
    />
    <div class="create-card__buttons">
      <button @click="saveCard" class="create-card__save">Сохранить</button>
      <button @click="cancel" class="create-card__cancel">Отмена</button>
    </div>
  </div>
</template>
<script>
import CreateCardForm from './CreateCardForm.vue'

export default {
  name: 'CreateCardPage',
  components: {
    CreateCardForm
  },
  data () {
    return {
      fields: {
        name: '',
        description: '',
        id: `f${(~~(Math.random() * 1e8)).toString(16)}`
      }
    }
  },
  methods: {
    saveCard () {
      if (!this.fields.name || !this.fields.description) {
        this.$toast.error('Пожалуйста, заполните все поля формы!', { position: 'top-right' })
        return
      }
      this.$emit('saveCard', this.fields)
      this.$router.push({ name: 'CardsPage', params: { newCard: this.fields } })
    },
    cancel () {
      this.$router.push({ name: 'CardsPage' })
    }
  }
}
</script>
<style lang="scss">
  .create-card {
    margin-top: 200px;

    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }

    &__buttons {
      width: 300px;
      margin: auto;
      display: flex;
      justify-content: space-between;
    }

    &__save {
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

    &__cancel {
      width: 130px;
      border: 1px solid grey;
      background: #fff;
      border-radius: 5px;
      padding: 15px 0;
      cursor: pointer;
    }
  }
</style>
