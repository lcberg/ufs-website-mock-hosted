<template>
  <div class="container flex-col flex w-full max-w-full landingpagecontainer">
    <div class="flex flex-grow flex-col md:flex-row justify-around w-5/6 md:w-2/3 mx-auto items-center">
      <navbutton routedest="/united" class="text-center my-2" bottomHeader="UNITED" description="MEET OUR COMMUNITY"></navbutton>
      <navbutton routedest="/fashion" class="text-center my-2" bottomHeader="FASHION" description="SEE OUR COLLECTIONS"></navbutton>
      <navbutton routedest="/service" class="text-center my-2" bottomHeader="SERVICE" description="CHECK OUT OUR OFFER"></navbutton>
    </div>
    <bottomnavbar class="mb-2 md:mb-5"></bottomnavbar>

    <div class="vimeo-wrapper">
      <iframe class="absolute z-0" src="https://player.vimeo.com/video/76979871?background=1&amp;autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen mozallowfullscreen webkitallowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import bottomnavbar from '../components/general/bottomnavbar.vue';
import navbutton from '../components/general/navbutton.vue';


export default {
  name: "landingpage",
  components: {
    bottomnavbar,
    navbutton,
  },
};
</script>

<style lang="scss">
 .landingpagecontainer {
   min-height: calc(100vh - 134px);
 }

</style>