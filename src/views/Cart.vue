<template>
    <div>
        <v-container class="my-5">
            <h1 class="grey--text mx-3 display-2">Cart</h1>
            <v-layout row wrap>
                <v-flex v-for="product in products" :key="product.productId" xs12 sm6>
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
                    <v-card class="pa-4 grey lighten-2 " flat>
                        <h1 class="font-weight-light">Chekout</h1>
                        <v-card class="pa-5 ma-5 grey lighten-1">
                                <v-layout>
                                    <v-flex xs12 sm6>
                                        <v-card-title>
                                            <h1 class="font-weight-light">Amount: ${{total}}</h1>    
                                        </v-card-title>    
                                        <v-card-text>
                                            <h2 class="font-weight-light">Tax rate: {{tax}}</h2>
                                            <h2 class="font-weight-light">Total Amount: ${{total*tax}}</h2>
                                        </v-card-text>
                                    </v-flex>
                                    <v-flex xs12 sm6 class="pa-5">
                                        <v-btn color="primary"  large >Proceed</v-btn>
                                    </v-flex>
                                </v-layout>
                        </v-card>   
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
            tax: 1.2, 
        }
    },
    computed: {
        products() {
            return this.$store.getters.getCartItems
        },
        total() {
            return this.$store.getters.getTotalPrice
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