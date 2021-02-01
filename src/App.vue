<template>
  <div id="app" class="border-green-500 border-t-8">
    <nav>
      <a href="#">Alle Sessions</a> |
      <a href="#">Starte Event</a>
    </nav>
    <question-form></question-form>
    <add-new-session-page></add-new-session-page>
    <sessions-page></sessions-page>
    <router-view />
  </div>
</template>

<script>
import AddNewSessionPage from "./components/pages/AddNewSessionPage.vue";
import SessionsPage from "./components/pages/SessionsPage.vue";
import QuestionForm from "./components/QuestionForm.vue";

export default {
  components: { QuestionForm, AddNewSessionPage, SessionsPage },
  name: "app",
};
</script>

<style lang="postcss">
#app {
  font-family: "system-ui", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  @apply bg-green-50;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #38c172;
    }
  }
}
</style>
