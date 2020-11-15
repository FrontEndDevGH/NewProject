<template>
  <div class="card-form">
    <h1 class="card-form__title">Форма создания карточки</h1>
    <label for="name">Название</label>
    <input
      id="name"
      class="card-form__field"
      @input="changeName"
      v-model="name"
    />
    <label for="description">Описание</label>
    <textarea
      id="description"
      class="card-form__field"
      @input="changeDescription"
      v-model="description"
    />
  </div>
</template>
<script>

export default {
  name: 'CreateCardForm',
  data () {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    changeName () {
      this.$emit('changeName', this.name)
    },
    changeDescription () {
      this.$emit('changeDescription', this.description)
    }
  }
}
</script>
<style lang="scss">
  .card-form {
    width: 300px;
    margin: auto;
    text-align: left;

    &__title {
      font-size: 22px;
      margin-bottom: 30px;
    }

    &__field {
      width: 100%;
      padding: 10px;
      margin: 5px 0 10px;
      font-size: 18px;
      box-sizing: border-box;
    }
  }
</style>
