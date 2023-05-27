<template>
  <div>
    <el-button type="primary">Primary</el-button>
    <!-- <svg :style="{ width: '10px', height: '10px' }">
      <use xlink:href="#icon-test"></use>
    </svg> -->
    <svg-icon name="test" width="600px" height="300px"></svg-icon>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
