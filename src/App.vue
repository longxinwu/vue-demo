<template>
  <div id="app">
    <HelloWorld />
    <!-- 使用组件 -->
    <Header @titleChange="updateTitle" :title="title" />
    <Users v-bind:sbqParents="parents">
      <template v-slot:title>
        <h2>利用slot将h2标签内容从父组件传到子组件 {{ title }}</h2>
      </template>
      <template v-slot:text>
        <p>利用slot将p标签内容从父组件传到子组件 {{ title }}</p>
      </template>
    </Users>
    <Footer :title="title" />
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
</template>

<script>
//局部组件嵌套
import HelloWorld from "./components/HelloWorld.vue";
// 1.引入组件
import Header from "./components/Header.vue";
import Users from "./components/Users.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    //加入组件
    Header,
    Users,
    Footer,
  },
  data() {
    return {
      parents: [
        { name: "longinwu1", wechat: "12345678", show: true },
        { name: "longxinwu2", wechat: "12345678", show: false },
        { name: "longxinwu3", wechat: "12345678", show: false },
        { name: "longxinwu1", wechat: "87654321", show: true },
        { name: "longxinwu2", wechat: "87654321", show: false },
        { name: "longxinwu3", wechat: "87654321", show: false },
      ],
      title: "longxinwu",
    };
  },
  methods: {
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
      //console.log(updatedTitle);
    },
  },
};
</script>

<style>
h1 {
  color: red;
}
</style>
