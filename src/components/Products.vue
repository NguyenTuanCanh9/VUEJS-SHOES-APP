<template>
  <router-link
    :to="`/product/${product.id}`"
    class="product__wrap"
    :class="{ hover: isHover }"
    @mouseover.native="isHover = true"
    @mouseout.native="isHover = false"
  >
    <div class="product__wrap--item">
      <img :src="product.images[0].path" alt="" />
    </div>
    <h3>{{ product.name }}</h3>
    <h4>$ {{ product.price }}.00</h4>
    <!-- Sale -->
    <div v-if="product.discount" class="product__wrap--sale">
      {{ product.discount }}%
    </div>
    <!-- When hover -->
    <div class="lifestyle" :class="{ hover: isHover }">LIFESTYLE</div>
    <div class="product__wrap--btn left" :class="{ hover: isHover }">
      <router-link :to="`/product/${product.id}`">
        <v-btn
          rounded
          x-large
          width="135"
          class="btn-left"
          @click="addToCart(product.id, product.price, $event)"
        >
          <i class="fas fa-cart-plus"></i>
          Buy
        </v-btn>
      </router-link>
    </div>
    <div class="product__wrap--btn right" :class="{ hover: isHover }">
      <v-btn
        fab
        dark
        height="50"
        width="50"
        color="like"
        class="btn-right hover mr-2"
        @click="onCopy(product.id, $event)"
      >
        <i class="far fa-clone c"></i>
      </v-btn>
      <v-btn
        fab
        dark
        height="50"
        width="50"
        :color="product.is_favorited ? 'liked' : 'like'"
        class="btn-right hover"
        @click="onLike(product.id, product.is_favorited, $event)"
      >
        <i class="far fa-heart"></i>
      </v-btn>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class Products extends Vue {
  @Prop({ required: false, type: Object, default: () => {} })
  readonly product!: () => Object;
  isHover: boolean = false;
  @Emit("handleLike")
  handleLike(id: number, status: boolean): object {
    return {
      id: id,
      status: status,
    };
  }
  @Emit("handleAddToCart")
  handleAddToCart(product_id: number, price: number): object {
    return {
      product_id: product_id,
      price: price,
      quantity : 1
    };
  }
  addToCart(product_id: number, price: number, event: any): void {
    this.handleAddToCart(product_id, price);
    event.preventDefault();
  }
  onLike(id: number, status: boolean, event: any): void {
    this.handleLike(id, status);
    event.preventDefault();
  }
  onCopy(id: number, event: any): void {
    event.preventDefault();
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/products/products.scss";
</style>
