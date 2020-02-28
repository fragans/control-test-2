<template>

<div class="flex items-center justify-center min-h-screen">
  <div class="w-full max-w-sm h-64 bg-white rounded-lg p-4">

    <div class="justify-center flex font-bold">LOGIN KASIR</div>  

    <div  class="justify-center flex flex-col">
      <div class="flex justify-center m-4">
        <span class="px-2 py-1">username</span><input type="text" v-model="username" class="border border-gray-100 rounded p-1"> 
      </div>
      <div class="flex justify-center m-4">
        <span class="px-2 py-1">password</span><input type="password" v-model="password" class="border border-gray-100 rounded p-1"> 
      </div>
      <div class="flex justify-center">
        <button @click="login" class="w-32 p-4 bg-green-400">LOGIN</button>
      </div>
    </div>

    <div class="p-4">
      <ul v-if="errors.length">
        <li v-for="(error,i) in errors" :key="i">
           <p class="text-center bg-red-thunderbird-400 text-white">{{error}} !!</p>
        </li>
      </ul>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      username: '',
      password: '',
      errors:[]
    }
  },
  watch:{
    errors:function(){
      this.resetErrors();
    }
  },
  methods:{
    login(){
      this.errors=[];
      if (!this.username || !this.password) {
          this.errors.push('username dan password  di isi') ;
        return;
      }
      
      let username = this.username 
      let password = this.password
      this.$store.commit('user/login',{ username, password })
      
    },
    resetErrors(){
      if(this.errors.length === 0) return
      setTimeout(()=>{
        this.errors = []
      },3000);
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blink_me {
    -webkit-animation-name: blinker;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;

    -moz-animation-name: blinker;
    -moz-animation-duration: 1s;
    -moz-animation-timing-function: linear;
    -moz-animation-iteration-count: infinite;

    animation-name: blinker;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@-moz-keyframes blinker {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@-webkit-keyframes blinker {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}

@keyframes blinker {  
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
}
</style>
