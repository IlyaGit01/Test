<template>
  <div class="container">
    <h1>Фильтрация по amount</h1>

    <div>
      <label for="all">
        <input
          id="all"
          type="radio"
          value="all"
          v-model="localFilter"
        />
        Все
      </label>
    </div>

    <div>
      <label for="negative">
        <input
          id="negative"
          type="radio"
          value="negative"
          v-model="localFilter"
        />
        Меньше 0
      </label>
    </div>

    <div>
      <label for="positive">
        <input
          id="positive"
          type="radio"
          value="positive"
          v-model="localFilter"
        />
        Больше 0 или равно
      </label>
    </div>

    <h1>Сортировка по amount</h1>
    <div>
      <label for="sum">
        <input
          id="sum"
          name="sum"
          type="checkbox"
          v-model="localIsSorted"
        />
        Сортировать по сумму
      </label>
    </div>

    <h1>Кол-во сгенерированных итемов</h1>

    <div>
      <label for="item-count-input">
        <input
          id="item-count-input"
          name="item-count-input"
          class="item-count-input"
          type="number"
          :value="count"
          @input="$emit('update:count', $event.target.value)"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnOne',

  data() {
    return {
      localFilter: '',
      localIsSorted: false,
    };
  },

  props: {
    filter: {
      type: String,
      default: '',
    },
    isSorted: {
      type: Boolean,
      default: false,
    },
    count: {
      type: Number,
      default: 0,
    },
  },

  watch: {
    localFilter() {
      this.$emit('update:filter', this.localFilter);
    },
  },

  emits: ['update:filter', 'update:count'],
};
</script>

<style scoped class="scss">

.container {
  padding-left: 20px;

  border-right: 2px solid black;
  height: 100%;
  width: 40%;
}

.item-count-input {
  width: 80px;
  margin-top: 20px;
}

</style>
