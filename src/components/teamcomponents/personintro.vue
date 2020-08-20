<template>
  <div>
    <h2 class="md:none namecard">{{ name }}</h2>
    <div class="face flex relative personintro my-5 md:my-0">
      <img :src="require('../../assets/faces/' + faceurl)">
      <div class="traits w-5/6 md:w-1/3 ml-4 md:mt-20">
        <p><b>location:</b> {{ location }}</p>
        <p><b>motto:</b> {{ motto }}</p>
        <p><b>something</b><br> {{ something }}</p>
      </div>
      <div class="absolute hidden md:block w-3/5 z-50 namecard mx-3" style="bottom: 20px; height: 80px">
        {{ name }}
  
      </div>
  
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

    @media only screen and (max-width: 768px) {
      font-size: 20px
    }
  }

  .personintro {
    text-align: left;
  }
</style>