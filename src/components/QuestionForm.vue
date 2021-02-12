<template>
  <div
    class="container py-4 px-6 bg-white rounded mx-auto mt-4 max-w-md shadow"
  >
    <h1 class="text-xl leading-normal mb-8 font-bold">Stelle eine Frage</h1>
    <form class="w-full max-w-md" @submit.prevent="sendQuestion">
      <div class="-mx-3 mb-6">
        <p v-if="error" class="text-red-500 bg-red-50 px-4 py-2">{{ error }}</p>
        <div class="w-full px-3 mb-6">
          <label
            class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2 text-left"
            >Dein Name</label
          >
          <input
            class="appearance-none block w-full bg-gray-50 text-gray-800 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Evan You"
            v-model="name"
          />
        </div>
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2 text-left"
            >Frage</label
          >
          <textarea
            class="appearance-none block w-full bg-gray-50 text-grey-darkest border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:text-black focus:border-white"
            type="text"
            placeholder="Formuliere deine Frage am besten kurz und knapp..."
            :rows="4"
            v-model="text"
          ></textarea>
        </div>
      </div>
      <button
        class="bg-green-500 w-full text-md hover:bg-green-600 text-white font-semibold py-3 px-12 border border-green-500 rounded shadow"
        type="submit"
      >
        Frage stellen
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "QuestionForm",
  data() {
    return {
      name: "",
      text: "",
      error: null,
    };
  },
  methods: {
    sendQuestion() {
      this.error = null;
      if (this.text.length > 0 && this.name.length > 0) {
        const data = {
          name: this.name,
          text: this.text,
        };
        this.$emit("addQuestion", data);
        this.clearForm();
      } else {
        this.error = "Bitte Formular checken";
      }
    },
    clearForm() {
      this.name = "";
      this.text = "";
    },
  },
};
</script>
