<template>
  <div class="app-container">
    <ColumnOne
      v-model:filter="filter"
      v-model:isSorted="isSorted"
      v-model:count.number="count"
    />
    <ColumnTwo
      :array="sortedArray"
      @select-item="pushToSelectedItems"
    />
    <ColumnThree
      :selectedItems="selectedItems"
      @deleteItem="deleteItemFromSelected"
    />
  </div>
</template>

<script>
import ColumnOne from '@/views/ColumnOne.vue';
import ColumnTwo from '@/views/ColumnTwo.vue';
import ColumnThree from '@/views/ColumnThree.vue';

export default {
  name: 'App',
  data() {
    return {
      array: [],
      filter: '',
      count: 0,
      isSorted: false,
      selectedItems: [],
    };
  },

  methods: {
    getRandomArbitrary() {
      return Math.round(Math.random() * (1000 - (-1000)) + (-1000));
    },

    pushToSelectedItems(selectedItem) {
      const isItemInArray = this.selectedItems.find((item) => item.id === selectedItem.id);
      if (!isItemInArray) {
        this.selectedItems.push(selectedItem);
      }
    },

    deleteItemFromSelected(deleteItem) {
      if (this.selectedItems.length === 1 && deleteItem.id === this.selectedItems[0].id) {
        this.selectedItems.length = 0;
        return;
      }
      this.selectedItems = this.selectedItems.filter((item) => item.id !== deleteItem.id);
    },
  },

  computed: {
    filteredArray() {
      if (this.filter === 'positive') return this.array.filter((item) => item.amount >= 0);
      if (this.filter === 'negative') return this.array.filter((item) => item.amount < 0);
      return this.array;
    },

    sortedArray() {
      return this.isSorted ? [...this.filteredArray]
        .sort((a, b) => a.amount - b.amount)
        : this.filteredArray;
    },

  },

  watch: {
    count() {
      this.array = Array(this.count).fill({}).map((_, index) => ({
        id: index + 1,
        amount: this.getRandomArbitrary(),
      }));
    },
  },

  components: {
    ColumnOne,
    ColumnTwo,
    ColumnThree,
  },
};

</script>

<style lang="scss">

html, body, #app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.app-container {
  display: flex;
  height: 100%;
  width: 100%;
}

button {
  background: none;
  height: 40px;
  text-align: center;
  border: none;

  cursor: pointer;

  &:hover {
    background: beige;
  }
}
</style>
