<template>
  <div id="app">
    <nav>
      <b-link to="/" class="nav-item link-success">Home</b-link>
      <b-link to="/history" class="nav-item link-success">History</b-link>
    </nav>

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  @apply my-8;
}

.nav-item {
  @apply mx-4 rounded-lg underline text-lg text-blue-400;
}
</style>
