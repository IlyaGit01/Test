import { createStore } from 'vuex';

function getRandomArbitrary() {
  return Math.random() * (1000 - (-1000)) + (-1000);
}

export default createStore({
  state: {
    items: [],
    filter: 'all',
    selectedItems: {},
  },

  getters: {
    getFilteredItems(state) {
      const { filter, items } = state;

      if (filter === 'negative') return items.filter((item) => item.amount < 0);
      if (filter === 'positive') return items.filter((item) => item.amount > 0);
      if (filter === 'sum') {
        const arrayToSort = [...items];
        return arrayToSort.sort((a, b) => b.amount - a.amount);
      }

      return items;
    },

    getSelectedItems(state) {
      return Object.values(state.selectedItems);
    },
  },

  mutations: {
    generateItems(state, value) {
      state.items = Array(value).fill({}).map((item, index) => ({
        id: index + 1,
        amount: Math.round(getRandomArbitrary()),
      }));
    },

    setFilter(state, value) {
      state.filter = value;
    },

    pushToSelectedItems(state, value) {
      state.selectedItems[value.id] = value;
    },

    updateItemAmount(state, payload) {
      const { id, amount } = payload;
      state.items[id - 1].amount = amount;
    },
  },
});
