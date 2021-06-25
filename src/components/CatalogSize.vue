<template>
  <div class="filter__sidebar--size">
    <div class="filter__sidebar--title--item" @click="showSize">
      <i
        class="fas fa-angle-right filter__sidebar--title--item--icon"
        :class="{ 'size-rotage': isSize }"
      ></i>
      <h3>SIZE</h3>
      <i
        class="fas fa-times filter__sidebar--title--item--icon"
        v-show="isSize"
      ></i>
    </div>
    <v-expand-transition>
      <v-card v-show="isSize" elevation="0">
        <div class="filter__sidebar--size--mid">
          <ul>
            <li
              v-for="(size_, index) in sizes"
              :key="index"
              @click="setSize(size_)"
              class="filter__sidebar--size--mid--item b-l b-b"
              :class="{
                'b-t': index + 1 <= 5,
                'b-r': (index + 1) % 5 === 0 || index === sizes.length - 1,
                active: size_ === size,
              }"
            >
              {{ size_ }}
            </li>
          </ul>
        </div>
      </v-card>
    </v-expand-transition>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class CatalogSize extends Vue {
  @Prop({ required: true }) readonly sizes!: number[];
  @Prop({ required: true }) readonly size!: string[];
  isSize = true;
  showSize(): void {
    this.isSize = !this.isSize;
  }
  @Emit("setSize")
  _setSize(size: string): string {
    return size;
  }
  setSize(size: string): void {
    this._setSize(size);
  }
}
</script>