<template>
    <div>
        <v-container class="my-5">
            <h1 class="grey--text mx-3">{{product.name}}</h1>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card class="ma-3"  flat>
                        <v-layout row wrap>
                            <v-flex xs12 md5>
                                <v-carousel light>
                                    <v-carousel-item
                                    v-for="(image,i) in product.images"
                                    :key="i"
                                    :src="image"
                                    contain
                                    ></v-carousel-item>
                                </v-carousel>
                            </v-flex>  
                            <v-flex xs12 md7 class="pa-5">
                                <v-card-title>
                                    <h1 class="font-weight-light">{{product.name}} - <span class="font-weight-light grey--text">{{product.productId}}</span></h1>    
                                </v-card-title>    
                                <v-card-text>
                                    <h2 class="font-weight-light grey--text">Description: {{product.description}}</h2>
                                    
                                    <h2 class="font-weight-light grey--text">Seller: {{product.seller}}</h2>
                                    <h2 class="font-weight-light">Price: ${{product.price}}</h2>
                                </v-card-text>
                                <v-btn fab dark small color="#1b2030" @click="inc">
                                    <v-icon dark>add</v-icon>
                                </v-btn>
                                <span class="subheading">{{quantity}}</span>
                                <v-btn fab dark small color="#1b2030" @click="dec" v-if="positive">
                                    <v-icon dark>remove</v-icon>
                                </v-btn>
                                <v-layout class="pt-5">
                                    <v-btn color="primary" large @click="addToCart()">Add to Cart</v-btn>
                                    <v-btn color="primary"  large >Buy Now</v-btn>
                                </v-layout> 
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
            quantity: 1,
        }
    },
    props: ['productId'],
    computed: {
        product() {
            return this.$store.getters.loadedProduct(this.productId) 
        },
        positive() {
            return this.quantity > 1
        }
    },
    methods: {
        inc() {
            this.quantity++
        },
        dec() {
            this.quantity--
        },
        addToCart() {    
            let p = Object.assign({}, this.product)
            p.quantity = this.quantity  
            this.$store.commit('addToCart',p)
            this.quantity = 1
        }
    },
}
</script>