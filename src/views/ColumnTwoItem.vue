<template>
  <div class="item">
    <label for="item">
      <input
        :checked="isItemSelected"
        name="item"
        type="checkbox"
        @click="pushToSelectedItems(item)"
      >
    </label>
    id: {{item.id}} amount: {{item.amount}}
    <button @click="updateItemAmount({id: item.id, amount: item.amount + 1})">+1</button>
    <button @click="updateItemAmount({id: item.id, amount: item.amount - 1})">-1</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'ColumnTwoItem',
  props: {
    item: {
      type: Object,
      default: null,
    },
  },

  methods: {
    ...mapMutations(['pushToSelectedItems', 'updateItemAmount']),
  },

  computed: {
    ...mapGetters(['getSelectedItems']),

    isItemSelected() {
      return !!this.getSelectedItems.find((item) => item.id === this.item.id);
    },
  },
};
</script>

<style scoped lang="scss">

.item {
  box-sizing: border-box;
  height: 28px;
  width: 100%;
  margin-top: 4px;
  padding: 6px 0 0 12px;

  &:hover {
    background-color: rgb(240, 243, 246);
  }
}

</style>
