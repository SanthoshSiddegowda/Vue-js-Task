<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <router-link to="/">
          <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <span>Leyonal S</span>
      <img class="user-avatar" src="https://gitlab.inria.fr/uploads/-/system/user/avatar/641/avatar.png">

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
  .user-avatar{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 10px;
  }
</style>
