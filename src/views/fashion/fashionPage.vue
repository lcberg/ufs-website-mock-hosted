<template>
  <div class="container flex flex-col w-full max-w-full h-full fashionpagecontainer">
    <div class="flex flex-grow justify-around w-2/3 mx-auto items-center">
      <contentbutton 
        header="UNIQUE"
        target="https://handstich.de"
      >
        <div class="w-2/3">
          <p>
            EXLUSIVELY DEVELOPED GARMENTS AND ACCESSOIRES
          </p>
        </div>
      </contentbutton>
      <contentbutton 
        header="FRESH UP"
        target="/"  
      >
        <div class="w-2/3">
          <p>
            CONCIOUSLY CURATED READY TO ORDER GARMENTS AND ACCESOIRES
          </p>
        </div>
      </contentbutton>
      <contentbutton 
        header="SMART PREP"
        target="https://smartprep.eu"  
      >
        <div class="w-2/3">
          <p>
            MASKS &amp; CO
          </p>
        </div>
      </contentbutton>
    </div>
    <bottomnavbar class="mb-5"></bottomnavbar>

  </div>
</template>

<script>
import contentbutton from '../../components/general/contentbutton.vue';
import bottomnavbar from '../../components/general/bottomnavbar.vue';

export default {
  name: 'fashionpage',
  components: {
    contentbutton,
    bottomnavbar
  }
}
</script>

<style>
 .fashionpagecontainer {
   min-height: calc(100vh - 134px);
 }
</style>