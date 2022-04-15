//!Data Property
const app = Vue.createApp({
  data() {
    return { count: 4 };
  },
});
const vm = app.mount("#app");
console.log(vm.count);
// 修改 vm.count 的值也会更新 $data.count
vm.count = 5;
console.log(vm.$data.count); // => 5

// 反之亦然
vm.$data.count = 6;
console.log(vm.count); // => 6

//! 方法
const app1 = Vue.createApp({
  data() {
    return {
      count: 5,
    };
  },
  methods: {
    increment() {
      // this 指向该组件实例
      this.count++;
    },
  },
});

const vm1 = app1.mount("#app1");
console.log(vm1.count); // => 5

vm1.increment();

console.log(vm1.count); // => 6

//! 防抖和节流
Vue.createApp({
  data() {
    return {
      count: 10,
    };
  },
  methods: {
    increment() {
      // this 指向该组件实例
      this.count++;
    },
    //用Lodash的防抖函数
    click: _.debounce(function () {
      //响应点击
    }, 500),
  },
}).mount("#app2");
