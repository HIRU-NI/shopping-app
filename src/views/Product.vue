<template>
    <div>
        <v-container class="my-5">
            <h1 class="grey--text mx-3">{{product.name}}</h1>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card class="ma-3 grey lighten-3"  flat >
                        <v-layout row wrap>
                            <v-flex xs12 md4>
                                <v-responsive contain class="ma-2">
                                    <v-img :src="product.imgUrl" contain></v-img>
                                </v-responsive>
                            </v-flex>  
                            <v-flex xs12 md8>
                                <v-card-title>
                                    <h1 class="font-weight-light">{{product.name}}</h1>    
                                </v-card-title>    
                                <v-card-text>
                                    <h2 class="font-weight-light grey--text">{{product.productId}}</h2>
                                    <h2 class="font-weight-light grey--text">{{product.seller}}</h2>
                                    <h2 class="font-weight-light">$ {{product.price}}</h2>
                                </v-card-text>
                                <v-layout justify-bottom class="pa-5">
                            <v-btn color="primary" large left  >Add to Cart</v-btn>
                            <v-btn color="primary"  large left   >Buy Now</v-btn>
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
            
        }
    },
    props: ['productId'],
    computed: {
        product() {
            return this.$store.getters.loadedProduct(this.productId) 
        }
    },
}
</script>