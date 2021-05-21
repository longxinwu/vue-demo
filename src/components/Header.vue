<template>
  <div class="header">
    <h1 @click="changeTitle">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      typeof: String,
    },
  },
  data() {
    return {
      //title: "Vue Components Demo",
    };
  },
  methods: {
    changeTitle() {
      // 注册事件，参数1 时间名称，参数2... 值 通过注册事件修改
      this.$emit("titleChange", "子组件通过注册时间修改父组件的值");
      //this.title = this.transmitTitle;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--此处scoped 表示下面的样式只作用于 该页面-->
<style scoped>
.header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: black;
  text-align: center;
}
</style>
