<template>
  <v-row no-gutters class="selection--swap">
    <div class="selection__item">
      <h3 class="selection__title">LIFESTYLE</h3>
      <h2>Lebron XIII Premium AS iD</h2>
      <div class="selection__rating">
        <v-rating
          :value="5"
          background-color="review lighten-3"
          color="review"
          size="18"
          readonly
          dense
        >
        </v-rating>
        <span class="selection__rating--review"
          >13 Reviews</span
        >
      </div>
      <v-row no-gutters class="selection__style--wrap">
        <div class="selection__style">
          <h3>Corlor</h3>
          <ul class="selection__style--color">
            <li
              v-for="(_color, index) in detailProduct.colors"
              :key="index"
              @click="setColor(_color.color_name)"
            >
              <v-btn depressed :color="_color.color_name" fab x-small dark>
                <i
                  class="fas fa-check"
                  v-show="_color.color_name === color"
                ></i>
              </v-btn>
            </li>
          </ul>
          <h4
            v-show="isAddToCart & (color === '')"
            class="selection__style--color--err"
          >
            Please choose color.
          </h4>
        </div>
        <div class="selection__style">
          <h3>Size</h3>
          <ul class="selection__style--size">
            <li
              v-for="(_size, index) in detailProduct.sizes"
              :key="index"
              @click="setSize(_size.size_name)"
              :class="{ active: _size.size_name === size }"
            >
              {{ _size.size_name }}
            </li>
          </ul>
          <h4
            v-show="isAddToCart & (size === 0)"
            class="selection__style--size--err"
          >
            Please choose size.
          </h4>
        </div>
      </v-row>
      <div class="selection__buy--wrap">
        <div class="selection__buy">
          <h3>${{ detailProduct.price }}.00</h3>
          <h4>{{ detailProduct.price + 50 }}.00</h4>
          <div class="selection__buy--sale">-10%</div>
          <div class="selection__buy--number">
            <div class="selection__buy--number--item" @click="setQuantity(-1)">
              <i class="fas fa-minus"></i>
            </div>
            <div class="selection__buy--number--item">{{ quantity }}</div>
            <div class="selection__buy--number--item" @click="setQuantity(1)">
              <i class="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <v-btn rounded color="ts" large @click="addToCart">
          <i class="fas fa-cart-arrow-down"></i>
          Buy
        </v-btn>
      </div>
      <div class="selection__tym">
        <div class="selection__tym--item">
          <i class="far fa-clone"></i>
          Compare
        </div>
        <div class="selection__tym--item">
          <i class="far fa-heart"></i>
          Add To wish List
        </div>
      </div>
    </div>
    <div class="selection--item">
      <div class="selection__img">
        <v-carousel v-model="indexSrc" :show-arrows="false">
          <v-carousel-item
            v-for="(image, i) in detailProduct.images"
            :key="i"
            width="100%"
            height="500"
          >
            <img class="large" :src="detailProduct.images[indexSrc].url" alt="" />
          </v-carousel-item>
        </v-carousel>
        <ul class="selection__img--list">
          <li
            v-for="(image, index) in detailProduct.images"
            :key="index"
            @click="setSrc(index)"
            class="selection__img--list--item"
            :class="{ active: index === indexSrc }"
          >
            <img :src="image.url" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { typeBuy, typeProduct } from "../shared/interface/index";

@Component
export default class AddToCart extends Vue {
  @Prop({ required: true, type: Object, default: () => {} })
  readonly detailProduct!: () => typeProduct;
  color: string = "";
  size: number = 0;
  quantity: number = 1;
  indexSrc: number = 0;
  isAddToCart: Boolean = false;

  @Emit("midAddToCart")
  midAddToCart(quantity: number,price:number , id:number): typeBuy {
    return {
      quantity: quantity,
      price : price,
      id : id
    };
  }

  setColor(color: string): void {
    this.color = color;
  }
  setSize(size: number): void {
    this.size = size;
  }
  setQuantity(number: number): void {
    this.quantity = this.quantity + number;
    if (this.quantity === 0) this.quantity = 1;
  }
  setSrc(index: number): void {
    this.indexSrc = index;
  }
  addToCart(): void {
    this.isAddToCart = true;
    if (this.color !== "" && this.size) {
      this.midAddToCart(this.quantity,(this.detailProduct as any).price, (this.detailProduct as any).id);
    }
  }
}
</script>