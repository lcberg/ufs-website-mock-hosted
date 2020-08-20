<template>
  <div class="container productspagecontainer flex flex-wrap flex-row mx-auto mt-4">
    <div class="w-full md:w-1/3 p-1 imgcard">
      <img :src="require('../../assets/products/kids.jpg')">
    </div>
    <div class="w-full md:w-1/3 p-1 imgcard">
      <img :src="require('../../assets/products/kitchen.jpg')">
    </div>
    <div class="w-full md:w-1/3 p-1 imgcard">
      <img :src="require('../../assets/products/health.jpg')">
    </div>
    <div class="w-full md:w-1/3 p-1 imgcard">
      <img :src="require('../../assets/products/food.jpg')">
    </div>
    <div class="w-full md:w-1/3 p-1 imgcard">
      <img :src="require('../../assets/products/lifestyle.jpg')">
    </div>
    <div class="w-full md:w-1/3 p-1 imgcard">
      <img :src="require('../../assets/products/audio.jpg')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'productspage'
}
</script>

<style lang="scss" scoped>
.productspagecontainer {
  min-height: calc(100vh - 134px);
}

.imgcard {
  overflow: hidden;
}

.imgcard img {
  transition: all 500ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}

</style>