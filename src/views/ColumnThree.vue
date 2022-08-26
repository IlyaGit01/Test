<template>
  <div class="container">
    <div
      v-for="item in getSelectedItems"
      :key="item.id"
    >
      id: {{item.id}} amount: {{item.amount}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ColumnThree',
  computed: {
    ...mapGetters(['getSelectedItems']),
  },
};
</script>

<style scoped>

.container {
  width: 30%;
  height: 100%;
  padding-left: 12px;
  padding-top: 12px;
}

</style>
