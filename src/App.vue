<template>
  <div class="app-container">
    <ColumnOne />
    <ColumnTwo />
    <ColumnThree />
  </div>
</template>

<script>
import ColumnOne from '@/views/ColumnOne.vue';
import ColumnTwo from '@/views/ColumnTwo.vue';
import ColumnThree from '@/views/ColumnThree.vue';

export default {
  name: 'App',
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
</style>
