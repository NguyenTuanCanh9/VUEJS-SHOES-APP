<template>
  <div class="filter__sidebar--category">
    <div class="filter__sidebar--title--item" @click="showCategory">
      <i
        class="fas fa-angle-right filter__sidebar--title--item--icon"
        :class="{ 'category-rotage': isCategory }"
      ></i>
      <h3>CATEGARIES</h3>
      <i
        class="fas fa-times filter__sidebar--title--item--icon"
        v-show="isCategory"
      ></i>
    </div>
    <v-expand-transition>
      <v-card v-show="isCategory" elevation="0">
        <ul class="filter__sidebar--category--mid">
          <li
            v-for="(category, index) in categories"
            :key="index"
            @click="setItem(category.id)"
          >
            <router-link
              :to="`/catalog/${category.id}`"
              class="filter__sidebar--category--mid--item"
            >
              <h3
                class="filter__sidebar--category--mid--item--left"
                :class="{ active: categoryId === category.id }"
              >
                {{ category.name }}
              </h3>
              <h3 class="filter__sidebar--category--mid--item--right">
                {{ category.products_count }}
              </h3>
            </router-link>
          </li>
        </ul>
      </v-card>
    </v-expand-transition>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class Categories extends Vue {
  @Prop({ required: true }) readonly categories!: [];
  @Prop({ required: true, type: Number })
  readonly categoryId!: Number;
  isCategory = true;
  showCategory(): void {
    this.isCategory = !this.isCategory;
  }
  @Emit("setItem")
  _setItem(number: number) {
    return number;
  }
  setItem(number: number): void {
    this._setItem(number);
  }
}
</script>