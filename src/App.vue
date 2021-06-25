<template>
  <v-app>
    <Header />
    <router-view></router-view>
    <Footer />
    <ModalLogin :isModal="isModal" />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const user = namespace("user");

@Component({
  components: {
    Header: () => import("@/components/Header.vue"),
    Footer: () => import("@/components/Footer.vue"),
    ModalLogin: () => import("@/components/ModalLogin.vue"),
  },
})
export default class Home extends Vue {
  @user.State
  isModal!: boolean;
}
</script>