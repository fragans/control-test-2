<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <h1 class="text-center uppercase font-bold text-lg">Payment</h1>
                    </div>

                    <div class="modal-body">
                        
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
                    
                    <div class="modal-footer flex items-center justify-center">
                    
                        <button class="bg-green-400 rounded p-2 mr-2 font-bold text-white" @click="checkout" >Print Bill</button>

                        <button class="bg-red-thunderbird-400 rounded p-2 font-bold text-white" @click.stop="$emit('close')" >Cancel</button>

                    </div>
                </div>

                
            </div>
        </div>
        
    </transition>
</template>

<script>
    export default {
        props:['cart']
        ,
        methods:{
            checkout(){
                this.$store.commit('cart/clear')
                this.$emit('close')
            },
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
        },
        
    }
</script>

<style >
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>