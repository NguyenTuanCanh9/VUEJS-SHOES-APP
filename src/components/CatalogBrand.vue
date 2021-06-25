<template>
  <div class="filter__sidebar--brand">
    <div class="filter__sidebar--title--item" @click="showBrand">
      <i
        class="fas fa-angle-right filter__sidebar--title--item--icon"
        :class="{ 'brand-rotage': isBrand }"
      ></i>
      <h3>BRAND</h3>
      <i
        class="fas fa-times filter__sidebar--title--item--icon"
        v-show="isBrand"
      ></i>
    </div>
    <v-expand-transition>
      <v-card v-show="isBrand" elevation="0">
        <ul class="filter__sidebar--brand--mid">
          <li>
            <label for="brand-1">Lifestyle</label>
            <input type="checkbox" id="brand-1" name="brand-1" value="Bike" />
          </li>
          <li>
            <label for="brand-2">Running</label>
            <input type="checkbox" id="brand-2" name="brand-2" value="Bike" />
          </li>
          <li>
            <label for="brand-3">Training & Gym</label>
            <input type="checkbox" id="brand-3" name="brand-3" value="Bike" />
          </li>
          <li>
            <label for="brand-4">Soccer</label>
            <input type="checkbox" id="brand-4" name="brand-4" value="Bike" />
          </li>
        </ul>
      </v-card>
    </v-expand-transition>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CatalogBrand extends Vue {
  isBrand = true;

  showBrand(): void {
    this.isBrand = !this.isBrand;
  }
}
</script>