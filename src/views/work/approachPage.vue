<template>
  <div class="container mx-auto flex flex-row flex-wrap approachpagecontainer mt-4 items-center justify-center">
    <div class="card relative w-full md:w-1/3">
      <img :src="require('../../assets/approach/plan.jpg')">
      <div class="absolute desctext text-red-700">
        <p>WE PLAN</p>
      </div>
    </div>
    <div class="card relative w-full md:w-1/3">
      <img :src="require('../../assets/approach/source.jpg')">
      <div class="absolute desctext text-white">
        <p>WE SOURCE</p>
      </div>
    </div>
    <div class="card relative w-full md:w-1/3">
      <img :src="require('../../assets/approach/make.jpg')">
      <div class="absolute desctext text-red-700">
        <p>WE MAKE</p>
      </div>
    </div>
    <div class="card relative w-full md:w-1/3">
      <img :src="require('../../assets/approach/brand.jpg')">
      <div class="absolute desctext">
        <p>WE BRAND</p>
      </div>
    </div>
    <div class="card relative w-full md:w-1/3">
      <img :src="require('../../assets/approach/store.jpg')">
      <div class="absolute desctext text-white">
        <p>WE STORE</p>
      </div>
    </div>
    <div class="card relative w-full md:w-1/3">
      <img :src="require('../../assets/approach/mail.jpg')">
      <div class="absolute desctext">
        <p>WE DELIVER</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'approachpage'
}
</script>

<style lang="scss" scoped>
  .approachpagecontainer {
    min-height: calc(100vh - 134px);
  }

  .desctext {
    text-align: center;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    font-size: 60px;
    font-weight: 700;
  }

  .card {
    padding: 5px;
  }
</style>