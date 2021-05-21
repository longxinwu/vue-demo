<template>
  <div class="users">
    <p>{{ sbqParents }}</p>
    <ul>
      <li
        @click="sbqParent.show = !sbqParent.show"
        v-for="(sbqParent, index) in sbqParents"
        :key="index"
      >
        <p>Name: {{ sbqParent.name }}</p>
        <p v-show="sbqParent.show">WeChat: {{ sbqParent.wechat }}</p>
      </li>
    </ul>
    <!-- 传引用-->
    <button @click="deleteUser">deleteUser</button>
    <p>==============================================================</p>
    <ul>
      <li
        @click="user.show = !user.show"
        v-for="(user, index) in users"
        :key="index"
      >
        <p>Name: {{ user.name }}</p>
        <p v-show="user.show">WeChat: {{ user.wechat }}</p>
      </li>
    </ul>
    <p>===============================================================</p>
    <!-- slot插槽的使用 -->
    <slot name="title"></slot>
    <p>===============================================================</p>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  props: {
    sbqParents: {
      // type: Array,
    },
  },
  data() {
    return {
      users: [
        { name: "杨紫1", wechat: "12345678", show: true },
        { name: "杨紫2", wechat: "12345678", show: false },
        { name: "杨紫3", wechat: "12345678", show: false },
        { name: "刘浩存1", wechat: "87654321", show: true },
        { name: "刘浩存2", wechat: "87654321", show: false },
        { name: "刘浩存3", wechat: "87654321", show: false },
      ],
      parents: this.sbqParents,
    };
  },
  methods: {
    deleteUser() {
      this.parents.pop();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--此处scoped 表示下面的样式只作用于 该页面-->
<style scoped>
.users {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid black;
  margin: 10px;
}
h1 {
  color: green;
}
</style>
