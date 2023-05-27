<template>
  <div>
    <el-button type="primary">Primary</el-button>
    <!-- <svg :style="{ width: '10px', height: '10px' }">
      <use xlink:href="#icon-test"></use>
    </svg> -->
    <svg-icon name="test" width="600px" height="300px"></svg-icon>
    <span class="content">显示内容</span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  setup() {
    console.log("请求")
    axios.get('/api/user/info').then((res) => {
      console.log(res)
    })
    return {};
  },
};
</script>

<style lang="scss" scoped>
.content {
  color: $base-color;
}
</style>
