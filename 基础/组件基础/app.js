//创建一个Vue应用
const app = Vue.createApp({});

//定义一个名为button-counter的新全局组件
app.component("button-counter", {
  data() {
    return {
      count: 0,
    };
  },
  props: ["lzy"],
  template: `
    <button @click="count++">
            You clicked me {{count}} times.
        </button>
    `,
});
app.mount("#components-demo");
