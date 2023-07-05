<template>
  <div class="input">
    <label v-if="isLabel" class="label_input" :for="id">
      <span v-if="required"> * </span>
    </label>
    <template v-if="type === 'text'">
      <input
        ref="inputRef"
        :type="type"
        :class="[
          className,
          required ? '' : 'input--gray',
          number ? 'input_number--r' : '',
          isError ? 'input--error' : '',
        ]"
        :placeholder="placeholder"
        :id="id"
        :name="name"
        :value="modelValue"
        :disabled="isDisabled"
        :maxlength="maxlength"
        :isFocus="isFocus"
        @focus="handleFocus"
        @input="handleInput($event)"
      />
      <div v-show="isError" class="input_text--err">
        {{ this.labelError }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "MInput",
  props: [
    "type",
    "className",
    "placeHolder",
    "id",
    "name",
    "icon",
    "isDisabled",
    "maxLength",
    "isFocus",
    "required",
    "modelValue",
    "number",
  ],
  emits: ["update:modelValue"],

  data() {
    return {
      isError: false,
      labelError: null,
    };
  },
  methods: {
    /**
     * Function handle focus input
     * Author: HMDUC
     */
    handleFocus() {
      this.$nextTick(() => {
        this.$refs.inputRef.focus();
        this.$refs.inputRef.select();
      });
    },

    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
      if (e.target.value) {
        this.isError = false;
      }
    },
  },
};
</script>

<style>
@import "@/css/base/input.css";
</style>
