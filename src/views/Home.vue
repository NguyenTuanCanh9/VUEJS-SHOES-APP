<template>
  <div>
    <div v-if="isLoading">
      <div class="banner">
        <v-carousel
          cycle
          height="100%"
          hide-delimiter-background
          show-arrows-on-hover
          v-if="isLoading"
        >
          <v-carousel-item v-for="n in 3" :key="n">
            <v-sheet color="btn" height="100%" class="banner--wrap">
              <div class="banner__logo">
                <img src="../assets/images/new-collection.png" alt="" />
              </div>
              <div class="banner__title">
                <h2>SNKPS OF</h2>
                <h2>THE WORK</h2>
              </div>
              <img
                class="banner__img"
                src="../assets/images/large-shoe.png"
                alt=""
              />
              <v-btn class="banner__btn" rounded large width="162"
                >More Info</v-btn
              >
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
      <!-- Main -->
      <main class="container main">
        <!-- Util -->
        <section class="util">
          <v-row no-gutters>
            <v-col
              cols="12"
              sm="6"
              md="6"
              lg="3"
              v-for="(util, index) in utils"
              :key="index"
              class="util__item"
            >
              <img
                :src="require(`@/assets/images/${util.name}`)"
                alt=""
                class="util__item--img"
              />
              <h2 class="util__item--content">{{ util.content }}</h2>
              <p class="util__item--description">{{ util.description }}</p>
              <v-btn tile depressed class="white blue--text" v-if="index === 1">
                More Info
                <i class="fas fa-chevron-circle-right"></i>
              </v-btn>
            </v-col>
          </v-row>
        </section>
        <!-- Countdown -->
        <section class="count-down">
          <v-row no-gutters>
            <v-col cols="12" sm="12" md="6" lg="6">
              <div class="count-down__left">
                <h4>DEAL OF DAY</h4>
                <h3>Acronym Jackket:J1A-GT</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestiae veniam impedit neque ipsam tempora repellendus.
                  Explicabo maxime eos dolor dolores.
                </p>
                <div class="count-down__left--price">
                  <h3>$1235</h3>
                  <h2>$1890</h2>
                </div>
                <div class="count-down__left--time">
                  <div class="count-down__left--time--item">
                    <h3>01</h3>
                    <h4>DAYS</h4>
                  </div>
                  <div class="count-down__left--time--item">
                    <h3>23</h3>
                    <h4>HOURS</h4>
                  </div>
                  <div class="count-down__left--time--item">
                    <h3>15</h3>
                    <h4>MINS</h4>
                  </div>
                  <div class="count-down__left--time--item">
                    <h3>40</h3>
                    <h4>SECS</h4>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col xs="12" sm="12" md="6" lg="6">
              <div class="count-down__right">
                <img
                  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                  alt=""
                />
              </div>
            </v-col>
          </v-row>
        </section>
        <!-- Products -->
        <section class="product">
          <v-row no-gutters>
            <v-col
              :cols="index === 6 ? '12' : '12'"
              :sm="index === 6 ? '6' : '6'"
              :md="index === 6 ? '6' : '3'"
              :lg="index === 6 ? '6' : '3'"
              v-for="(product, index) in products"
              :key="index"
            >
              <Product
                :product="product"
                v-if="index !== 0 && index !== 6"
                @handleLike="handleLike"
                @handleAddToCart="handleAddToCart"
              />
              <PopularProduct v-if="index === 0">
                <img src="@/assets/images/star.png" alt="" />
                <h3>POPULAR PRODUCTS</h3>
              </PopularProduct>
              <NewProduct :info="newInfo" v-if="index === 6" />
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
          <div class="product--load">
            <v-btn
              depressed
              color="transparent"
              size="20"
              @click="loadMore"
              v-if="!isLoadMore"
            >
              <i class="fas fa-redo"></i>
              Load More
            </v-btn>
            <v-progress-circular
              v-else
              indeterminate
              :width="3"
              :size="25"
              color="btn"
            ></v-progress-circular>
            <v-dialog v-model="isLoadMore" hide-overlay persistent width="300">
              <v-card color="primary" dark>
                <v-card-text>
                  Please stand by
                  <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                  ></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
        </section>
        <!-- Social -->
        <section class="social hide-on-tablab">
          <v-row no-gutters>
            <v-col
              :lg="index <= 6 ? (index === 1 ? '6' : '3') : 2"
              :md="index <= 6 ? (index === 1 ? '6' : '3') : 2"
              :sm="index <= 6 ? (index === 1 ? '6' : '3') : 2"
              :xs="index <= 6 ? (index === 1 ? '6' : '3') : 2"
              v-for="(element, index) in socials"
              :key="index"
            >
              <router-link
                to="/"
                class="social__item"
                :class="{ small: index > 6 }"
                v-if="index !== 1"
                :style="{ 'background-color': `${element.icon.color}` }"
              >
                <img
                  :src="require(`@/assets/images/${element.icon.path}`)"
                  alt=""
                  class="social__item--img"
                />
                <h4>{{ element.name }}</h4>
                <h2>{{ element.number }}</h2>
                <a href="#">#AgoraStore</a>
              </router-link>
              <div class="social__item--2" v-if="index === 1">
                <h4>LATEST TWEETS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                  perspiciatis nemo.<a>#provident sequi #dolorum veritatis</a>
                </p>
                <div class="social__item--2--bottom">
                  <div class="left">
                    <h3>@ThemeForest</h3>
                    <h4>12 mins</h4>
                  </div>
                  <div class="right">
                    <div class="btn--social">
                      <i class="fas fa-chevron-left"></i>
                    </div>
                    <div class="btn--social">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </section>
        <!-- Branch -->
        <section class="branch">
          <v-row no-gutters>
            <v-col
              cols="12"
              sm="4"
              md="3"
              lg="2"
              v-for="(logo, index) in logos"
              :key="index"
            >
              <div class="branch-img">
                <img :src="require(`@/assets/images/${logo.name}`)" alt="" />
              </div>
            </v-col>
          </v-row>
        </section>
      </main>
    </div>
    <Loading v-else :top="75" />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins } from "vue-property-decorator";
import { products } from "@/shared/services/home";
import { newInfo, utils, socials, logos } from "@/shared/constants/home";
import { typeUtils, typeSocials, typeLogos } from "@/shared/interface/index";
import { typeProduct } from "@/shared/interface/index";

import FavoriteBuy from "@/mixins/FavoriteBuy";

@Component({
  components: {
    Product: () => import("@/components/Products.vue"),
    PopularProduct: () => import("@/components/PopularProduct.vue"),
    NewProduct: () => import("@/components/NewProduct.vue"),
    Loading: () => import("@/components/Loading.vue"),
  },
})
export default class Home extends Mixins(FavoriteBuy) {
  isLoading = false;
  isLoadMore = false;
  reLoading = false;
  utils: typeUtils[] = utils;
  socials: typeSocials[] = socials;
  logos: typeLogos[] = logos;
  newInfo: object = newInfo;
  currentPage: number = 1;
  numberPage: number = 0;

  @Watch("products")
  function(): void {
    this.isLoadMore = false;
  }

  private getProducts(): void {
    products({ page: this.currentPage }).then((response) => {
      this.isLoading = true;
      this.products.push(...(response as any).data);
      this.numberPage = (response as any).meta.last_page;
    });
  }

  @Watch("isLogin")
  reHandlseProduct(): void {
    this.reLoading = true;
    let newProducts: typeProduct[] = [];
    const newRequest = async () => {
      for (let i = 1; i <= this.currentPage; i++) {
        await products({ page: i }).then((response) => {
          newProducts.push(...(response as any).data);
        });
        this.products = newProducts;
        this.reLoading = false;
      }
    };
    newRequest();
  }

  loadMore() {
    this.isLoadMore = true;
    this.currentPage = this.currentPage + 1;
    if (this.currentPage > this.numberPage) this.currentPage = this.numberPage;
    this.getProducts();
  }

  mounted() {
    this.getProducts();
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/home.scss";
</style>