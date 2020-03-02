<template>
    <div class="flex-row flex w-full relative h-16" >
        
        <div class="relative w-full">
            <div class="flex-row flex" v-if="user()" >
                <div class="w-16 h-16 bg-cover bg-center"  :style="{ backgroundImage: 'url(' +ava_url+')' }"></div>
                <div class="px-4 font-bold text-gray-450 flex justify-center items-center" >
                    <span class="flex mr-1 text-blue-royal-400 text-sm"> hello </span>
                    <span class="flex">{{user()}}!</span>
                </div>
            </div>
            <div class="px-4 font-bold text-gray-300 flex justify-center items-center absolute right-0 top-0 bottom-0">
                <router-link to="/">
                    <span class="cursor-pointer flex hover:text-red-thunderbird-600" @click.prevent="logout">Logout</span>
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
import {  mapGetters } from 'vuex'
    export default {
        data(){
            return{
                ava_url :  'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
            }
        },
        computed: {
            ...mapGetters({
                is_loading: 'user/is_loading',
            })
        },
        methods:{
            user(){
                return localStorage.getItem('login');
            },
            logout(){
                if(!confirm('do you want to logout?')) return

                localStorage.removeItem('login')
                this.$router.go('/')
            },
        }         
    }
</script>

<style scoped>

</style>