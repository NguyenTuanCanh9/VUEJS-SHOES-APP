<template>
  <div class="filter__sidebar--price" :class="{ active: isPrice }">
    <div class="filter__sidebar--title--item" @click="showPrice">
      <i
        class="fas fa-angle-right filter__sidebar--title--item--icon"
        :class="{ 'price-rotage': isPrice }"
      ></i>
      <h3>PRICE</h3>
      <i
        class="fas fa-times filter__sidebar--title--item--icon"
        v-show="isPrice"
      ></i>
    </div>
    <v-expand-transition>
      <v-card v-show="isPrice" elevation="0">
        <div class="filter__sidebar--price--mid" :class="{ active: isPrice }">
          <v-row>
            <v-col cols="6">
              <v-text-field height="30" label="50" solo rounded></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="$160" solo rounded> </v-text-field>
            </v-col>
          </v-row>
          <v-range-slider
            max="50"
            min="-50"
            color="ts"
            track-color="track"
            dense
          >
          </v-range-slider>
        </div>
      </v-card>
    </v-expand-transition>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CatalogPrice extends Vue {
  isPrice = true;
  showPrice(): void {
    this.isPrice = !this.isPrice;
  }
}
</script>