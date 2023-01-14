<template>
  <h2>测试用例</h2>
  <ul>
    <li @click="openDialog()">打开弹框</li>
  </ul>
</template>
<script setup lang="ts">
import { useDialogStore } from "../stores/index";

let dialogStore = useDialogStore();

function openDialog() {
  dialogStore.openDialog({
    id: "confirm",
    data: ["警告", "是否确定点击此按钮？"],
    callback(data) {
      console.log("是否点击了确定:" + data);
    },
  });
}
</script>
<style lang="scss" scoped>
h2 {
  padding: 10px 40px;
  font-size: 20px;
  border-bottom: 1px solid rgb(209, 204, 204);
  margin-bottom: 10px;
}
ul {
  margin-left: 50px;
  & > li {
    list-style-type: disc;
    margin-bottom: 10px;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>