<template>
  <transition appear name="fade">
    <div
      v-if="!data.isAnswered && showCard"
      class="question-card flex justify-center p-4 mx-auto"
      @click="markAnswered"
    >
      <div
        class="max-w-md border-r w-full border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-200 bg-white rounded p-4 flex flex-col justify-between leading-normal shadow"
      >
        <div class="mb-2">
          <div class="text-black font-bold text-xl mb-2">{{ data.text }}</div>
        </div>
        <div>
          <div class="text-sm text-center">
            <p class="text-black leading-none font-bold">{{ data.author }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "QuestionCard",
  props: {
    data: Object,
  },
  data() {
    return {
      showCard: true,
    };
  },
  methods: {
    markAnswered() {
      this.showCard = !this.showCard;
    },
  },
};
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  animation: slide-in 0.75s;
}

.fade-leave-to {
  animation: slide-out 0.5s;
  transform: height 1s ease;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(100vh);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
    max-height: 500px;
  }
  75% {
    opacity: 0;
    transform: translateX(100vw);
  }

  100% {
    transform: translateX(100vw);
    max-height: 0px;
    padding: 0;
  }
}
</style>
