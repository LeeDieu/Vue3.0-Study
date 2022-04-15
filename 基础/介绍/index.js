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

const AttributeBinding = {
  data() {
    return {
      message: "You load this page on " + new Date().toLocaleString(),
    };
  },
};

Vue.createApp(AttributeBinding).mount("#bind-attribute");

//处理用户输入
const EventHandling = {
  data() {
    return {
      message: "Hello Vue.js! LeeDieu",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};

Vue.createApp(EventHandling).mount("#event-handling");

const TwoWayBinding = {
  data() {
    return {
      message: "Hello lzy!",
    };
  },
};

Vue.createApp(TwoWayBinding).mount("#two-way-binding");

//条件与循环
const ConditionalRendering = {
  data() {
    return {
      seen: false,
    };
  },
};

Vue.createApp(ConditionalRendering).mount("#conditional-rendering");

const ListRendering = {
  data() {
    return {
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
};

Vue.createApp(ListRendering).mount("#list-rendering");

//组件化应用构建
const TodoItem = {
  props: ["todo"],
  template: `<li>{{todo.text}}</li>`,
};
const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Chese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
        { id: 3, text: "lzy" },
      ],
    };
  },
  components: {
    TodoItem,
  },
};

const app = Vue.createApp(TodoList);

app.mount("#todo-list-app");
