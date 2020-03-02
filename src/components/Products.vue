<template>
    <section id="products" class=" flex-grow px-1"> 
        
        <div class="bg-white max-w-md mx-auto rounded p-4 flex-row flex">
            <div>
                <span class="text-gray-450 select-none">Category:</span>
            </div>
            <div class="flex font-pt-sans text-xs flex-wrap pl-4">
                <div class="bg-gray-100 leading-none mb-1 mr-1 px-3 py-2 rounded-full text-gray-600 transition-opacity hover:bg-gray-600 hover:text-white cursor-pointer">
                    <span @click="listAll">All</span>
                </div>
                <div class="bg-gray-100 leading-none mb-1 mr-1 px-3 py-2 rounded-full text-gray-600 transition-opacity hover:bg-gray-600 hover:text-white cursor-pointer" v-for="(cat,i) in cat_list" :key=i>
                    
                    <span @click="filter(cat)" class="select-none">
                        {{cat}}
                    </span>
                </div>
            </div>
        </div>

      <div class="">
        <div v-if="!is_loading" class="flex flex-wrap max-w-md mx-auto pt-4 justify-center">
            <div class="m-1 rounded overflow-hidden select-none" v-for="(item,i) in prod" :key=i>
                <div class="bg-white">
                    <div class="w-48 h-24 bg-cover bg-center"  :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
                    <div class="bg-white py-2 px-4 text-blue-royal-500">{{item.name}}</div>
                    <div class="bg-white  px-4 text-black text-sm">Rp. {{item.price}}</div>
                    <div class="bg-white  px-4 text-gray-300 text-sm">{{item.desc}}</div>
                    <div class="p-4 flex" >
                    <button @click="addToCart(item)" class="w-full bg-blue-royal-200 rounded-lg text-blue-royal-400 text-sm">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center h-full p-8">
            fetching data ..
        </div>
        
      </div>
    </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import store from '../store'
    export default {
        data(){
            return{
                cat_list: [],
                prod: [],
                selected: ''
            }
        },
        computed:{
            ...mapState({
                items: state => state.products.items,
            }),
            ...mapGetters({
                is_loading: 'products/is_loading'
            }),
            
        },
        watch:{
            items(){
                this.listCategory();
                this.listAll();
            }
        },
        methods:{
            listCategory(){
                if (this.items===null) return
                let items = this.items;
                let list = items.map(a=>a.category)
                let cat_list = list.filter((value, i, self)=>{
                    return self.indexOf(value) === i;
                })
                this.cat_list = cat_list
                
            },
            listAll(){
                if (this.items===null) return
                this.prod = this.items
                
            },
            filter(selected){
                this.prod = this.items.filter(opsi => opsi.category == selected);
            },
            addToCart(item){
                this.$store.commit('cart/add',{ item })
            }
        },
        created(){
            store.dispatch('products/fetch')
        }
    }
</script>

<style scoped>

</style>