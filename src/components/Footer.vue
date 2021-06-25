<template>
  <footer class="footer">
    <div class="contact">
      <form action="#" class="contact--wrap">
        <h2>SUBCRIBE TO US NEWSLETTER</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vel ex
          quasi amet consequuntur consectetur ducimus sit, officiis pariatur
          esse maiores qui porro, odit recusandae. At expedita voluptates
          dolorum corrupti.
        </p>
        <div class="contact__input">
          <input type="text" placeholder="Enter your email" />
          <i class="fas fa-envelope"></i>
        </div>
      </form>
    </div>
    <div class="container footer-wrap">
      <v-row>
        <v-col cols="12" sm="7" md="4" lg="4">
          <div class="footer__item first">
            <img src="../assets/images/logo.png" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              illum id error facere eaque explicabo officiis itaque.
            </p>
            <ul>
              <li v-for="(link, index) in links[0]" :key="index">
                <router-link :to="link.path">{{ link.name }}</router-link>
              </li>
            </ul>
            <p>2013 - 2016</p>
          </div>
        </v-col>
        <v-col cols="12" sm="5" md="3" lg="2">
          <div class="footer__item second">
            <h3>Get Help</h3>
            <ul>
              <li v-for="(link, index) in links[1]" :key="index">
                <router-link :to="link.path">{{ link.name }}</router-link>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" sm="7" md="2" lg="2">
          <div class="footer__item third">
            <h3>About Us</h3>
            <ul>
              <li v-for="(link, index) in links[2]" :key="index">
                <router-link :to="link.path">{{ link.name }}</router-link>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" sm="5" md="3" lg="4">
          <div class="footer__item fourth">
            <ul>
              <li v-for="(link, index) in links[3]" :key="index">
                <router-link :to="link.path">
                  <i :class="link.name"></i>
                </router-link>
              </li>
            </ul>
            <img src="../assets/images/payment.png" alt="" />
          </div>
        </v-col>
      </v-row>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Footer extends Vue {
  links: object[] = [
    [
      { path: "/", name: "Guides" },
      { path: "/", name: "Terms of Use" },
      { path: "/", name: "Privacy Policy" },
    ],
    [
      { path: "/", name: "Order Status" },
      { path: "/", name: "Shipping and Delivery" },
      { path: "/", name: "Payment and Options" },
      { path: "/", name: "Conatct Us" },
    ],
    [
      { path: "/", name: "Carees" },
      { path: "/", name: "Sustainability" },
      { path: "/", name: "Service" },
      { path: "/", name: "CS Suply Chains Act" },
    ],
    [
      { path: "/", name: "fab fa-facebook-square" },
      { path: "/", name: "fab fa-twitter" },
      { path: "/", name: "fab fa-youtube" },
      { path: "/", name: "fab fa-instagram" },
      { path: "/", name: "fab fa-google-plus-g" },
    ],
  ];
}
</script>
<style lang="scss">
  @import "~@/assets/scss/footer/footer.scss";
</style>