<template>
  <v-img height="380" class="product__wrap--6" :src="info.src">
    <router-link to="/" class="product__wrap--6">NEW</router-link>
    <h4>{{ info.name }}</h4>
    <h3>{{ info.type.d1 }}</h3>
    <h3>{{ info.type.d2 }}</h3>
    <v-btn rounded large class="red white--text">More Info</v-btn>
  </v-img>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class NewProduct extends Vue {
  @Prop({ required: true, type: Object }) readonly info!: Object;
}
</script>

<style lang="scss">
.product__wrap {
  &--6 {
    padding: 60px;
    a {
      background-color: var(--black-color) !important;
      padding: 5px;
      border-radius: 2px;
      color: var(--white-color) !important;
      text-decoration: none;
    }
    h4 {
      margin: 50px 0px 22px 0px;
      font-size: 1.3rem;
      color: var(--white-color);
    }
    h3 {
      font-size: 2.5rem;
      font-weight: 600;
      line-height: 3rem;
      color: var(--white-color);
    }
    button {
      background-color: #55a8e5;
      margin-top: 45px;
      width: 150px;
      span {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
