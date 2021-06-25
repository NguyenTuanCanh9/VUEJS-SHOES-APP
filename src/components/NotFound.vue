<template>
  <div class="search-error" :style="{ 'margin-top': MarginTop + 'px' }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class NotFound extends Vue {
  @Prop() readonly MarginTop!: number;
}
</script>

<style lang="scss">
.search-error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 130px);
  h2 {
    font-size: 1.8rem;
    color: blue;
  }
  i {
    color: gold;
    font-size: 1.8rem;
    padding-right: 10px;
  }
}
</style>
