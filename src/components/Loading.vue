<template>
  <div class="loading" :style="{ top: top + 'px' }">
    <v-progress-circular
      :size="50"
      :width="5"
      color="btn"
      indeterminate
    ></v-progress-circular>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  @Prop() readonly top!: number;
}
</script>
<style lang="scss">
.loading {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1000;
  display: flex;
  background-color: var(--white-color);
  justify-content: center;
  align-items: center;
}
</style>