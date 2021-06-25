<template>
  <div class="product__wrap--1">
    <slot></slot>
    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
    <v-btn class="black blue--text">
      More Products
      <i class="fas fa-chevron-circle-right"></i>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PopularProduct extends Vue {}
</script>
<style lang="scss">
.product__wrap {
  &--1 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 380px;
    background-color: var(--black-color);
    h3 {
      font-size: 1.8rem;
      color: var(--white-color);
      margin: 35px 0px 10px 0px;
    }
    h4 {
      font-size: 1.2rem;
      color: var(--border-color);
      text-align: center;
    }
    button {
      background-color: transparent;
      margin-top: 50px;
      span {
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--white-color);
        i {
          padding-left: 5px;
          position: relative;
          top: 0.5px;
        }
      }
    }
  }
}
</style>