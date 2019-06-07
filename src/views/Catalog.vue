<template>
    <div>
        <v-container class=" my-5">
            <h1 class="grey--text mx-3 display-2">Catalog</h1>
            <v-layout row wrap>
                <v-flex xs12 class="mt-5 mx-3">
                    <v-text-field
                        label="What are you looking for?"
                        single-line
                        outline
                        v-model="filterText"
                    ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4 lg3 v-for="product in filteredProducts" :key="product.productId"> 
                    <v-card class="text-xs-center ma-3 grey lighten-3" hover flat ripple :to="'/products/' + product.productId">
                        <v-responsive   class="pa-2">
                            <v-img :src="product.images[0]"  ></v-img>  
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
                            <v-btn color="primary" large round left outline flat @click.prevent="addToCart(product)">Add to Cart</v-btn>
                            <v-btn color="primary" large round left outline flat >Buy Now</v-btn>
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
            filterText: ''
        }
    },
    computed: {
        products() {
            return this.$store.getters.loadedProducts 
        },
        cart() {
            return this.$store.getters.getCartItems
        },
        filteredProducts() {
            return this.products.filter((product) => {
                return product.name.toLowerCase().match(this.filterText)
            })
        }
    },
    methods: {
        addToCart(product) {   
            let p = Object.assign({}, product)
            this.$store.commit('addToCart',p)
        },
    },
}
</script>