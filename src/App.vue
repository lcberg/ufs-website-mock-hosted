<template>
  <div id="app">
    
    
    <nav class="flex items-center justify-between flex-wrap bg-dark-gray px-3 md:px-6 sticky">
      <router-link to="/">
        <img class="w-1/3 md:w-1/6 pt-1 md:pt-3" :src="require('./assets/ufs_Logo.png')">
        
      </router-link>

      <router-link to="/" class="absolute homebutton">
        <i class="fas fa-home fa-3x float-right"></i>
      </router-link>

    </nav>
    <router-view class="z-1"/>
    <footer style="background-color: gray">
      <div class="container bg-grey-lighter p-8 mx-auto">
          <div class="sm:flex mb-4">
        <div class="sm:w-1/4 h-auto">
            <div class="text-orange mb-2">Orange</div>
            <ul class="list-reset leading-normal">
                <li class="hover:text-orange text-grey-darker">One</li>
                <li class="hover:text-orange text-grey-darker">Two</li>
                <li class="hover:text-orange text-grey-darker">Three</li>
                <li class="hover:text-orange text-grey-darker">Four</li>
                <li class="hover:text-orange text-grey-darker">Five</li>
                <li class="hover:text-orange text-grey-darker">Six</li>
                <li class="hover:text-orange text-grey-darker">Seven</li>
                <li class="hover:text-orange text-grey-darker">Eight</li>
            </ul>
        </div>
        <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
            <div class="text-blue mb-2">Blue</div>
            <ul class="list-reset leading-normal">
                <li class="hover:text-blue text-grey-darker">One</li>
                <li class="hover:text-blue text-grey-darker">Two</li>
                <li class="hover:text-blue text-grey-darker">Three</li>
            </ul>

          <div class="text-blue-light mb-2 mt-4">Blue-light</div>
            <ul class="list-reset leading-normal">
                <li class="hover:text-blue-light text-grey-darker">One</li>
                <li class="hover:text-blue-light text-grey-darker">Two</li>
                <li class="hover:text-blue-light text-grey-darker">Three</li>
            </ul>

        </div>
        <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
                  <div class="text-green-dark mb-2">Green-dark</div>
            <ul class="list-reset leading-normal">
                <li class="hover:text-green-dark text-grey-darker">One</li>
                <li class="hover:text-green-dark text-grey-darker">Two</li>
                <li class="hover:text-green-dark text-grey-darker">Three</li>
            </ul>

          <div class="text-green-light mb-2 mt-4">Green-light</div>
            <ul class="list-reset leading-normal">
                <li class="hover:text-green-light text-grey-darker">One</li>
                <li class="hover:text-green-light text-grey-darker">Two</li>
                <li class="hover:text-green-light text-grey-darker">Three</li>
            </ul>


        </div>
          <div class="sm:w-1/2 sm:mt-0 mt-8 h-auto">
              <div class="text-red-light mb-2">Newsletter</div>
              <p class="text-grey-darker leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur. </p>
              <div class="mt-4 flex">
                  <input type="text" class="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address">
                  <button class="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
              </div>
          </div>

        </div>
      </div>
    </footer>
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

.vimeo-wrapper {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: -1;
   pointer-events: none;
   overflow: hidden;
}
.vimeo-wrapper iframe {
   width: 100vw;
   height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
   min-height: 100vh;
   min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
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

.homebutton {
  bottom: 50px;
  right: 25px;
}

@media only screen and (max-width: 768px) {
  .homebutton {
    bottom: unset;
    top: 5px;
    right: 15px;
  }
}

</style>
