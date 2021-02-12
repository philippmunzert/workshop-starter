<template>
  <div class="container lg:max-w-screen-lg mx-auto px-6 py-2">
    <h1 class="text-base font-display font-bold tracking-wide uppercase py-2">
      Live Sessions
    </h1>
    <ul class="list-reset">
      <li v-for="event in events" :key="event.id">
        <session-card :eventData="event"></session-card>
      </li>
    </ul>
  </div>
</template>

<script>
import SessionCard from "./../components/SessionCard.vue";

export default {
  name: "PageSessions",
  components: {
    SessionCard,
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
  },
};
</script>
