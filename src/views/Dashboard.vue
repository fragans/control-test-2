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
        <div class="text-center text-gray-300">
          Total : {{summary()}}
        </div>
        <!-- <button >Show Modal</button> -->
        <!-- use the modal component, pass in the prop -->
        <modal v-if="showModal" @close="showModal = false" @action="checkout()">

          <h1 slot="header" class="text-center uppercase font-bold text-lg">Payment</h1>
          <div slot="body">
            
              <div class="m-1 rounded overflow-hidden select-none" v-for="(item,i) in cart" :key=i>
                <span class="">{{item.name}}</span>
                <div>
                  <span class="ml-1">
                    @Rp {{item.price}} x {{item.qty}}
                  </span>
                  <span class="float-right">
                    Rp {{item.qty*item.price}}
                  </span>
                </div>
                <hr class="my-1">
              </div>

              <div class="font-bold m-1">
                <span>Total</span>
                <span class="float-right">Rp {{summary()}}</span>
              </div>
            
          </div>
          <h3 slot="button" class="text-center m-2 font-bold text-white">Print Bill</h3>
        </modal>

        <button id="show-modal" @click.stop="showModal = true"  class="bg-blue-royal-700 w-full text-white p-4 tracking-wider">Checkout({{cart.length}})</button>
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
    checkout(){
      this.$store.commit('cart/clear')
    }
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
