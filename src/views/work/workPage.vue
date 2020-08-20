<template>
  <div class="container mx-auto flex flex-grow items-center flex-col md:flex-row justify-around h-full workpagecontainer">
    <contentbutton
      totarget="work-products-page"
      header="PRODUCTS"
    ></contentbutton>
    <contentbutton
      totarget="work-projects-page"
      header="PROJECTS"
    ></contentbutton>
    <contentbutton
      totarget="work-approach-page"
      header="APPROACH"
    ></contentbutton>

  </div>
</template>

<script>
import contentbutton from '../../components/general/contentbutton.vue';

export default {
  name: 'workpage',
  components: {
    contentbutton
  }
}
</script>

<style>
.workpagecontainer {
  min-height: calc(100vh - 134px);
}
</style>