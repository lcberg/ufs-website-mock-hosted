<template>
  <a class="flex justify-center my-2 contentbutton-container" v-if="target" :href="target">
    <div class="flex flex-col contentbutton items-center justify-center">
      <div class="contentbuttonheader">
        <h2>{{ header }}</h2>

      </div>
      <slot>

      </slot>
    </div>

  </a>
  <router-link class="flex justify-center my-2 contentbutton-container" :to="{ name: totarget }" v-else>
    <div class="flex flex-col contentbutton items-center justify-center">
      <div class="contentbuttonheader">
        <h2>{{ header }}</h2>

      </div>
      <slot>

      </slot>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'contentbutton',
  props: {
    header: String,
    target: String,
    totarget: String
  }
}
</script>

<style lang="scss">
  .contentbutton {
    border: 5px solid black;
    border-radius: 30px;
    width: 300px;
    height: 300px;
    cursor: pointer;

    &:hover {
      background: black;
      color: white;
      transition: all 200ms ease-in-out;
    }

    @media only screen and (max-width: 768px) {
      width: 80%;
      height: 200px;
    }
  }

  .contentbuttonheader h2 {
    font-size: 40px;
    font-weight: 600;

    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }

  }

  .contentbutton-container {
    width: 300px;
    height: 300px;

    @media only screen and (max-width: 768px) {
      width: 80%;
      height: 200px;
    }
  }

</style>