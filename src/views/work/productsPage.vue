<template>
  <div class="container productspagecontainer flex flex-wrap flex-row mx-auto mt-4">
    <div class="w-1/3 p-1 imgcard">
      <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/25237009/1490471633.jpg">
    </div>
    <div class="w-1/3 p-1 imgcard">
      <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/25237009/1490469886.jpg">
    </div>
    <div class="w-1/3 p-1 imgcard">
      <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/25237009/1490474554.jpg">
    </div>
    <div class="w-1/3 p-1 imgcard">
      <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/25237009/1490467630.jpg">
    </div>
    <div class="w-1/3 p-1 imgcard">
      <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/25237009/1506656158.jpg">
    </div>
    <div class="w-1/3 p-1 imgcard">
      <img src="https://d2j6dbq0eux0bg.cloudfront.net/images/25237009/1490474512.jpg">
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