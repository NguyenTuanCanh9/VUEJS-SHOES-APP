<template>
  <section class="cart__shpping">
    <div class="cart__shipping--item">
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="12" lg="6">
          <div class="cart__shipping--wrap left" :class="{ disabled: isLogin }">
            <h2>Sign In</h2>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form
                @submit.prevent="onAuten"
                class="cart__shipping--item--form"
              >
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

                <div class="cart__shipping--btn" :class="{ disabled: invalid }">
                  <v-btn
                    height="60"
                    width="248"
                    color="btn"
                    type="submit"
                  >
                    Sign In
                  </v-btn>
                </div>
              </form>
            </validation-observer>
            <a href="#">For got your password</a>
            <h2 class="message" :class="{ success: isLogin }">
              {{ messageLogin }}
            </h2>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6">
          <div
            class="cart__shipping--wrap right"
            :class="{ disabled: messageLogin === '' }"
          >
            <h2>Fill all fields</h2>
            <validation-observer v-slot="{ invalid }">
              <form class="cart__shipping--item--form--right">
                <div class="cart__shipping--item--form info-form">
                  <ValidationProvider
                    name="FirstName"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div
                      class="
                        cart__shipping--item--form--input
                        info-form
                        border-b-r
                      "
                    >
                      <v-text-field
                        height="20"
                        color="textField"
                        label="FirstName"
                        v-model="formRegis.FirstName"
                        required
                      >
                      </v-text-field>
                      <div class="validate-error">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider
                    name="SecondName"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div
                      class="
                        cart__shipping--item--form--input
                        info-form
                        border-b
                      "
                    >
                      <v-text-field
                        height="20"
                        color="textField"
                        label="SecondName"
                        v-model="formRegis.SecondName"
                        required
                      >
                      </v-text-field>
                      <div class="validate-error">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider
                    name="E-mail"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <div
                      class="
                        cart__shipping--item--form--input
                        info-form
                        border-b-r
                      "
                    >
                      <v-text-field
                        height="20"
                        color="textField"
                        label="Email"
                        v-model="formRegis.Email"
                        required
                      >
                      </v-text-field>
                      <div class="validate-error">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider
                    name="Password"
                    :rules="{
                      required: true,
                    }"
                    v-slot="{ errors }"
                  >
                    <div
                      class="
                        cart__shipping--item--form--input
                        info-form
                        border-b-r
                      "
                    >
                      <v-text-field
                        height="20"
                        color="textField"
                        label="Password"
                        v-model="formRegis.Password"
                        type="password"
                        required
                      >
                      </v-text-field>
                      <div class="validate-error">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider
                    name="City"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div
                      class="
                        cart__shipping--item--form--input
                        info-form
                        border-b-r
                      "
                    >
                      <v-text-field
                        height="20"
                        color="textField"
                        label="City"
                        v-model="formRegis.City"
                        required
                      >
                      </v-text-field>
                      <div class="validate-error">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider
                    name="Code"
                    :rules="{ required: true }"
                    v-slot="{ errors }"
                  >
                    <div
                      class="
                        cart__shipping--item--form--input
                        info-form
                        border-b-r
                      "
                    >
                      <v-text-field
                        height="20"
                        color="textField"
                        label="Zip/Postctal Code"
                        v-model="formRegis.Code"
                        required
                      >
                      </v-text-field>
                      <div class="validate-error">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider
                    name="Address"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div class="cart__shipping--item--form--input info-form">
                      <v-text-field
                        height="20"
                        color="textField"
                        label="Address"
                        v-model="formRegis.Address"
                        required
                      >
                      </v-text-field>
                      <div class="validate-error">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="cart__shipping--btn">
                  <v-btn
                    height="60"
                    width="100%"
                    color="textField"
                    :disabled="invalid"
                    type="submit"
                  >
                    RIGISTER
                  </v-btn>
                </div>
              </form>
            </validation-observer>
            <h2
              class="message"
              :class="{ success: messageRegis === 'Sign up successfully.' }"
            >
              {{ messageRegis }}
            </h2>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="cart__shipping--item">
      <v-row no-gutters>
        <v-col>
          <div class="cart--bottom">
            <v-btn
              depressed
              color="transparent"
              @click="setStatus(0)"
            >
              <i class="fas fa-angle-left"></i>
              PREVIOUS STEP
            </v-btn>
          </div>
        </v-col>
        <v-col>
          <div class="cart--bottom">
            <v-btn
              depressed
              color="transparent"
              @click="setStatus(2)"
              :disabled="!isLogin"
            >
              NEXT STEP
              <i class="fas fa-angle-right"></i>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import qs from "qs";
import { login } from "../shared/services/user";
import { namespace } from "vuex-class";
import { formLogin, formRegistration } from "../shared/interface/index";

const user = namespace("user");

@Component
export default class InfoShip extends Vue {
  formAuthen: formLogin = {
    email: "",
    password: "",
  };
  formRegis: formRegistration = {
    FirstName: "",
    SecondName: "",
    Email: "",
    Password: "",
    City: "",
    Code: "",
    Address: "",
  };
  @user.Mutation
  setLogin!: (token: string) => void;
  @user.Mutation
  setMessageLogin!: () => void;
  @user.Mutation
  setRegis!: (token: string) => void;
  @user.Mutation
  setMessageRegis!: () => void;
  @user.State
  isLogin!: Boolean;
  @user.State
  messageLogin!: string;
  @user.State
  messageRegis!: string;

  onAuten(): void {
    this.setMessageLogin();
    login(qs.stringify(this.formAuthen)).then((response) => {
      if (response) {
        this.setLogin((response as any).data.token);
      }
    });
  }

  @Emit("setStatus")
  _setStatus(status: number): number {
    return status;
  }
  setStatus(status: number): void {
    this._setStatus(status);
  }
}
</script>
