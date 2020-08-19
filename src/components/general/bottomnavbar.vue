<template>
  <div class="flex md:flex-row flex-col justify-around l-navbar w-5/6 mx-auto">
    <router-link to="/work">
      <div class="navbar-nav-elem">WORK</div>
    </router-link>
    <router-link to="/blog">
      <div class="navbar-nav-elem">BLOG</div>
    </router-link>
    <router-link to="/contact">
      <div class="navbar-nav-elem">LET'S TALK</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss">
  .l-navbar {
    border: 5px solid black;
    border-radius: 10px;
    padding: 10px;

    .navbar-nav-elem {
      font-size: 40px;
      font-weight: 600;
    }
  
  }

  

</style>