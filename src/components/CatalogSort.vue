<template>
  <section class="filter__product--header">
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="4" lg="4">
        <div class="filter__product--header--item first">
          <h3>SHORT BY:</h3>
          <v-select full-width :items="shortItems" label="Standard"></v-select>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <div class="filter__product--header--item">
          <h3>SHORT BY:</h3>
          <v-select full-width :items="shortItems" label="Standard"></v-select>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4">
        <div class="filter__product--header--last">
          <div class="filter__product--header--last--icon b-r">
            <i class="fas fa-compass active"></i>
          </div>
          <div class="filter__product--header--last--icon b-r">
            <i class="fas fa-compass"></i>
          </div>
          <div class="filter__product--header--last--icon">
            <h3>COMPARE:</h3>
            <div>3</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CatalogSort extends Vue {
  @Prop({ required: true }) readonly shortItems!: Object[];
}
</script>