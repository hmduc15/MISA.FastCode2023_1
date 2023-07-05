<template>
  <div v-if="!isShow">
    <div class="discuss__list-header">
      <div class="page">Thảo luận/ hỏi đáp</div>
      <m-button
        class="btn--main btn--sm"
        content="Thêm thảo luận/câu hỏi"
        icon="icon--add icon-24"
      ></m-button>
    </div>
    <div class="discuss__list-content">
      <div class="discuss__list-top">
        <div class="input__wrapper">
          <m-input
            className="input--default input_text"
            type="text"
            :isLabel="false"
          ></m-input>
          <div class="input_icon icon icon--search icon-24"></div>
        </div>
        <m-button
          class="btn--sm btn--refresh"
          icon="icon--refresh icon-24"
        ></m-button>
      </div>
      <div class="discuss__list-body">
        <m-question
          v-for="(item, index) in data"
          :key="index"
          :ques="item"
          @dblclick="handleOpen(item)"
        ></m-question>
      </div>
    </div>
  </div>
  <discuss-detail v-if="isShow" :ques="ques"></discuss-detail>
</template>
<script>
import DiscussDetail from "./DiscussDetail.vue";
import MButton from "@/components/base/button/MButton";
import MInput from "@/components/base/MInput";
import MQuestion from "@/components/base/question/MQuestion";
import axios from "axios";

export default {
  name: "DiscussList",
  components: {
    "m-button": MButton,
    "m-input": MInput,
    "m-question": MQuestion,
    "discuss-detail": DiscussDetail,
  },

  created() {
    this.getListQues();
  },
  data() {
    return {
      data: null,
      isShow: false,
      ques: null,
    };
  },

  methods: {
    getListQues() {
      axios
        .get("https://localhost:7123/api/Questions")
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error(error);
        });
    },
    handleOpen(item) {
      this.ques = item;
      this.isShow = true;
    },
  },
};
</script>
<style scoped>
.page__container {
  padding: 16px;
}

.thread-list {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.thread__icon {
  width: 40px;
  height: 40px;
  background-size: 40px;
  border-radius: 50%;
  flex: 0 0 40px;
  background-repeat: no-repeat;
  background-position: center;
}

.thread-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 10px;
  padding: 10px 0;
}

.thread-item + .thread-item {
  border-top: 1px solid var(--border-color-default);
}

.thread-item__title {
  font-weight: 700;
  color: var(--color-primary);
}

.thread-item__info {
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-top: 4px;
  font-size: 12px;
}

@import "@/css/views/discuss.css";
</style>
