// //创建一个应用实例
// const app = Vue.createApp({
//     /*选项 */
// })

//根组件
const RootComponent = {
  /*选项 */
};
const app = Vue.createApp(RootComponent);
const vm = app.mount("#app");

//组件实例 property
const app1 = Vue.createApp({
  data() {
    return {
      count: 4,
    };
  },
});
const vm1 = app1.mount("#app");
console.log(vm1.count);

//生命周期钩子
Vue.createApp({
  data() {
    return {
      count: 1,
    };
  },
  created() {
    //`this`指向vm实例
    console.log("count is :" + this.count); //"count is : 1"
  },
});
