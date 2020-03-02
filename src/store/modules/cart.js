const state = {
    cart: [],
}

const getters = {
    cart(state) {
        return state.cart;
    },
}

const actions = {


}

const mutations = {
    add(state, payload) {
        if (state.cart.length == 0) {
            let item = {
                id: payload.item.id,
                category: payload.item.category,
                name: payload.item.name,
                price: payload.item.price,
                qty: 1
            };
            state.cart.push(item);
        } else {
            let index = state.cart.findIndex((item) => { return item.id === payload.item.id })
            if (index >= 0) {
                state.cart[index].qty = state.cart[index].qty + 1
            } else {
                let item = {
                    id: payload.item.id,
                    category: payload.item.category,
                    name: payload.item.name,
                    price: payload.item.price,
                    qty: 1
                };
                state.cart.push(item);
            }

        }
    },
    remove(state, payload) {
        if (state.cart.length < 1) {
            return;
        } else {
            let record = state.cart.findIndex((item) => { return item.id === payload.item.id })
            if (record >= 0 && state.cart[record].qty > 1) {
                state.cart[record].qty = state.cart[record].qty - 1
            } else if (record >= 0 && state.cart[record].qty <= 1) {
                confirm('remove ' + state.cart[record].name + ' from cart?')
                state.cart.qty = state.cart.splice(record, 1)
            } else {
                return
            }
        }
    },
    clear(state) {
        state.cart = []
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}