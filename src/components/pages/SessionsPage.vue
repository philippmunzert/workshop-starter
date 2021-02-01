<template>
  <div class="container lg:max-w-screen-lg mx-auto px-6 py-2">
    <h1 class="text-base font-display font-bold tracking-wide uppercase py-2">
      Live Sessions
    </h1>
    <template v-if="loading > 0">
      <div class>
        <div>Loading...</div>
      </div>
    </template>
    <ul class="list-reset">
      <li v-for="event in events" :key="event.id">
        <session-card :eventData="event"></session-card>
      </li>
    </ul>
  </div>
</template>

<script>
import SessionCard from "../SessionCard.vue";

export default {
  name: "PageSessions",
  components: {
    SessionCard,
  },
  data() {
    return {
      events: [
        {
          title: "Vue Workshop Hamburg",
          timeSlot: "02. Februar um 08:00",
          slug: "vue-workshop-remote",
          isLive: true,
        },
        {
          title: "Vue Workshop Hamburg",
          timeSlot: "25. November um 09:00",
          slug: "vue-workshop-hamburg-2",
          isLive: false,
        },
        {
          title: "Vue Workshop Hamburg",
          timeSlot: "18. November um 09:00",
          slug: "vue-workshop-hamburg",
          isLive: false,
        },
        {
          title: "Vue Workshop Berlin",
          timeSlot: "13. Mai um 09:00",
          slug: "vue-workshop-berlin",
          isLive: false,
        },
        {
          title: "Vue Workshop Böblingen",
          timeSlot: "04. März um 09:00",
          slug: "vue-workshop-boeblingen",
          isLive: false,
        },
        {
          title: "Vue Workshop Leipzig",
          timeSlot: "02. Februar um 09:00",
          slug: "vue-workshop-leipzig",
          isLive: false,
        },
      ],
      loading: 0,
    };
  },
};
</script>
