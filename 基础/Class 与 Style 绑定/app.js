const app = Vue.createApp({
  data() {
    return {
      isActive: true,
      hasError: false,
      error: null,
    };
  },
  data() {
    return {
      activeClass: "active",
      errorClass: "text-danger",
    };
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal",
      };
    },
  },

  //对象语法
  data() {
    return {
      styleObject: {
        color: "red",
        fontSize: "13px",
      },
    };
  },
});
