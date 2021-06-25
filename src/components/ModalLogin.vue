<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <div class="cart__shipping--wrap background">
        <h2>Sign In</h2>
        <validation-observer ref="observer">
          <form @submit.prevent="onAuten" class="cart__shipping--item--form">
            <ValidationProvider
              name="E-mail"
              rules="required|email"
              v-slot="{ errors }"
            >
              <div class="cart__shipping--item--form--input">
                <v-text-field
                  height="20"
                  color="textField"
                  label="Mail"
                  v-model="formAuthen.email"
                  required
                >
                </v-text-field>
                <div class="validate-error">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              name="Password"
              :rules="{ required: true, min: 3, max: 10 }"
              v-slot="{ errors }"
            >
              <div class="cart__shipping--item--form--input">
                <v-text-field
                  height="20"
                  color="textField"
                  v-model="formAuthen.password"
                  label="Password"
                  required
                  type="password"
                >
                </v-text-field>
                <div class="validate-error">{{ errors[0] }}</div>
              </div>
            </ValidationProvider>

            <div class="cart__shipping--btn">
              <v-btn height="60" width="248" color="btn" type="submit">
                Sign In
              </v-btn>
            </div>
          </form>
        </validation-observer>
        <a href="#">For got your password</a>
      </div>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { success } from "@/plugins/toast.plugin";
import { LOGIN__SUCCESS } from "@/shared/constants/message";
import qs from "qs";
import { login } from "../shared/services/user";
import { namespace } from "vuex-class";
import { formLogin } from "../shared/interface/index";

const user = namespace("user");

@Component
export default class ModalLogin extends Vue {
  @Prop({ required: true, type: Boolean, default: false })
  readonly isModal: Boolean = false;
  @user.Mutation
  setLogin!: (token: string) => void;
  @user.Mutation
  handleModal!: (status: boolean) => void;
  @user.State
  isLogin!: Boolean;

  dialog: Boolean = false;
  @Watch("dialog")
  handleModalLogin(): void {
    if (this.dialog === false) {
      this.handleModal(false);
    }
  }
  @Watch("isModal")
  function(): void {
    this.dialog = this.isModal;
  }
  formAuthen: formLogin = {
    email: "",
    password: "",
  };
  private onLogin(): void {
    login(qs.stringify(this.formAuthen)).then((response) => {
      this.setLogin((response as any).data.token);
      this.handleModal(false);
      success(LOGIN__SUCCESS);
      this.formAuthen = {
        email: "",
        password: "",
      };
    });
  }
  onAuten(): void {
    this.onLogin();
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/cart.scss";
.background {
  background-color: var(--white-color);
}
</style>