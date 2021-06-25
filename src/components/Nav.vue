<template>
  <div class="nav">
    <h1>MEN'S LIFESTYLE SHOES</h1>
    <ul>
      <li>
        <router-link to="/"> Home </router-link>
      </li>
      <li v-for="(route, index) in routes" :key="index">
        <i class="fas fa-angle-right"></i>
        <router-link
          :to="`/${route.path}`"
          :class="{ disabled: route.disabled }"
        >
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  @Prop()
  readonly routes!: [];
}
</script>

<style lang="scss">
  @import "~@/assets/scss/nav/nav.scss";
</style>