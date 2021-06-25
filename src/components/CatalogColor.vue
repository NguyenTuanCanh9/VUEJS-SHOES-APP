<template>
  <div class="filter__sidebar--color">
    <div class="filter__sidebar--title--item" @click="showColor">
      <i
        class="fas fa-angle-right filter__sidebar--title--item--icon"
        :class="{ 'color-rotage': isColor }"
      ></i>
      <h3>COLOR</h3>
      <i
        class="fas fa-times filter__sidebar--title--item--icon"
        v-show="isColor"
      ></i>
    </div>
    <v-expand-transition>
      <v-card v-show="isColor" elevation="0">
        <div class="filter__sidebar--color--mid selection__style">
          <ul class="selection__style--color">
            <li
              v-for="(color, index) in colors"
              :key="index"
              :class="{ 'no-mr': (index + 1) % 6 === 0 }"
              @click="setColor(color)"
            >
              <v-btn depressed :color="color" fab x-small dark>
                <i
                  class="fas fa-check"
                  :class="{
                    'selection--hidden': colorName !== color,
                  }"
                ></i>
              </v-btn>
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
export default class CatalogColor extends Vue {
  @Prop({ required: true }) readonly colors!: string[];
  @Prop({ required: true }) readonly colorName!: string[];
  isColor = true;
  showColor(): void {
    this.isColor = !this.isColor;
  }
  @Emit("setColor")
  _setColor(color: string): string {
    return color;
  }
  setColor(color: string): void {
    this._setColor(color);
  }
}
</script>