import axios from 'axios'
import router from '../../router'

const state = {
    is_loading: true,
    is_login: false,
    user: '',
}

const getters = {
    is_loading(state) {
        return state.is_loading
    },
    is_login(state) {
        return state.is_login
    }
}

const actions = {
    login(state, payload) {
        axios
            .get('http://localhost:3000/user')
            .then(({ data }) => {
                // console.log(data)
                console.log(data[0].username)
                console.log(payload)
                if (data[0].username === payload.username && data[0].password === payload.password) {
                    state.is_login = true;
                    router.push('/dashboard')
                }

            })
    }

}

const mutations = {
    setIsLoading(state, payload) {
        state.is_loading = payload
    },
    login(state, payload) {
        axios
            .get('http://localhost:3000/user')
            .then(({ data }) => {
                console.log(data[0].username)
                console.log(payload)
                if (data[0].username === payload.username && data[0].password === payload.password) {
                    state.is_login = true;
                    localStorage.setItem('login', payload.username)
                    router.push('/dashboard')
                }

            })


    }

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}