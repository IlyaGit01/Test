<template>
  <div class="container">
    <button
      v-for="item in array"
      :key="item.id"
      @click="$emit('selectItem', item)"
    >
      {{item}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ColumnTwo',

  props: {
    array: {
      type: Array,
      default: () => [],
    },
  },

  emits: ['selectItem'],
};
</script>

<style scoped lang="scss">

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
