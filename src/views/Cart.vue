<template>
    <div>
        <v-container class="my-5">
            <h1 class="grey--text mx-3">Cart</h1>
            <v-layout row wrap>
                <v-flex v-for="product in products" :key="product.productId" xs12 sm6>
                    <v-card class="ma-3 grey lighten-3"  flat hover ripple :to="'/products/' + product.productId">
                        <v-layout row wrap>
                            <v-flex xs12 md4>
                                <v-responsive contain  class="ma-2">
                                    <v-img :src="product.images[0]" contain></v-img>
                                </v-responsive>
                            </v-flex>  
                            <v-flex xs12 md8>
                                <v-card-title>
                                    <h1 class="font-weight-light">{{product.name}}</h1>    
                                </v-card-title>    
                                <v-card-text>
                                    <h2 class="font-weight-light grey--text">{{product.productId}}</h2>
                                    <h2 class="font-weight-light grey--text">{{product.seller}}</h2>
                                    <h2 class="font-weight-light">{{product.price}}</h2>
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
                                <v-card-title>
                                    <h1 class="font-weight-light">Total</h1>    
                                </v-card-title>    
                                <v-card-text>
                                    <h2 class="font-weight-light grey--text">Tax</h2>
                                    <h2 class="font-weight-light grey--text">Balance</h2>
                                    <h2 class="font-weight-light">Payment</h2>
                                </v-card-text>
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
        }
    },
    computed: {
        products() {
            return this.$store.getters.inCart 
        }
    },
}
</script>