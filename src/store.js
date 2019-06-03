import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const  store = new Vuex.Store({
    state: {
        loadedProducts: [
            {name: 'Shoes', productId: '4baxc78869', seller: 'Nike', price: 230,imgUrl: 'https://n4.sdlcdn.com/imgs/f/4/z/Nike-Air-NIKE-Pegasus-33-SDL119598007-1-ca9a0.jpeg'},
            {name: 'T-Shirt', productId: '4baxc7nh98', seller: 'Embark', price: 20,imgUrl: 'data:image/jpeg;base64,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'},
            {name: 'Pants', productId: '4baxc7nh78', seller: 'Online-jeans', price: 40,imgUrl: 'https://5.imimg.com/data5/PL/PI/MY-55846059/mens-check-pants-500x500.jpg'},
            {name: 'Mug', productId: '4baxc7kd32', seller: 'Odel', price: 10,imgUrl: 'https://cdn.shopify.com/s/files/1/1987/6031/products/1pod010010_0_Gray_70e32aa7-07ad-4f7d-9523-2ce2c6ad187a_1024x1024.jpg?v=1550052341'},
            {name: 'Dress', productId: '4baxc7986e', seller: 'Fashion Bug', price: 50,imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfP1h3arg8ARb0fGicmasQ7zLms4LfzksrjZjH_ghROZHNi9-a'},
            {name: 'Water Bottle', productId: '4baxc745ew', seller: 'Little Lion', price: 15,imgUrl: 'https://www.saltandpepper.com.au/images/ProductImages/500/48217.jpg'},
        ],
        user: {
            id: 'user234',
            cart: []
        }
    },
    mutations: {
        addToCart (state, payload) {
            state.user.cart.push(payload)
          },
    },
    actions: {
        addToCart ({commit}, payload) {
            const product = {
              productId: payload.productId,
              name: payload.name,
              seller: payload.seller,
              imgUrl: payload.imgUrl, 
            }
      
            commit('addToCart', product)
          },
    },
    getters: {
        loadedProducts (state) {
            return state.loadedProducts
        },

        loadedProduct (state) {
            return (id) => {
                return state.loadedProducts.find((product) => {
                        return product.productId === id
                })
            }
        },
        inCart (state) {
            return state.user.cart
        }
    }
})