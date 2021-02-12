<template>
  <div class="center mt-8">
    <QuestionForm @addQuestion="addNewQuestion" />
    <template v-if="loading > 0">
      <div>
        <div>Loading...</div>
      </div>
    </template>
    <template v-else>
      <ul class="list-reset">
        <li v-for="question in questionsByEvent" :key="question.id">
          <QuestionCard v-if="!question.isAnswered" :data="question" />
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import QuestionCard from "./../components/QuestionCard.vue";
import QuestionForm from "./../components/QuestionForm.vue";

export default {
  name: "PageQuestion",
  components: {
    QuestionCard,
    QuestionForm,
  },
  // Local state
  data() {
    return {
      loading: 0,
      questionsByEvent: [
        {
          text: "Wie setze ich Routen für meine Single File Komponenten?",
          author: "Philipp Munzert",
          id: "1",
          isAnswered: false,
        },
      ],
    };
  },
  methods: {
    addNewQuestion(question) {
      const newQuestion = {
        text: question.text,
        author: question.name,
        id: this.questionsByEvent.length + 1,
        isAnswered: false,
      };
      this.questionsByEvent.push(newQuestion);
    },
  },
};
</script>
