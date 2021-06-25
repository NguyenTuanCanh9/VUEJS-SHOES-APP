<template>
  <div>
    <Nav :routes="routes" />
    <!-- Main -->
    <main class="container main">
      <section class="cart">
        <v-tabs
          height="75"
          background-color="transparent"
          active-class="cart__nav"
          color="blue"
          grow
          :value="status"
        >
          <v-tab @click="setStatus(0)">
            <i v-if="status > 0" class="fas fa-check active"></i>
            <i v-else class="fas fa-hourglass"></i>
            <h3>CHECKOUT</h3>
          </v-tab>
          <v-tab @click="setStatus(1)" :class="{ disabled: cart.length === 0 }">
            <i v-if="status > 1" class="fas fa-check active"></i>
            <i v-if="status === 1" class="fas fa-hourglass"></i>
            <h3>SHIPPING INFOMATION</h3>
          </v-tab>
          <v-tab
            @click="setStatus(2)"
            :class="{ disabled: isLogin === false || cart.length === 0 }"
          >
            <i v-if="status === 2" class="fas fa-check"></i>
            <h3>PAYMENT</h3>
          </v-tab>
          <v-tab-item>
            <Checkout :cart="cart" @setStatus="setStatus" />
          </v-tab-item>
          <v-tab-item>
            <InfoShip @setStatus="setStatus" />
          </v-tab-item>
          <v-tab-item>
            <div class="cart__pay">
              <img src="@/assets/images/pay-success.svg" alt="" />
              <h2>{{ messagePayment }}</h2>
            </div>
          </v-tab-item>
        </v-tabs>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { typeCart } from "@/shared/interface/index";
import { PAYMENT__SUCCESS } from "@/shared/constants/message";
import { routes } from "@/shared/constants/cart";

const cart = namespace("cart");
const user = namespace("user");

@Component({
  components: {
    Nav : () => import("@/components/Nav.vue"),
    Checkout : () => import("@/components/Checkout.vue"),
    InfoShip : () => import("@/components/InfoShip.vue"),
  },
})
export default class Cart extends Vue {
  @cart.State
  cart!: typeCart[];
  status: number = 0;
  messagePayment: string = PAYMENT__SUCCESS;
  routes: any[] = routes;
  @user.State
  isLogin!: Boolean;
  setStatus(status: number): void {
    this.status = status;
  }
  @cart.Mutation
  setCart!: (infoCart: typeCart[]) => void;
  @cart.Getter
  getTotalPrice!: number;
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/cart.scss";
</style>