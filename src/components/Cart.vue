<template>
    <div class="bg-white">
        <div class=" p-4 flex justify-center text-black " v-if="cart.length == 0">  
            <span class="text-gray-300 text-sm">
                There's no item in the cart
            </span>
        </div>
        <div v-else class="p-4">
            <ul>
                <li v-for="(item , i) in cart" :key="i" class="flex my-4">
                    <div class="text-sm flex-grow">
                        {{item.name}}
                    </div>

                    <div class="flex-grow-0 mr-4">
                        <div class="flex flex-row bg-gray-200 text-white">
                            <div class="inc_button hover:bg-white hover:text-black bg-red-thunderbird-400 px-1 mr-1" @click="decreaseQty(item)">-</div>
                            <div class=" text-gray-450 inc_button hover:bg-white hover:text-black px-1">{{item.qty}}</div>
                            <div class="inc_button hover:bg-white hover:text-black bg-blue-royal-400 px-1 ml-1" @click="increaseQty(item)">+</div>                            
                        </div>
                    </div>
                    <div class="flex-grow-0">
                        {{item.price}}
                    </div>

                </li>
            </ul>
            
        </div>
        
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        data(){
            return{
                items: []
            }
        },
        computed:{
            ...mapState({
                cart: state => state.cart.cart,
            }),
        },
        methods:{
            increaseQty(item){
                this.$store.commit('cart/add',{ item })
            },
            decreaseQty(item){
                this.$store.commit('cart/remove',{ item })
            }
        },
        created(){
            
        }
    }
</script>

<style scoped>
.inc_button{
    user-select: none;
    min-width: 25px;
    min-height: 25px;
    cursor:pointer;
    text-align: center;
    border: 1px #aaa;
    border-style: solid;
}
</style>