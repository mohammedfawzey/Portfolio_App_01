<template>
  <v-app>
    <!-- <NavBarComp v-show="false" /> -->
  <!-- <v-fab-transition>
      <v-btn  v-show="scrollBtn" @click="scrollToTop" v-scroll="showScrollBtn" fab bottom fixed right color="indigo">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition> -->
    <v-main>
      <router-view />
    </v-main>
    <Footer v-show="true" />
  </v-app>
</template>

<script>
// import NavBarComp from "@/components/NavBar/NavBarComp.vue";
import Footer from "@/components/Portfolio/FooterC";
export default {
  name: "App",

  data: () => ({
    //
    scrollBtn: false
  }),
  components: {
    // NavBarComp,
    Footer,
  },
  methods:{
    showScrollBtn() {
      window.scrollY>100?this.scrollBtn=true:this.scrollBtn=false
    },
    scrollToTop() {
      window.scrollTo({top:0,behavior:'smooth'})
    }
  }
};
</script>
<style lang="scss">
// $body-font-family: "Barlow", sans-serif;
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Open+Sans:wght@300;400;500;600;700&display=swap");
.special_font {
  font-family: "Barlow", sans-serif !important;
}
* {
  // font-family: "Open Sans", sans-serif !important;
  font-family: "Montserrat", sans-serif !important;
}
body {
  font-family: "Montserrat", sans-serif !important;
  & > * {
    font-family: "Montserrat", sans-serif !important;
  }
}
$body-font-family: "Montserrat", sans-serif;
.v-application {
  font-family: $body-font-family !important;
  & > * {
    font-family: $body-font-family !important;
  }
}
</style>
