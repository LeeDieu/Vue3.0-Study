// ! 监听事件
Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
}).mount("#basic-event");

// ! 事件处理方法
Vue.createApp({
  data() {
    return {
      name: "Vue.js LeeDieu",
    };
  },
  methods: {
    greet(event) {
      //`methods`内部的`this`指向当前活动实例
      alert("Hello " + this.name + "!");
      //`event`是原生DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
}).mount("#event-with-method");

// ! 内联处理器中的方法
Vue.createApp({
  data() {
    return {};
  },
  methods: {
    say(message) {
      alert(message);
    },
  },
}).mount("#inline-handler");

// ! 多事件处理器
Vue.createApp({
    data() {
        return {
            
        }
    },
    methods: {
        one(event) {
            //第一个事件处理器逻辑
        }
    },
})