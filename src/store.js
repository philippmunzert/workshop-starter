import { createStore } from 'vuex'

// Create a new store instance.
 const store = createStore({
  state () {
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
    }
  },
  mutations: {
    ADD_SESSION(state, session) {
        state.events.unshift(session);
      }
  },
  actions: {
    addSession({ commit }, session) {
        // create slug
        const slug = session.name.toLowerCase().replace(/ /g, "-");
        // create new session object
        const newSession = {
          title: session.name,
          timeSlot: session.date,
          slug,
          isLive: true
        };
        commit("ADD_SESSION", newSession);
      }
  }
})

export default store
