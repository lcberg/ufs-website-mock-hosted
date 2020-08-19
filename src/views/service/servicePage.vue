<template>
  <div class="container flex flex-wrap flex-grow mx-auto mt-5">
    <div class="w-1/3 relative p-2">
      <img src="../../assets/service/concept.jpg">
      <div class="description">
        concept
      </div>
    </div>
    <div class="w-1/3 relative p-2">
      <img src="../../assets/service/development.jpg">
      <div class="description">
        development
      </div>
    </div>
    <div class="w-1/3 relative p-2">
      <img src="../../assets/service/design.jpg">
      <div class="description">
        design
      </div>
    </div>
    <div class="w-1/3 relative p-2">
      <img src="../../assets/service/musterung.jpg">
      <div class="description">
        musterung
      </div>
    </div>
    <div class="w-1/3 relative p-2">
      <img src="../../assets/service/production.jpg">
      <div class="description">
        production
      </div>
    </div>
    <div class="w-1/3 relative p-2">
      <img src="../../assets/service/logistic.jpg">
      <div class="description">
        logistics
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'servicepage'
}
</script>

<style>
  .description {
    position: absolute;
    bottom: 50px;
    left: 80px;
    color: white;
    font-size: 40px;
    font-weight: 700;
  }
</style>