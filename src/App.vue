<template>
  <div id="app" class="border-green-500 border-t-8">
    <nav>
      <router-link to="/">Alle Sessions</router-link> |
      <router-link to="/new-event">Starte Event</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
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
