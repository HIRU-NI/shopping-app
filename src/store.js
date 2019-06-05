import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const  store = new Vuex.Store({
    state: {
        loadedProducts: [
            {
                name: 'Shoes',
                description: 'NIKE FLEX 2017 RN MENS SHOES TRAINERS UK SIZE 7', 
                productId: '4baxc78869', 
                seller: 'Nike', 
                price: 230,
                quantity: 1,
                totalPrice: 230,
                images: [
                    'http://assets.myntassets.com/assets/images/8194473/2019/1/10/a36be87b-63e0-4e14-9fa6-d1da2a74066a1547117348400-Nike-Men-Grey-FLEX-EXPERIENCE-8-Running-Shoes-29815471173465-1.jpg',
                    'http://assets.myntassets.com/assets/images/8194331/2019/1/10/6488f955-dc94-47d6-a20e-e95d310d51101547117320832-Nike-Men-Grey-DART-12-MSL-Leather-Running-Shoes-359154711731-1.jpg',
                    'http://assets.myntassets.com/assets/images/7487684/2018/10/26/6bdc237e-3fbe-4b3e-b524-77effeb5db1a1540533691799-Nike-Men-Sports-Shoes-6621540533689387-1.jpg'
            ],
            },
            {
                name: 'T-Shirt', 
                productId: '4baxc7nh98', 
                seller: 'Embark', 
                price: 20,
                quantity: 1,
                totalPrice: 20,
                images: [
                    'https://dks.scene7.com/is/image/dkscdn/19CDEMSPCSSHLDSSTAPT_Navy_Heather_is?wid=1080&fmt=jpg',
                    'https://www.veromoda.in/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/0/207395601_g6.jpg'
                ],
                    
            },
            {
                name: 'Pants', 
                productId: '4baxc7nh78', 
                seller: 'Online-jeans', 
                price: 40,
                quantity: 1,
                totalPrice: 40,
                images: [
                    'http://assets.myntassets.com/assets/images/8799627/2019/2/14/60b15eea-8373-4c9f-b87f-7d278de6e0221550124819681-Boston-Club-Women-Pack-of-2-Solid-Slim-Fit-Track-Pants-59715-1.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61azi-fHcjL._UL1440_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61NdGVdqZFL._UL1440_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61XHiUnI2sL._UL1440_.jpg'   
                ],
                },
            {
                name: 'Mug', 
                productId: '4baxc7kd32', 
                seller: 'Odel', 
                price: 10,
                quantity: 1,
                totalPrice: 10,
                images: [
                    'https://cdn.shopify.com/s/files/1/1114/2780/products/1080x1440.jpg?v=1518285198',
                    'https://cdn.shopify.com/s/files/1/1114/2780/products/lg.jpg?v=1518287956'
                ],
                 },
            {
                name: 'Dress', 
                productId: '4baxc7986e', 
                seller: 'Fashion Bug', 
                price: 50,
                quantity: 1,
                totalPrice: 50,
                images: [
                    'http://assets.myntassets.com/assets/images/2172537/2017/10/12/11507798544238-naughty-ninos-Girls-Magenta-Solid-Fit-and-Flare-Dress-4091507798544135-1.jpg',
                    'https://assets0.mirraw.com/images/6763986/image_original.jpeg?1550082881',
                    'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1556286091-003981594alt3-1556286069.jpg'
                ],
                },
            {
                name: 'Water Bottle', 
                productId: '4baxc745ew', 
                seller: 'Little Lion', 
                price: 15,
                quantity: 1,
                totalPrice: 15  ,
                images: [
                    'https://ph-test-11.slatic.net/original/a4fec959b6282177c8603c43cce574a6.jpg',
                    'https://i1.wp.com/gemzandgrace.com/wp-content/uploads/2018/05/BottleFushia.jpg?fit=1080%2C1440&ssl=1',
                    'http://assets.myntassets.com/assets/images/8003191/2019/2/12/f13a13e7-895d-4fe0-8356-bc0e0a25008a1549964043410-Nike-Unisex-Pink-Printed-HPERCHARGE-SS-Water-Bottle-710ml-52-1.jpg'
                ],
                },
        ],
        cart: [],
        totalPrice: 0
    },
    mutations: {
        addToCart (state, product) {
            var found = state.cart.find(p => {
                return p.productId == product.productId;
            });
            if (found) {
                let index = state.cart.indexOf(found)
                state.cart[index].quantity += 1
                state.cart[index].totalPrice += product.totalPrice
            } else {
                state.cart.push(product);
            }
            state.totalPrice += product.totalPrice
            
        },
        removeFromCart (state, productId) {
            var product = state.cart.find(product => {
                return product.productId == productId;
              });
              if (product) {
                state.totalPrice -= product.totalPrice;
                state.cart.splice(state.cart.indexOf(product), 1);
              }        
        },
        increaseQuantity(state, productId) {
            let product = state.cart.find((product) => {
                return product.productId === productId
            })
            let index = state.cart.indexOf(product)
            state.cart[index].quantity++
            state.cart[index].totalPrice += product.price
            state.totalPrice += product.price
        },
        decreaseQuantity(state, productId) {
            let product = state.cart.find((product) => {
                return product.productId === productId
            })
            let index = state.cart.indexOf(product)
            state.cart[index].quantity--
            state.cart[index].totalPrice -= product.price
            state.totalPrice -= product.price
        }
        
    },
    actions: {
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
        getCartItems (state) {
            return state.cart
        },
        getCartCount (state) {
            return state.cart.length
        },
        getTotalPrice(state) {
            return state.totalPrice
        },
    }
})