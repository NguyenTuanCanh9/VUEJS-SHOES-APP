<template>
  <div>
    <div v-if="isLoading">
      <Nav :routes="routes" />
      <main class="container main">
        <section class="image">
          <v-row no-gutters>
            <v-col cols="12" sm="6" mg="6" lg="8">
              <NewProduct :info="info_top[0]" />
            </v-col>
            <v-col cols="12" sm="6" mg="6" lg="4">
              <NewProduct :info="info_top[1]" />
            </v-col>
          </v-row>
        </section>
        <section class="sidebar-icon">
          <div class="sidebar-icon__item" @click="showLeftSide">
            <i class="fas fa-indent"></i>
          </div>
          <div class="sidebar-icon__item">
            <i class="fab fa-microsoft"></i>
          </div>
        </section>
        <div :class="{ modal: isLeftSide }" @click="showLeftSide"></div>
        <section class="filter">
          <v-row no-gutters>
            <v-col
              cols="12"
              sm="12"
              md="12"
              lg="3"
              class="filter__sidebar--wrap"
              :class="{ show: isLeftSide }"
            >
              <div class="filter__sidebar--top">
                <h3>Filter</h3>
                <div class="filter__sidebar--top--icon">
                  <i class="fas fa-sync-alt"></i>
                </div>
              </div>
              <Categories
                :categories="categories"
                :categoryId="categoryId"
                @setItem="setItem"
              />
              <CatalogPrice />
              <CatalogBrand />
              <CatalogColor
                :colors="colors"
                :colorName="colorName"
                @setColor="setColor"
              />
              <CatalogSize :sizes="sizes" :size="size" @setSize="setSize" />
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="9">
              <CatalogSort :shortItems="shortItems" />
              <section class="product">
                <v-row no-gutters v-if="products.length !== 0">
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    lg="4"
                    v-for="(product, index) in products"
                    :key="index"
                  >
                    <Products
                      :product="product"
                      @handleLike="handleLike"
                      @handleAddToCart="handleAddToCart"
                    />
                  </v-col>
                </v-row>
                <NotFound v-else>
                  <i class="fas fa-exclamation-triangle"></i>
                  <h2>Product does not exist</h2>
                </NotFound>
                <div class="re-loading" v-if="!isPagination">
                  <v-progress-circular
                    :size="50"
                    :width="5"
                    color="btn"
                    indeterminate
                  ></v-progress-circular>
                </div>
              </section>
              <section
                class="filter__product--bottom"
                :class="{ 'no-border': numberPage <= 1 }"
              >
                <v-row no-gutters>
                  <v-col
                    class="first b-r"
                    :class="{ 'no-border': numberPage <= 1 }"
                    cols="6"
                    sm="6"
                    md="4"
                    lg="4"
                  >
                    <div
                      v-if="numberPage > 1"
                      class="filter__product--bottom--item left b-l b-r"
                      @click="movePage(-1)"
                    >
                      <i class="fas fa-angle-left"></i>
                    </div>
                  </v-col>
                  <v-col
                    class="second"
                    :class="{ 'no-border': numberPage <= 1 }"
                    cols="12"
                    sm="12"
                    md="4"
                    lg="4"
                  >
                    <div v-if="numberPage > 1">
                      <v-row no-gutters>
                        <v-col v-for="n in numberPage" :key="n">
                          <div
                            class="filter__product--bottom--item b-r"
                            :class="{ active: n === currentPage }"
                            @click="movePages(n)"
                          >
                            {{ n }}
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                  <v-col
                    class="third"
                    :class="{ 'no-border': numberPage <= 1 }"
                    cols="6"
                    sm="6"
                    md="4"
                    lg="4"
                  >
                    <div
                      v-if="numberPage > 1"
                      class="b-l filter__product--bottom--item right"
                      @click="movePage(1)"
                    >
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </v-col>
                </v-row>
              </section>
            </v-col>
          </v-row>
        </section>
      </main>
    </div>
    <Loading :top="75" v-else />
  </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { categories, products } from "@/shared/services/catalog";
import {
  shortItems,
  routes,
  colors,
  sizes,
  info_top,
} from "@/shared/constants/catalog";

import FavoriteBuy from "@/mixins/FavoriteBuy";

const filter = namespace("filter");

@Component({
  components: {
    Nav: () => import("@/components/Nav.vue"),
    Products: () => import("@/components/Products.vue"),
    Loading: () => import("@/components/Loading.vue"),
    NewProduct: () => import("@/components/NewProduct.vue"),
    ModalLogin: () => import("@/components/ModalLogin.vue"),
    NotFound: () => import("@/components/NotFound.vue"),
    Categories: () => import("@/components/Categories.vue"),
    CatalogPrice: () => import("@/components/CatalogPrice.vue"),
    CatalogBrand: () => import("@/components/CatalogBrand.vue"),
    CatalogColor: () => import("@/components/CatalogColor.vue"),
    CatalogSize: () => import("@/components/CatalogSize.vue"),
    CatalogSort: () => import("@/components/CatalogSort.vue"),
  },
})
export default class Catalog extends Mixins(FavoriteBuy) {
  isLoading = true;
  isPagination = true;
  isLeftSide = false;
  categoryId: number = 0;
  colorName: string = "";
  size: string = "";
  currentPage: number = 1;
  numberPage: number = 0;
  categories: object[] = [];
  colors: string[] = colors;
  sizes: number[] = sizes;
  shortItems: object[] = shortItems;
  routes: object[] = routes;
  info_top: object[] = info_top;
  @filter.State
  searchInput!: String;

  setItem(number: number): void {
    this.categoryId = number;
  }
  setColor(color: string): void {
    this.colorName = color;
  }
  setSize(size: string): void {
    console.log("ahahha");
    this.size = size;
  }
  showLeftSide(): void {
    this.isLeftSide = !this.isLeftSide;
  }
  private getProducts(params: object): void {
    products(params).then((products) => {
      this.isPagination = true;
      this.products = (products as any).data;
      this.numberPage = (products as any).meta.last_page;
    });
  }
  @Watch("categoryId")
  filterCategoryProduct(): void {
    this.isPagination = false;
    this.getProducts({ category_id: this.categoryId, name: this.searchInput });
  }
  @Watch("searchInput")
  filterNameProduct(): void {
    this.isPagination = false;
    this.getProducts({ category_id: this.categoryId, name: this.searchInput });
  }
  @Watch("isLogin")
  reHandlseProduct(): void {
    this.isPagination = false;
    this.getProducts({ category_id: this.categoryId, name: this.searchInput });
  }
  movePage(number: number): void {
    this.isPagination = false;
    this.currentPage = this.currentPage + number;
    if (this.currentPage === 0) this.currentPage = 1;
    if (this.currentPage > this.numberPage) this.currentPage = this.numberPage;
    if (this.categoryId === 0) {
      this.getProducts({ page: this.currentPage });
    } else {
      this.getProducts({ category_id: this.categoryId });
    }
  }
  movePages(number: number): void {
    this.isPagination = false;
    this.currentPage = number;
    if (this.categoryId === 0) {
      this.getProducts({ page: this.currentPage });
    } else {
      this.getProducts({ category_id: this.categoryId });
    }
  }
  private getCatalog(): void {
    this.isLoading = false;
    Promise.all([categories(), products({ page: this.currentPage })]).then(
      (catalogItem) => {
        this.categories = (catalogItem[0] as any).data;
        this.products = (catalogItem[1] as any).data;
        this.numberPage = (catalogItem[1] as any).meta.last_page;
        this.isLoading = true;
      }
    );
  }
  mounted(): void {
    this.getCatalog();
  }
}
</script>
<style lang="scss">
@import "~@/assets/scss/catalog.scss";
@import "~@/assets/scss/products/products.scss";
</style>
