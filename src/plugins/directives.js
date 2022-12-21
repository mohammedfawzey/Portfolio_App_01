import Vue from "vue";

Vue.directive("format", {
  bind: function (el, binding) {
    el.style.display = "flex";
    el.style.justifyContent = "center";
    el.style.alignItems = "center";
    if (binding.modifiers.between) {
      el.style.justifyContent = "between";
    }
  },
});
