<template>
  <div>
    <CreateCardForm
      @changeName="fields.name = $event"
      @changeDescription="fields.description = $event"
    />
    <button @click="saveCard" class="save-card">Сохранить</button>
    <button @click="cancel" class="cancel">Отмена</button>
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
        description: ''
      }
    }
  },
  methods: {
    saveCard () {
      this.$emit('saveCard', this.fields)
      this.$router.push({ name: 'CardsPage', params: { newCard: this.fields } })
    },
    cancel () {
      this.$router.push({ name: 'CardsPage' })
    }
  }
}
</script>
