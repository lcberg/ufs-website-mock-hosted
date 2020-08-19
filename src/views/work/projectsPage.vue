<template>
  <div class="container mx-auto flex flex-row flex-wrap projectspagecontainer">
    <div class="imgcard text-left w-1/3 p-2 text-xl">
      <div class="header">
        <h2>
          Arts &amp; Cultrue
        </h2>
      </div>
      <div class="imgwrap">
        <img :src="require('../../assets/projects/arts.webp')">
      </div>

    </div>

    <div class="imgcard text-left w-1/3 p-2 text-xl">
      <div class="header">
        <h2>
          Banking &amp; Finance
        </h2>
      </div>
      <div class="imgwrap">
        <img :src="require('../../assets/projects/banking.webp')">
      </div>

    </div>

    <div class="imgcard text-left w-1/3 p-2 text-xl">
      <div class="header">
        <h2>
          Civic &amp; Public
        </h2>
      </div>
      <div class="imgwrap">
        <img :src="require('../../assets/projects/civic.webp')">
      </div>

    </div>

    <div class="imgcard text-left w-1/3 p-2 text-xl">
      <div class="header">
        <h2>
          Design &amp; Architecture
        </h2>
      </div>
      <div class="imgwrap">
        <img :src="require('../../assets/projects/design.webp')">
      </div>

    </div>

    <div class="imgcard text-left w-1/3 p-2 text-xl">
      <div class="header">
        <h2>
          Education
        </h2>
      </div>
      <div class="imgwrap">
        <img :src="require('../../assets/projects/education.webp')">
      </div>

    </div>

    <div class="imgcard text-left w-1/3 p-2 text-xl">
      <div class="header">
        <h2>
          Healthcare
        </h2>
      </div>
      <div class="imgwrap">
        <img :src="require('../../assets/projects/healthcare.webp')">
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'projectspage'
}
</script>

<style lang="scss" scoped>
  .imgcard {
    
  }

  .projectspagecontainer {
    min-height: calc(100vh - 133px);
  }
</style>