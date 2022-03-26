<template>
  <!-- START ABOUT -->
  <section class="app-about section pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="mt-4">
            <div class="app-about-icon">
              <i class="pe-7s-shield"></i>
            </div>
            <h4 class="f-15 text-uppercase letter-spacing_2 mt-4">
              Highly Secured
            </h4>
            <p class="text-muted mt-4 mb-0">
              But right to find fault with man who chooses enjoy a pleasure that
              has otrffda annoying conuences one who pleasure.
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="app-about-box mt-4">
            <div class="app-about-icon">
              <i class="pe-7s-server"></i>
            </div>
            <h4 class="f-15 text-uppercase letter-spacing_2 mt-4">
              Easily Managable
            </h4>
            <p class="text-muted mt-4 mb-0">
              Fault with a man who chooses pleasure that has no annoying
              consequences or one who avoids pain produces pleasure.
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="app-about-box mt-4">
            <div class="app-about-icon">
              <i class="pe-7s-graph3"></i>
            </div>
            <h4 class="f-15 text-uppercase letter-spacing_4 mt-4">
              Well Documented
            </h4>
            <p class="text-muted mt-4 mb-0">
              Chooses enjoy a pleasure that has annoying consequences or one who
              avoids pain that produces pleasure.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END ABOUT -->
</template>
<script>
export default {
  setup() {},
  created() {
    this.emitter.on("my-event", (evt) => {
      console.log("event received was : " + JSON.stringify(evt));
      console.log("event received successfully... ");
    });
  },
};
</script>

