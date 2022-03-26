<template>
  <NavBarComponent />

  <AppHomeComponent />

  <AboutComponent />

  <hr />
  <div style="border: 1px solid black">
    <h1>Second Component</h1>
    <button v-on:click="emitTest">Emit Event</button>
  </div>

  <FeaturesComponent />

  <CounterComponent />

  <ScreenShotsComponent />

  <hr />

  <TestimonialComponent />

  <CtaComponent />

  <TeamComponent />

  <hr />

  <PricingComponent />

  <BlogComponent />

  <hr />

  <ContactComponent />

  <FooterComponent />
</template>

<script>
import AboutComponent from "./website-breakdown/AboutComponent.vue";
import AppDownloadComponent from "./website-breakdown/AppDownloadComponent.vue";
import AppHomeComponent from "./website-breakdown/AppHomeComponent.vue";
import BlogComponent from "./website-breakdown/BlogComponent.vue";
import ContactComponent from "./website-breakdown/ContactComponent.vue";
import CounterComponent from "./website-breakdown/CounterComponent.vue";
import CtaComponent from "./website-breakdown/CtaComponent.vue";
import FeaturesComponent from "./website-breakdown/FeaturesComponent.vue";
import FooterComponent from "./website-breakdown/FooterComponent.vue";
import NavBarComponent from "./website-breakdown/NavBarComponent.vue";
import PricingComponent from "./website-breakdown/PricingComponent.vue";
import ScreenShotsComponent from "./website-breakdown/ScreenShotsComponent.vue";
import TeamComponent from "./website-breakdown/TeamComponent.vue";
import TestimonialComponent from "./website-breakdown/TestimonialComponent.vue";

export default {
  components: {
    AboutComponent,
    AppDownloadComponent,
    AppHomeComponent,
    BlogComponent,
    ContactComponent,
    CounterComponent,
    CtaComponent,
    FeaturesComponent,
    FooterComponent,
    NavBarComponent,
    PricingComponent,
    ScreenShotsComponent,
    TeamComponent,
    TestimonialComponent,
  },

  methods: {
    emitTest() {
      console.log("emitting now...");
      this.emitter.emit("my-event", { eventContent: "String changed" });
    },
  },

  setup() {},
};
</script>