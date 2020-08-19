<template>
  <div class="face flex relative personintro">
    <img :src="require('../../assets/faces/' + faceurl)">
    <div class="traits w-1/3 ml-4 mt-20">
      <p><b>location:</b> {{ location }}</p>
      <p><b>motto:</b> {{ motto }}</p>
      <p><b>something</b><br> {{ something }}</p>
    </div>
    <div class="absolute w-3/5 z-50 namecard mx-3" style="bottom: 20px; height: 80px">
      {{ name }}

    </div>

  </div>
</template>

<script>
import '../../assets/faces/face1.jpg';
export default {
  name: 'personintro',
  props: {
    faceurl: {
      type: String,
      required: true
    },
    name: String,
    location: String,
    motto: String,
    something: String
  }
}
</script>

<style lang="scss">
  .face {

    img {
      width: 30%;
      height: auto;
    }
  }

  .namecard {
    background-color: rgba(102, 99, 99, 0.8);
    color: rgba(255, 255, 255, 0.8);
    line-height: 80px;
    font-size: 40px;
    text-align: left;
    padding-left: 20px;
    font-weight: 600;
  }

  .personintro {
    text-align: left;
  }
</style>