<template>
    <div>
        <v-container class=" my-5">
            <h1 class="grey--text mx-3">Catalog</h1>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="product in products" :key="product.productId"> 
                    <v-card class="text-xs-center ma-3 grey lighten-3" hover flat ripple :to="'/products/' + product.productId">
                        <v-responsive height="250px" class="pa-2">
                            <v-img :src="product.imgUrl" contain ></v-img>  
                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{product.name}}</div>
                            <div class="grey--text">{{product.productId}}</div>
                            <div class="grey--text">{{product.seller}}</div>
                            <div class="">${{product.price}}</div>
                        </v-card-text>
                        <v-card-actions>
                            
                        </v-card-actions>
                    </v-card>
                        <v-layout justify-space-around>
                            <v-btn color="primary" small round left outline flat @click.prevent="addToCart(product.productId)">Add to Cart</v-btn>
                            <v-btn color="primary" small round left outline flat >Buy Now</v-btn>
                        </v-layout>
                        
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
            return this.$store.getters.loadedProducts 
        }
    },
    methods: {
        addToCart(productId) {
            const product = this.$store.getters.loadedProduct(productId)

            this.$store.dispatch('addToCart',product)
        }
    },
}
</script>