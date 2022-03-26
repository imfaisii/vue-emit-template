<template>
  <!-- START cta -->
  <section class="section cta-2">
    <div class="bg-overlay"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="app-video-box text-center text-white">
            <h2 class="app-video-title text-uppercase">Watch Video</h2>
            <p class="app-video-desc f-16 mx-auto mt-4 pt-2">
              Always holds these matters principle of selection he rejects
              pleasures to secure other greater pleasures else pains.
            </p>

            <div class="mt-5 app-video-icon">
              <a
                class="modal-btn"
                href="javascript:void(0)"
                data-bs-toggle="modal"
                data-bs-target=".watchvideomodal"
              >
                <span class="avatar-sm">
                  <span class="rounded-circle btn-icon">
                    <i class="mdi mdi-play text-white"></i>
                  </span>
                </span>
              </a>
              <!-- Modal -->
              <div
                class="modal fade bd-example-modal-lg watchvideomodal"
                data-keyboard="false"
                tabindex="-1"
                aria-hidden="true"
              >
                <div
                  class="
                    modal-dialog modal-dialog-centered modal-dialog modal-lg
                  "
                >
                  <div class="modal-content home-modal p-1">
                    <div class="modal-header border-0">
                      <button
                        type="button"
                        class="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <video id="VisaChipCardVideo" class="video-box" controls="">
                      <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4"
                      />
                      <!--Browser does not support <video> tag -->
                    </video>
                  </div>
                </div>
              </div>
              <!-- end modal -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- END cta -->
</template>