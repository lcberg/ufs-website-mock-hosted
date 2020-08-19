<template>
  <div class="flex flex-col container mx-auto my-5">
    <personintro 
      class="my-5"
      faceurl="face1.jpg" 
      name="Muhammed Mustermann"
      location="Istanbul"
      motto="yeah something witty here."
      something="Aliquip ipsum incididunt incididunt anim eu tempor. Excepteur irure laborum aute excepteur non aliquip qui proident ea officia laboris."  
    ></personintro>
    <personintro 
      class="my-5"
      faceurl="face2.jpg" 
      name="Kevin Klabautermann"
      location="Munich"
      motto="Surfing is like surfing, just surf."
      something="Aliquip sunt minim fugiat excepteur fugiat mollit excepteur est voluptate. Dolor duis cupidatat excepteur incididunt laboris pariatur dolor velit ex consectetur."  
    ></personintro>
    <personintro 
      class="my-5"
      faceurl="face3.jpg" 
      name="Aline Ainstein"
      location="London"
      motto="i have a very nice motto, too."
      something="Veniam ullamco incididunt ullamco non quis fugiat laborum labore aliquip nulla id nulla eiusmod. Anim nulla mollit cillum amet mollit ullamco ad elit ipsum minim in aliquip."  
    ></personintro>
  </div>
</template>

<script>
import personintro from '../../components/teamcomponents/personintro.vue';

export default {
  name: 'unitedpage',
  components: {
    personintro
  }
}
</script>

<style>

</style>