<template>
  <div class="container flex-col flex w-full max-w-full h-full landingpagecontainer">
    <div class="flex flex-grow flex-row justify-around w-2/3 mx-auto items-center">
      <navbutton routedest="/united" class="text-center" bottomHeader="UNITED"></navbutton>
      <navbutton routedest="/fashion" class="text-center" bottomHeader="FASHION"></navbutton>
      <navbutton routedest="/service" class="text-center" bottomHeader="SERVICE"></navbutton>
    </div>
    <bottomnavbar class="mb-5"></bottomnavbar>
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
   min-height: 100vh;
   background: url('../assets/landingbg.jpg');
 }

</style>