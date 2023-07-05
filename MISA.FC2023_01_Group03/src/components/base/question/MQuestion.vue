<template>
  <div class="question">
    <div class="question__icon">
      <template v-if="ques.type === 0">
        <div class="icon--question icon-50 icon"></div
      ></template>
      <template v-else-if="ques.type === 1">
        <div class="icon--discuss icon-50 icon"></div>
      </template>
      <template v-else-if="ques.type === 2">
        <div class="icon--share icon-50 icon"></div>
      </template>
    </div>
    <div class="question__content">
      <div class="question__text">{{ ques.question_content }}</div>
      <div class="question__info">
        <div class="author">{{ ques.name }}</div>
        <div class="answer">
          Đã trả lời:
          <span>{{ ques.total }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MQuestion",
  props: [
    "icon",
    "type",
    "count",
    "threadName",
    "threadType",
    "threadUser",
    "answerNumber",
    "ques",
  ],
};
</script>

<style>
@import "@/css/base/question.css";
</style>
