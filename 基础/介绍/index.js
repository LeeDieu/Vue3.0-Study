//起步
const HelloVueApp = {
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};

Vue.createApp(HelloVueApp).mount("#hello-vue");

//声明式渲染
const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};

Vue.createApp(Counter).mount("#counter");
