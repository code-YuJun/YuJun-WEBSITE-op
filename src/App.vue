<template>
  <div>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script>
export default {
  setup() {
    console.log("显示");
    console.log(import.meta.env.VITE_APP_BASE_API);
    return {};
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
