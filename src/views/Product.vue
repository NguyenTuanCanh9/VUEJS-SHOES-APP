<template>
  <div>
    <Nav :routes="routes" />
    <main class="container main">
      <div v-if="isLoading">
        <section class="selection" v-if="detailProduct.id !== 0">
          <AddToCart
            v-if="isLoading"
            :detailProduct="detailProduct"
            @midAddToCart="midAddToCart"
          />
          <Review v-if="isLoading" :reviews="reviews" />
          <div class="product">
            <v-row no-gutters>
              <v-col cols="12" sm="6" md="3" lg="3">
                <PopularProduct>
                  <img src="@/assets/images/product-c.png" alt="" />
                  <h3>SEMILAR PRODUCTS</h3>
                </PopularProduct>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="3"
                lg="3"
                v-for="(product, index) in products"
                :key="index"
              >
                <Products
                  :product="product"
                  @handleLike="handleLike"
                  @handleAddToCart="handleAddToCart"
                />
              </v-col>
              <div class="re-loading" v-if="reLoading">
                <v-progress-circular
                  :size="50"
                  :width="5"
                  color="btn"
                  indeterminate
                ></v-progress-circular>
              </div>
            </v-row>
          </div>
        </section>
        <NotFound v-else>
          <i class="fas fa-exclamation-triangle"></i>
          <h2>Product does not exist</h2>
        </NotFound>
      </div>
      <div class="loading-product" v-else>
        <v-skeleton-loader
          height="100vh"
          type="card-avatar, card-avatar,article, article, actions"
        ></v-skeleton-loader>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Mixins } from "vue-property-decorator";
import { typeProduct, typeBuy } from "@/shared/interface/index";
import { routes, reviews } from "@/shared/constants/detailProduct";
import {
  detailProduct,
  relateToProduct,
} from "@/shared/services/detailProduct";

import FavoriteBuy from "@/mixins/FavoriteBuy";

import { namespace } from "vuex-class";
const cart = namespace("cart");

@Component({
  components: {
    Nav: () => import("@/components/Nav.vue"),
    AddToCart: () => import("@/components/AddToCart.vue"),
    Review: () => import("@/components/Review.vue"),
    Products: () => import("@/components/Products.vue"),
    NotFound: () => import("@/components/NotFound.vue"),
    PopularProduct: () => import("@/components/PopularProduct.vue"),
  },
})
export default class Product extends Mixins(FavoriteBuy) {
  reLoading = false;
  routes: object = routes;
  products: typeProduct[] = [];
  isLoading: Boolean = false;
  detailProduct: typeProduct = {
    id: 0,
    name: "",
    category_id: 0,
    price: 0,
    is_favorited: false,
    colors: [],
    images: [],
    category: {},
  };
  reviews: object[] = reviews();

  midAddToCart(info: typeBuy): void {
    this.handleAddToCart({
      product_id: info.id,
      price: info.price,
      quantity: info.quantity,
    });
  }

  getProduct(): void {
    Promise.all([
      detailProduct(this.$route.params.slug),
      relateToProduct({ page: 1 }),
    ])
      .then((response) => {
        this.detailProduct = (response[0] as any).data;
        this.products = (response[1] as any).data;
      })
      .finally(() => {
        this.isLoading = true;
      });
  }
  @Watch("isLogin")
  reHandlseProduct(): void {
    this.reLoading = true;
    relateToProduct({ page: 1 }).then((response) => {
      this.products = (response as any).data;
      this.reLoading = false;
    });
  }

  @Watch("$route.params.slug")
  getNewProduct() {
    window.scrollTo(0, 0);
    this.isLoading = false;
    this.getProduct();
  }

  mounted() {
    window.scrollTo(0, 0);
    this.getProduct();
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/product.scss";
</style>