<template>
  <div class="home">
  </div>

  <Bookrow />

</template>

<script>
// @ is an alias to /src

import Bookrow from '@/components/Bookrow'

export default {
  name: 'HomeView',
  setup(){
const postsdata = ()=>{
  fetch('http://localhost:3000/posts')
  .then(response =>{
    console.log(response.data)
  })
}
postsdata()
  },
  components: {
    Bookrow,
  }
}
</script>

<style scoped>
.home{
  background: #eeeeee;
}
</style>>


