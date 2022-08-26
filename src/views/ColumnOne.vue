<template>
  <div class="container">
    <h1>Фильтрация по amount</h1>

    <div>
      <label for="all">
        <input
          id="all"
          name="all"
          type="checkbox"
          :checked="filter === 'all'"
          @click="setFilter('all')"
        />
        Все
      </label>
    </div>

    <div>
      <label for="negative">
        <input
          id="negative"
          name="negative"
          type="checkbox"
          :checked="filter === 'negative'"
          @click="setFilter('negative')"
        />
        Меньше 0
      </label>
    </div>

    <div>
      <label for="positive">
        <input
          id="positive"
          :checked="filter === 'positive'"
          name="positive"
          type="checkbox"
          @click="setFilter('positive')" />
        Больше 0
      </label>
    </div>

    <h1>Сортировка по amount</h1>
    <div>
      <label for="sum">
        <input
          id="sum"
          name="sum"
          type="checkbox"
          :checked="filter === 'sum'"
          @click="setFilter('sum')"
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
          @input="generateItems(Number($event.target.value))"
        />
      </label>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'ColumnOne',
  computed: {
    ...mapState(['filter']),
  },
  methods: {
    ...mapMutations(['generateItems', 'setFilter']),
  },
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
