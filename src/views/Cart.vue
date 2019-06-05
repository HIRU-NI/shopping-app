<template>
    <div>
        <v-container class="my-5">
            <h1 class="grey--text mx-3 display-2">Cart</h1>
            <v-layout row wrap>
                <v-flex v-for="product in products" :key="product.productId" xs12 md6>
                    <v-card class="ma-3 grey lighten-3"  flat hover  :to="'/products/' + product.productId">
                        <v-layout row wrap>
                            <v-flex xs12 md4>
                                <v-responsive contain  class="ma-2">
                                    <v-img :src="product.images[0]" contain></v-img>
                                </v-responsive>
                            </v-flex>  
                            <v-flex xs12 md8>
                                <v-card-title>
                                    <h1 class="font-weight-light">{{product.name}} - <span class="font-weight-light grey--text">{{product.productId}}</span></h1>  
                                    <v-spacer></v-spacer>
                                    <v-btn fab dark color="red" small @click.prevent="removeFromCart(product.productId)">
                                        <v-icon dark>delete</v-icon>
                                    </v-btn>    
                                </v-card-title>    
                                <v-card-text>
                                    <h2 class="font-weight-light grey--text">Description: {{product.description}}</h2>
                                    <h2 class="font-weight-light grey--text">Seller: {{product.seller}}</h2>
                                    <h2 class="font-weight-light  grey--text">Quantity: {{product.quantity}}</h2>
                                    <v-btn fab dark small color="#1b2030" @click.prevent="inc(product.productId)">
                                        <v-icon dark>add</v-icon>
                                    </v-btn>
                                    <v-btn fab dark small color="#1b2030" @click.prevent="dec(product.productId)">
                                        <v-icon dark>remove</v-icon>
                                    </v-btn>
                                    <h2 class="font-weight-light">Unit Price: ${{product.price}}</h2>
                                    <h2 class="font-weight-light">Total: ${{product.totalPrice}}</h2>
                                    <h2 class="font-weight-light primary--text">Estimated Delivery: 5 days</h2>
                                </v-card-text>
                            </v-flex>  
                        </v-layout>    
                    </v-card>      
                </v-flex>    
            </v-layout>  
            <v-layout class="ma-3">
                <v-flex xs12> 
                    <v-img src="https://pngimage.net/wp-content/uploads/2018/05/empty-cart-png.png" position="center" height="500px" contain v-if="isCartEmpty"></v-img>   
                    <v-card class="pa-3  grey lighten-1 ma-5" >
                        <v-layout row wrap>
                            <v-flex xs12 sm6>
                                <v-card-title>
                                    <h1 class="font-weight-light">Total Amount: ${{(total).toFixed(2)}}</h1>    
                                </v-card-title>    
                                <v-card-text>
                                    <h2 class="font-weight-light">Tax Amount: ${{(taxAmount).toFixed(2)}}</h2>
                                    <h2 class="font-weight-light" v-if="isDiscount">Discount: ${{(discountAmount).toFixed(2)}}</h2>
                                    <hr/>
                                    <h2 class="font-weight-light">Bill Amount: ${{(billAmount).toFixed(2)}}</h2>
                                </v-card-text>
                            </v-flex>
                            <v-flex xs12 md6 class="pa-5">
                                <v-btn color="primary"  large v-if="!isCartEmpty" >Proceed</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card>   

                    
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            taxRate: 1.12,
            discountRate: 0.02,
        }
    },
    computed: {
        products() {
            return this.$store.getters.getCartItems
        },
        total() {
            return this.$store.getters.getTotalPrice
        },
        taxAmount() {
            return this.total * this.taxRate
        },
        isDiscount() {
            return this.total > 5
        },
        discountAmount() {
            return this.total *  this.discountRate
        },
        billAmount() {
            const amount = this.total+ this.taxAmount
            if(this.isDiscount) {
                return amount - this.discountAmount
            }
            return amount
        },
        isCartEmpty() {
            const amount = this.$store.getters.getCartCount
            return amount == 0
        }
    },
    methods: {
        inc(id) {
            this.$store.commit('increaseQuantity',id)
        },
        dec(id) {
            this.$store.commit('decreaseQuantity',id)
        },
        removeFromCart(id) {
            this.$store.commit('removeFromCart',id)
        }
    },
}
</script>