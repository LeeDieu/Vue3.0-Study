Vue.createApp({
  data() {
    return {
      items: [{ message: "lzy" }, { message: "lee" }],
    };
  },
}).mount("#array-rendering");

Vue.createApp({
  data() {
    return {
      parentMessage: "Parent111",
      items: [{ message: "lzy1" }, { message: "lzy2" }],
      myObject: {
        title: "study",

        date: 2022 - 10 - 25,
        name: "lzy",
      },
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
  },
}).mount("#array-with-index");

Vue.createApp({
  data() {
    return {};
  },
}).mount("#range");

const app = Vue.createApp({
  data() {
    return {
      newTodoText: "",
      todos: [
        { id: 1, title: "lzy" },
        { id: 2, title: "leedieu" },
        { id: 3, title: "zydieu" },
        { id: 4, title: "zylee" },
      ],
      nextTodoId: 5,
    };
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
});
app.component("todo-item", {
  template: `
        <li>
        {{title}}
        <button @click="$emit('remove')">Remove</button>
    </li>
    `,
  props: ["title"],
  emits: ["remove"],
});
app.mount("#todo-list-example");
