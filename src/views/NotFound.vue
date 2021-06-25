
<template>
  <div class="container">
    <div class="notfound">
      <img src="@/assets/images/404.svg" alt="" />
      <h1>NOT FOUND PAGE!</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    NotFound: () => import("@/components/NotFound.vue"),
  },
})
export default class Search extends Vue {}
</script>

<style lang="scss">
.notfound {
  position: fixed;
  top: 75px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  justify-content: center;
  background-color: white;
  h1 {
    color: red;
  }
}
</style>