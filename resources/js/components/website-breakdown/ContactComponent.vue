<template>
  <!-- START CONTECT -->
  <section class="section" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="home-title text-center">
            <h2 class="heading-title-title letter-spacing_4 text-uppercase">
              Contact Us
            </h2>
            <p class="heading-title-desc text-muted mt-4">
              Pellentesque habitant morbi tristique senectus malesuada fames
              turpis egestas duis dignissim finibus commodo nibh malesuada
              sollis diam.
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-5 pt-3 align-items-center">
        <div class="col-lg-4">
          <div class="photographer-agency-contact-icon mt-4">
            <p class="text-muted mt-4">
              Sapiente delectus reiciendis voluptatibus maiores alias
              consequatur they aut perferendis doloribus asperiores repellat.
            </p>
            <div class="mt-4 pt-2">
              <p class="f-15 mt-4 text-muted">
                <i class="pe-7s-map-marker photographer-contact-icon me-3"></i>
                Juniper Drive Southfield, 48075
              </p>
              <p class="f-15 mt-4 text-muted">
                <i class="pe-7s-call photographer-contact-icon me-3"></i
                >(+989-849-0882)
              </p>
              <p class="f-15 mt-4 text-muted">
                <i class="pe-7s-mail photographer-contact-icon me-3"></i>
                LorettaCNunnally@rhyta.com
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="custom-form">
            <div id="message"></div>
            <form
              method="post"
              onsubmit="return validateForm()"
              class="contact-form"
              name="myForm"
              id="myForm"
            >
              <div id="error-msg"></div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group my-3">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group my-3">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group my-3">
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Subject"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group my-3">
                    <textarea
                      name="comments"
                      id="comments"
                      rows="5"
                      class="form-control"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="mt-3">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      class="submitBnt btn btn-dark-custom w-100"
                      value="Send Message"
                    />
                    <div id="simple-msg"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END CONTACT -->
</template>