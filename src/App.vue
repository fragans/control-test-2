<template>
  <div id="app" class="bg-gray-50 min-h-screen pt-8">
    
    <router-view/>
  </div>
</template>
<script>
export default {
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Your Website'
    }
  },
  created(){
    // let login = localStorage.getItem('login');
    // if (login === 'admin') {
    //   this.$router.push('dashboard')
    // }else{
    //   this.$router.push('/')
    // }
  }
}
</script>>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}


</style>
