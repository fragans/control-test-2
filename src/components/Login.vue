<template>

<div class="flex items-center justify-center min-h-screen">
  <div class="w-full max-w-sm bg-white rounded-lg p-4">
    <div class="mb-4">
      <h1 class="justify-center flex text-3xl">LOGIN KASIR</h1>  
      <h2 class="text-center text-gray-300 tracking-wide">Cafe janji doang</h2>
    </div>
    
    <hr>

    <div  class="justify-center flex flex-col">
      <div class="flex justify-center m-2">
        <div>
          <span class="py-1 font-bold text-gray-300 tracking-wide">username</span>
          <div>
            <input type="text" v-model="username" class="border border-white rounded shadow p-1"> 
          </div>
          
        </div>
        
      </div>
      <div class="flex justify-center m-2">
        <div>
          <span class="py-1 font-bold text-gray-300 tracking-wide">password</span>
          <div>
            <input type="password" v-model="password" class="border border-white rounded shadow p-1"> 
          </div>
          
        </div>
        
      </div>
      <div class="flex justify-center mt-4">
        <button @click="login" class="w-32 p-4 bg-green-400 font-bold text-white rounded">LOGIN</button>
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
import { mapGetters } from 'vuex';
export default {
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
  computed:{
    ...mapGetters({
        is_loading: 'user/is_loading',
    })
  },
  watch:{
    errors:function(){
      this.resetErrors();
    },
    is_loading(newVal){
      if(!newVal){
        this.$router.push('/dashboard')
      }
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
    
  },
  mounted(){
    this.$store.commit('user/logout')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
hr{
  border-color: #eee;
}
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
