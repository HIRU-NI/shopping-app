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
                description: 'embark Tshirt, Homme Tshirt Noir, Mens Tshirt black, Cadeau, Gift',
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
                description: 'Womens Elastic Waist Pencil Stretch Denim Skinny Drawstring Jeans Pants Trousers',
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
                description: 'Personalised Marble / Pattern Mug. Add a name for a unique custom gift cu',
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
                description: "Women's Bandage Bodycon Sleeveless Evening Party Cocktail Club Short Mini Dress",
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
                description: '500ML Outdoor Portable Sport Cycling Camping Bicycle Aluminum Alloy Water Bottle',
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
                {
                    name: 'Handbag', 
                    description: 'Women Crossbody Handbag Ladies Leather Bag Shoulder Bag Tote Messenger Purse Hot',
                    productId: '4baxc778uy', 
                    seller: 'Kooves', 
                    price: 20,
                    quantity: 1,
                    totalPrice: 20,
                    images: [
                        'https://images.koovs.com/uploads//products/120520_8ddc0764de6625bc0840c486d03eeba2_image1_zoom.jpg',
                        'https://cdn.shopify.com/s/files/1/1110/1342/products/IMG_1706.jpg?v=1510988459',
                    ],
                },
                {
                    name: 'Wallet', 
                    description: 'Men Slim Leather Bifold ID Credit Card Wallet with Removable Money Clip',                   
                    productId: '4baxc789hj', 
                    seller: 'Rolex', 
                    price: 30,
                    quantity: 1,
                    totalPrice: 30,
                    images: [
                        'https://cdn.staticans.com/image/tr:h-1440,w-1080,cm-pad_resize/data/being-human/images/2-19-19/831356-1.jpg',
                        'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7030265/2019/1/30/f87ad114-96b0-4419-891e-24388d5e097e1548827807028-Woodland-Men-Wallets-4491548827805810-2.jpg',
                        'https://images-na.ssl-images-amazon.com/images/I/71GAw4Rt7SL._SL1440_.jpg'
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
                return product.productId == productId
              });
              if (product) {
                state.totalPrice -= product.totalPrice
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