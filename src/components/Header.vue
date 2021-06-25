<template>
  <div>
    <div class="header">
      <ul class="header__left">
        <li class="header__left--btn">
          <v-btn icon @click="showSearch">
            <i class="fas fa-search"></i>
          </v-btn>
          <!-- Search -->
          <div class="search" :class="{ show: isShow }">
            <div class="container">
              <div class="search__header">
                <div class="search__header--search">
                  <input type="text" v-model="searchInfo" />
                  <i class="fas fa-search" @click="handleSearchName"></i>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="header__left--btn">
          <v-btn icon>
            <i class="fas fa-bars"></i>
          </v-btn>
        </li>
      </ul>
      <router-link to="/" class="header__item">
        <img src="../assets/images/logo.png" alt="" />
      </router-link>
      <ul class="header__right">
        <li class="header__right--btn">
          <v-btn icon>
            <i v-if="!isLogin" class="far fa-user" @click="setModalLogin"></i>
            <img
              v-else
              src="@/assets/images/user.svg"
              alt=""
              @click="isLogout = true"
            />
          </v-btn>
        </li>
        <li class="header__right--btn">
          <v-btn icon>
            <i class="far fa-heart"></i>
          </v-btn>
        </li>
        <li class="header__right--btn">
          <router-link to="/cart">
            <v-btn icon>
              <v-badge :content="getNumberCart.toString()">
                <i class="fas fa-cart-plus"></i>
              </v-badge>
            </v-btn>
          </router-link>
        </li>
      </ul>
    </div>
    <v-dialog
      v-model="isLogout"
      max-width="490"
      transition="dialog-top-transition"
    >
      <div class="modal-log">
        <div class="modal-log__wrap">
          <h2>Do you want logout?</h2>
          <h3>If you log out, you will need to log in again when you pay!</h3>
        </div>
        <div class="modal-log__btn">
          <v-btn
            depressed
            color="primary"
            class="mr-2"
            width="100"
            @click="setLogout"
          >
            ARGEE
          </v-btn>
          <v-btn depressed color="error" width="100" @click="isLogout = false">
            DISARGEE
          </v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { logout } from "@/shared/services/user";
import { progressCart } from "@/shared/services/cart";
import { removeToken } from "@/shared/helper";
import { success } from "@/plugins/toast.plugin";
import { LOGOUT__SUCCESS } from "@/shared/constants/message";
import { typeCart } from "@/shared/interface/index";

const cart = namespace("cart");
const user = namespace("user");
const filter = namespace("filter");

@Component({
  components: {
    ModalLogin: () => import("@/components/ModalLogin.vue"),
  },
})
export default class Header extends Vue {
  isLogout: boolean = false;
  searchInfo: string = "";
  @cart.Getter
  getNumberCart!: () => void;
  @cart.Mutation
  setCart!: (infoCart: typeCart[]) => void;
  @cart.Mutation
  retsetCart!: () => void;
  @user.State
  isLogin!: Boolean;
  @user.Mutation
  handleModal!: (status: boolean) => void;
  @user.Mutation
  changeLogin!: (satus: boolean) => void;
  @filter.Mutation
  setSearchInput!: (name: string) => void;
  isShow: boolean = false;

  handleSearchName(): void {
    this.setSearchInput(this.searchInfo);
  }

  showSearch(): void {
    if (/catalog/g.test(this.$route.path)) {
      this.isShow = !this.isShow;
    }
  }

  @Watch("$route")
  onUrlChange(): void {
    if (!/catalog/g.test(this.$route.path)) {
      this.isShow = false;
    }
  }

  setModalLogin(): void {
    this.handleModal(true);
  }

  setLogout(): void {
    logout()
      .then(() => {
        removeToken();
        success(LOGOUT__SUCCESS);
      })
      .finally(() => {
        this.isLogout = false;
        this.changeLogin(false);
      });
  }
  private progressCart(): void {
    progressCart().then((response) => {
      this.setCart((response as any).data.items);
      this.changeLogin(true);
    })
  }
  @Watch("isLogin")
  function(): void {
    if (this.isLogin) {
      this.progressCart();
    } else {
      this.retsetCart();
    }
  }
  mounted() {
    this.progressCart();
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/header/header.scss";
@import "~@/assets/scss/search/search.scss";
</style>
