import axios from 'axios'
// import router from '../../router'

const state = {
    is_loading: true,
    user: '',
    is_login: false
}

const getters = {
    is_loading(state) {
        return state.is_loading
    },
}

const actions = {
    is_login({ state, commit }) {
        let auth = localStorage.getItem('login')
        console.log(auth)
        if (auth) {
            state.is_login = true;
            commit('setIsLoading', false)
            state.user = auth;
            console.log('state user' + state.user)
        }
        return;
    },

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
                    localStorage.setItem('login', payload.username)
                    state.user = data[0].usernamme
                    state.is_loading = false;
                } else {
                    alert('akun tidak ditemukan')
                }

            })
            .then(
                // router.push('/dashboard')
            )


    },

    logout(state) {
        state.is_login = false;
        localStorage.removeItem('login');
    }

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}