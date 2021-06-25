<template>
  <section class="cart__check">
    <div v-if="isLoading">
      <template v-if="cart.length !== 0">
        <div
          class="cart__check--item"
          v-for="(item, index) in cart"
          :key="index"
        >
          <img :src="item.product.images[0].url" alt="" />
          <div class="cart__check--item--wrap">
            <div class="cart__check--item--text">
              <h3>{{ item.product.name }}</h3>
              <h4>LIFESTYLE</h4>
            </div>
            <h4 class="cart__check--item--price">${{ item.price }}.00</h4>
          </div>
          <div class="selection__buy--number hide-on-mobile">
            <div class="selection__buy--number--item">
              <i class="fas fa-minus"></i>
            </div>
            <div class="selection__buy--number--item">
              {{ item.quantity }}
            </div>
            <div class="selection__buy--number--item">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          <h4 class="cart__check--item--price hide-on-mobile">
            ${{ item.price * item.quantity }}.00
          </h4>
          <div
            class="cart__check--item--icon"
            @click="remove(cart[index].product._id)"
          >
            <i class="fas fa-times"></i>
          </div>
        </div>
      </template>
      <div class="cart__check--item total">
        <div class="cart__check--item--detail hide-on-large-laptop">
          <i class="far fa-clock"></i>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div class="cart__check--item--detail">
          <h3>Total value:</h3>
          <h4 class="cart__check--item--detail--price">
            $ {{ getTotalPrice }}.00
          </h4>
          <div class="cart__check--item--icon detail">
            <i class="fas fa-sync-alt"></i>
          </div>
        </div>
      </div>
      <div class="cart--bottom">
        <v-btn
          depressed
          color="transparent"
          :class="{ disabled: getTotalPrice === 0 }"
          @click="setStatus(1)"
        >
          NEXT STEP
          <i class="fas fa-angle-right"></i>
        </v-btn>
      </div>
    </div>
    <div class="loading-checkout" v-else>
      <v-progress-circular
        :size="50"
        :width="5"
        color="btn"
        indeterminate
      ></v-progress-circular>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { typeCart } from "../shared/interface/index";

const cart = namespace("cart");

@Component
export default class Checkout extends Vue {
  @Prop() readonly cart!: typeCart[];
  @cart.Getter
  getTotalPrice!: number;
  @Emit("setStatus")
  _setStatus(status: number): number {
    return status;
  }
  setStatus(status: number): void {
    this._setStatus(status);
  }

  isLoading = false;
  mounted() {
    setTimeout(() => {
      this.isLoading = true;
    }, 200);
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/cart.scss";
.loading-checkout {
  width: 100%;
  height: calc(100vh - 130px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
