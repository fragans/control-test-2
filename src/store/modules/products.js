import axios from 'axios'

const state = {
    items: null,
    is_loading: true
}
const getters = {
    is_loading(state) {
        return state.is_loading
    },
}

const mutations = {

    setIsLoading(state, payload) {
        state.is_loading = payload
    },


}
const actions = {
    fetch({ commit, state }) {
        axios
            .get('http://localhost:3000/products')
            .then(({ data }) => {
                state.items = data;
                commit('setIsLoading', false)
            })
            .catch(e => console.log(e));
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}