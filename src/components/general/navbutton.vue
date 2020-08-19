<template>
  <router-link :to="routedest">
    <div class="flex flex-col-reverse navbutton">
      <div class="navbutton-header font-black text-3xl my-2">
        {{ bottomHeader }}
      </div>
      <div class="flex navbutton-description flex-grow items-center justify-center font-bold">
        <div>
            {{ description }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'navbutton',
  props: {
      bottomHeader: {
          type: String,
          required: true
      },
      description: {
          type: String,
          default: 'Lorem ipsum smaple textum.'
      },
      routedest: {
          type: String,
          required: true
      }
  }
}
</script>

<style lang="scss">
  .navbutton {
    border: 5px solid black;
    border-radius: 30px;
    width: 300px;
    height: 300px;
    margin: 50px;

    &:hover {
      background: black;
      color: white;
      cursor: pointer;
    }
  }
</style>