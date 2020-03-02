<template>
<div class="max-w-2xl mx-auto">
  
  <section id="content" class="flex-row flex">
    
    <products/>

    <section id="cart" class="hidden md:block flex-grow-0 bg-white mx-4 min-h-48 relative">

      <div>
        <section id="auth" class="bg-blue-royal-200">
          <auth/>
        </section>

        <section>
            <cart/>
        </section>
      </div>

      <section class="bottom-0 absolute w-full" v-if="cart.length > 0">

        <modal v-if="showModal" @close="showModal = false" :cart="cart"></modal>      

        <button id="show-modal" @click.prevent="showModal = true"  class="bg-blue-royal-700 w-full text-white p-4 tracking-wider">Checkout({{cart.length}})</button>

      </section>

    </section>

  </section>
  
</div>
</template>
<script>

import auth from '@/components/Auth.vue'
import products from '@/components/Products.vue'
import cart from '@/components/Cart.vue'
import modal from '@/components/Modal.vue'
import { mapState } from 'vuex';
export default {
  data(){
    return{
      showModal: false
    }
  },
  components:{
    auth,
    products,
    cart,
    modal
  },
  computed:{
    ...mapState({
      cart: state => state.cart.cart,
    }),
  },
  methods:{
    summary(){
      let items = this.cart;
      var line = 0;
      var total = 0;
      for (let i = 0; i < items.length; i++) {
        if (items[i].qty >= 0 ){
          line = items[i].price * items[i].qty
        }
        total = line + total;
        line = 0;     
      }
      return total;
    },
    
  }
}
</script>
<style >
#cart{
  min-width: 350px;
}
hr{
  border-color: #eee;
}
</style>>
