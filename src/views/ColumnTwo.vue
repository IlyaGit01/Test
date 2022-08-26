<template>
  <div class="container">
    <ColumnTwoItem
      v-for="item in getFilteredItems"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ColumnTwoItem from '@/views/ColumnTwoItem.vue';

export default {
  name: 'ColumnTwo',
  methods: {
    ...mapMutations(['updateItemAmount']),
  },
  components: {
    ColumnTwoItem,
  },
  computed: {
    ...mapGetters(['getFilteredItems']),
  },
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  padding-top: 12px;

  border-right: 2px solid black;
  height: 100%;

  max-height: 1000px;
  overflow-y: scroll;
  width: 30%;
}

</style>
