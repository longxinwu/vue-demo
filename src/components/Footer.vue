<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
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
      copyright: "Copyright 2021 Demo",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--此处scoped 表示下面的样式只作用于 该页面-->
<style scoped>
footer {
  background: lightblue;
  padding: 6px;
}
p {
  color: white;
  text-align: center;
}
</style>
