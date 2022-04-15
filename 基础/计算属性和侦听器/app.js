//! 计算属性
const app = Vue.createApp({
  data() {
    return {
      author: {
        name: "lzy",
        books: ["vue 1 - LeeDieu", "vue 2 - ZyDieu", "vue 3 - ZyLeeDieu"],
      },
    };
  },
});
app.mount("#computed-basics");

//! 基本例子
const app1 = Vue.createApp({
  data() {
    return {
      author: {
        name: "lzy",
        books: ["vue 1 - LeeDieu", "vue 2 - ZyDieu", "vue 3 - ZyLeeDieu"],
      },
    };
  },
  computed: {
    //计算属性的 getter
    publishedBookMessage() {
      //this 指向 vm的实例
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
});
app1.mount("#computed-basics1");

//! 计算属性缓存 vs 方法

const app2 = Vue.createApp({
  data() {
    return {};
  },

  computed: {
    now() {
      return Date.now();
    },
  },
  //   methods: {
  //     now() {
  //       return Date.now();
  //     },
  //   },
});
app2.mount("#date");

// ! 计算属性的 Setter
const app3 = Vue.createApp({
  data() {
    return {
      firstName: "Lee",
      lastName: "zy",
    };
  },
  computed: {
    fullName: {
      //getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      //setter
      set(newValue) {
        const names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
});

const vm = app3.mount("#app");
console.log(vm.fullName);
vm.fullName = "zy lee";
console.log(vm.fullName);

//! 侦听器
const watchExampleVM = Vue.createApp({
  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
    };
  },
  watch: {
    //每当question发生变化时，该函数将会执行
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer();
      }
    },
  },
  methods: {
    getAnswer() {
      this.answer = "Thinking...";
      axios
        .get("https://yesno.wtf/api")
        .then((response) => {
          this.answer = response.data.answer;
        })
        .catch((error) => {
          this.answer = "Error! Could not reach the API.";
        });
    },
  },
});
watchExampleVM.mount("#watch-example");

//!计算属性 vs 侦听器
const vm1 = Vue.createApp({
  data() {
    return {
      firstName: "lee",
      lastName: "chiyuen",
      fullName: "lee chiyuen",
    };
  },
  watch: {
    firstName(val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName(val) {
      this.fullName = this.firstName + " " + val;
    },
  },
});
vm1.mount("#demo");

const vm3 = Vue.createApp({
  data() {
    return {
      firstName: "lee",
      lastName: "chiyuen",
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
});
vm3.mount("#demo1");
