<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-dark-gray px-6 sticky">
      <router-link to="/">
        <img :src="require('./assets/ufs-logo.gif')">
      </router-link>

    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

html, body {
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
