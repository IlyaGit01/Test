<template>
  <div class="container">
    <button
      v-for="item in selectedItems"
      :key="item.id"
      @click="$emit('deleteItem', item)"
    >
      {{item}}
    </button>
  </div>
</template>

<script>

export default {
  name: 'ColumnThree',

  props: {
    selectedItems: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['deleteItem'],

};
</script>

<style scoped>

.container {
  width: 30%;
  height: 100%;
  padding-left: 12px;
  padding-top: 12px;

  display: flex;
  flex-direction: column;
}

</style>
