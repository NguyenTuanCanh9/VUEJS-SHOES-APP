
<template>
  <v-row no-gutters class="detail-review__wrap">
    <v-btn class="mx-2 detail-review__wrap--btn" fab dark color="indigo">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <v-tabs light height="70">
      <v-tab class="font-weight-bold royalblue--text text"
        >REVIEWS
      </v-tab>
      <v-tab
        class="font-weight-bold royalblue--text text"
      
      >
        SPECIFICATION</v-tab
      >
      <v-tab class="font-weight-bold royalblue--text text"
        >DESCRIPTION
      </v-tab>
      <v-tab-item>
        <div class="detail-review">
          <v-row no-gutters class="detail-review__main">
            <v-col cols="12" sm="12" md="9" ld="9">
              <h3>
                All Reviews <span>{{ reviews.length }}</span>
              </h3>
              <div
                class="detail-review__left"
                v-for="(item, index) in panahation"
                :key="index"
              >
                <v-row no-gutters>
                  <v-col cols="12" sm="4" md="3" ld="3">
                    <div class="detail-review__user">
                      <img
                        src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                        alt=""
                      />
                      <div class="detail-review__user--item">
                        <h3>{{ item.name }}</h3>
                        <v-rating
                          :value="item.rating"
                          background-color="review lighten-3"
                          color="review"
                          size="18"
                          readonly
                          dense
                        >
                        </v-rating>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="8" md="9" ld="9">
                    <div class="detail-review__comment">
                      <p>
                        {{ item.content }}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam maxime eum reprehenderit, quia magnam expedita,
                        quo ea at placeat voluptates?
                      </p>
                      <div class="detail-review__comment--likes">
                        <div class="detail-review__comment--likes--item">
                          <i class="fas fa-thumbs-up"></i>
                          <span class="likes">{{ item.like }}</span>
                        </div>
                        <div class="detail-review__comment--likes--item">
                          <i class="fas fa-thumbs-down"></i>
                          <span class="dislikes">{{ item.dislike }}</span>
                        </div>
                        <div class="detail-review__comment--likes--item">
                          <span class="dislikes">2{{ item.time }}</span>
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div class="detail-review__load">
                <v-btn depressed x-large rounded @click="loadMore">
                  <i class="fas fa-arrow-circle-down"></i>
                  Load More
                </v-btn>
                <ul>
                  <li
                    @click="setPage(n)"
                    v-for="n in Math.ceil(reviews.length / 5)"
                    :key="n"
                  >
                    <router-link to="" :class="{ active: n === page }">{{
                      n
                    }}</router-link>
                  </li>
                </ul>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="3" ld="3">
              <h3 class="pl">Aseetment Reviews</h3>
              <div class="detail-review__rating">
                <v-rating
                  :value="5"
                  background-color="review lighten-3"
                  color="review"
                  size="18"
                  dense
                >
                </v-rating>
                <span>68%</span>
                <span class="left">83 Reviews</span>
              </div>
              <div class="detail-review__rating">
                <v-rating
                  :value="4"
                  readonly
                  background-color="review lighten-3"
                  color="review"
                  size="18"
                  dense
                >
                </v-rating>
                <span>68%</span>
                <span class="left">83 Reviews</span>
              </div>
              <div class="detail-review__rating">
                <v-rating
                  :value="3"
                  readonly
                  background-color="review lighten-3"
                  color="review"
                  size="18"
                  dense
                >
                </v-rating>
                <span>68%</span>
                <span class="left">83 Reviews</span>
              </div>
              <div class="detail-review__rating">
                <v-rating
                  :value="2"
                  readonly
                  background-color="review lighten-3"
                  color="review"
                  size="18"
                  dense
                >
                </v-rating>
                <span>68%</span>
                <span class="left">83 Reviews</span>
              </div>
              <div class="detail-review__rating">
                <v-rating
                  :value="1"
                  readonly
                  background-color="review lighten-3"
                  color="review"
                  size="18"
                  dense
                >
                </v-rating>
                <span>68%</span>
                <span class="left">83 Reviews</span>
              </div>
              <div class="detail-review__rating">
                <v-btn x-large rounded color="review_2">Add Reviews</v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-tab-item>
    </v-tabs>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Review extends Vue {
  @Prop({ required: false, type: Array, default: () => {} })
  readonly reviews!: Object[];
  page: number = 1;

  get panahation(): Object[] {
    let indexStart: number = (this.page - 1) * 5;
    let indexEnd: number = (this.page - 1) * 5 + 5;
    return this.reviews.slice(indexStart, indexEnd);
  }

  setPage(page: number): void {
    this.page = page;
  }

  loadMore() {
    if (this.page === Math.ceil(this.reviews.length / 5)) {
      this.page = 1;
    } else {
      this.page = this.page + 1;
    }
  }
}
</script>