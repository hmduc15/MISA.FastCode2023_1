<template>
  <button :class="className">
    <div :class="icon"></div>
    {{ content }}
  </button>
</template>

<script>
export default {
  name: "MButton",
  props: ["className", "content", "icon"],
};
</script>

<style>
@import "@/css/base/button.css";
@import "@/css/base/icon.css";
</style>
