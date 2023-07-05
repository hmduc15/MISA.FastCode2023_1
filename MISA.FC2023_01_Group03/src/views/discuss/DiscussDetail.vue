<template>
  <div class="discuss__detail">
    <div class="discuss__title">
      <span> Tiêu đề </span>
      <p>{{ ques.title }}</p>
    </div>
    <div class="discuss__author">
      <span>Người đăng:</span>
      {{ ques.name }}
    </div>
    <div class="discuss__content">
      {{ ques.question_content }}
    </div>
    <div class="discuss__answer">
      <ul>
        <li v-for="(item, index) in answers" :key="index">
          <div>{{ item.answer_name }}</div>
          <div>{{ item.answer_content }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DicussDetail",
  props: ["ques"],
  created() {
    this.getAnswer();
  },
  data() {
    return {
      answers: [],
    };
  },
  methods: {
    getAnswer() {
      axios
        .get(
          "https://localhost:7123/api/Questions/Answers?question_id=" +
            this.ques.question_id
        )
        .then((response) => {
          this.answers = response.data;
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
