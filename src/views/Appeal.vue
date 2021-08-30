<template>
  <div>
    <navbar />
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');
          "
        >
          <span
            id="blackOverlay"
            class="absolute w-full h-full bg-black opacity-50"
          ></span>
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="fill-current text-blueGray-200"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>

      <section class="relative py-16 bg-blueGray-200">
        <div class="container px-4 mx-auto">
          <div
            class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
          >
            <div class="px-6">
              <div class="mt-6 text-center">
                <h3
                  class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  ร้องเรียน
                </h3>
              </div>

              <div class="py-6 mt-2 border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-9/12">
                    <div class="pt-0 mb-3">
                      <p>หัวข้อเรื่อง</p>
                      <input
                        name="topic"
                        type="text"
                        placeholder="หัวข้อเรื่อง"
                        class="relative w-full px-2 py-1 text-sm bg-white border rounded outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div class="pt-10 mb-3 ">
                      <p>รายละเอียด</p>
                      <textarea
                        name="detail"
                        cols="30"
                        placeholder="เนื้อหา / รายละเอียด"
                        rows="10"
                        class="relative w-full px-3 py-1 text-base bg-white border rounded outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                      ></textarea>
                    </div>

                    <div class="pt-10 mb-3 text-center">
                      <vue-recaptcha
                        v-if="showRecaptcha"
                        siteKey="..."
                        size="normal"
                        theme="light"
                        :tabindex="0"
                        @verify="recaptchaVerified"
                        @expire="recaptchaExpired"
                        @fail="recaptchaFailed"
                        ref="vueRecaptcha"
                      >
                      </vue-recaptcha>
                    </div>

                    <div class="pt-10 mb-3 text-center">
                     <button class="px-6 py-3 mb-1 mr-1 text-sm text-white uppercase transition-all duration-150 ease-linear bg-teal-500 rounded-full shadow outline-none active:bg-teal-600 hover:shadow-lg focus:outline-none" type="button">
  ยืนยันส่งข้อความ
</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <main-footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import MainFooter from "@/components/Footers/MainFooter.vue";
import vueRecaptcha from "vue3-recaptcha2";

export default {
  data() {
    return {
      topic: "",
      detail: "",
      showRecaptcha: true,
    };
  },
  components: {
    Navbar,
    MainFooter,
    vueRecaptcha,
  },
  methods: {
    recaptchaVerified() {},
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {},
  },
};
</script>
