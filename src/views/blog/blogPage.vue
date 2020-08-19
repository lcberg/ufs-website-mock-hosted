<template>
  <div class="container mx-auto flex flex-col my-24">
    <div class="blogpost flex flex-row items-center text-gray-800">
      <div class="blogname flex-grow text-left">
        <p>by Louis Berger - Informationationist</p>
        <h2 class="text-4xl w-2/3"> WHY I DID NOT THINK OF BETTER MOCK CONTENT - HAIKU</h2>
      </div>
      <div class="blog-image w-1/5">
        <img :src="require('../../assets/blog/blogone.jpg')">
      </div>
    </div>

    <div class="blogpost flex flex-row mt-24 items-center text-gray-800">
      <div class="blogname flex-grow text-left">
        <p>by André Berger - CEO</p>
        <h2 class="text-4xl w-2/3">THE DIGITAL AGE WILL BE LED WITH PENCILS</h2>
      </div>
      <div class="blog-image w-1/5">
        <img :src="require('../../assets/blog/blogtwo.jpg')">
      </div>
    </div>

    <div class="blogpost flex flex-row mt-24 items-center text-gray-800">
      <div class="blogname flex-grow text-left">
        <p>by Louis Berger - Informationationist</p>
        <h2 class="text-4xl w-2/3"> THIS WEBSITE IS A MOCKUP AND I EVEN LEARNED SOMETHING FROM IT</h2>
      </div>
      <div class="blog-image w-1/5">
        <img :src="require('../../assets/blog/blogthree.jpg')">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'blogpage'
}
</script>

<style lang="scss" scoped>
  .blogpost {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding-top: 15px;
    padding-bottom: 15px;

    &:hover {
      background-color: darken(white, 40%);
      cursor: pointer;
    }
  }

  .blogname {
    max-width: 80%;
  }
</style>