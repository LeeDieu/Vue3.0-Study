// ! 文本 (Text)
Vue.createApp({
  data() {
    return {
      message: "",
    };
  },
}).mount("#demo");

// ! 多行文本 (Textarea)
Vue.createApp({
  data() {
    return {
      message: "",
    };
  },
}).mount("#demo1");

// ! 复选框 (Checkbox)
Vue.createApp({
  data() {
    return {
      checked: "",
    };
  },
}).mount("#demo2");

Vue.createApp({
  data() {
    return {
      checkNames: [],
    };
  },
}).mount("#v-model-multiple-checkboxes");

//! 单选框 (Radio)
Vue.createApp({
  data() {
    return {
      picked: "",
    };
  },
}).mount("#v-model-radiobutton");

// ! 选择框 (Select)
Vue.createApp({
  data() {
    return {
      selected: "",
      selectedMultiple: "",
    };
  },
}).mount("#v-model-select");
