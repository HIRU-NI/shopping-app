<template>
  <nav>
    <!--Displayed only on small screens-->
    <v-navigation-drawer 
        v-model="sideNav" 
        app 
        class="hidden-md-and-up" 
        dense
        temporary
        absolute
        dark
        color="primary"
        >
            <v-list
            v-for = "item in menuItems" 
            :key="item.title"
            >
                <v-list-tile
                router 
                :to="item.route">
                    <v-list-tile-action>
                        <v-icon color="primary">{{item.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>{{item.title}}</v-list-tile-content>
                </v-list-tile>
            </v-list>
    </v-navigation-drawer>

    <v-toolbar  flat color="#1b2030 " fixed>
    <!--Displayed only on small screens-->
    <v-toolbar-side-icon  class="hidden-md-and-up" @click="sideNav = !sideNav" dark></v-toolbar-side-icon>


    <!--Displayed only on large screens-->
    <router-link to="/">
    <v-avatar
          :tile="tile"
          :size="avatarSize"
          color="grey lighten-4"
          class="hidden-md-and-down"
        >
          <img src="@/assets/shopping-cart.png" alt="avatar">
    </v-avatar>
    </router-link>

    <v-toolbar-title class="text-uppercase white--text">
      <span class="font-weight-light">Shopping</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!--Displayed only on large screens-->
    <v-toolbar-items 
    class="hidden-sm-and-down"
    v-for = "item in menuItems" 
            :key="item.title">
      <v-btn 
      flat 
      color="white"
      router 
      :to="item.route">
      <span class="hidden-md-and-down">{{item.title}}</span>
      <v-icon right color="white">{{item.icon}}</v-icon>
    </v-btn>
    </v-toolbar-items>  
  </v-toolbar>
  </nav>
  
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        {title: 'Catalog', icon: 'view_module', route:'/'},
        {title: 'My Cart', icon: 'shopping_cart', route:'/cart'}
      ]
    }
  },
}
</script>

