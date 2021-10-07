<template>
  <div>
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
              <div class="flex flex-wrap justify-center">
                <div
                  class="flex justify-center w-full px-4 lg:w-3/12 lg:order-2"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      :src="team2"
                      class="absolute h-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div
                  class="w-full px-4 lg:w-4/12 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="px-3 py-6 mt-32 sm:mt-0">
                    <button
                      class="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none sm:mr-2"
                      type="button"
                    >
                      edit your profile
                    </button>
                  </div>
                </div>
                <div class="w-full px-4 lg:w-4/12 lg:order-1">
                  <div class="flex justify-center py-4 pt-8 lg:pt-4">
                    <div class="p-3 mr-4 text-center">
                      <span
                        class="block text-xl font-bold tracking-wide uppercase text-blueGray-600"
                      >
                        22
                      </span>
                      <span class="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div class="p-3 mr-4 text-center">
                      <span
                        class="block text-xl font-bold tracking-wide uppercase text-blueGray-600"
                      >
                        10
                      </span>
                      <span class="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div class="p-3 text-center lg:mr-4">
                      <span
                        class="block text-xl font-bold tracking-wide uppercase text-blueGray-600"
                      >
                        89
                      </span>
                      <span class="text-sm text-blueGray-400">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-0 text-center">
                <h3
                  class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  Jenna Stones
                </h3>
                <div
                  class="mt-0 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400"
                >
                  <i
                    class="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400"
                  ></i>
                  Bio
                </div>
                <div class="mt-6 mb-2 text-blueGray-600">
                  <i
                    class="mr-2 text-lg fas fa-briefcase text-blueGray-400"
                  ></i>
                  Solution Manager - Creative Tim Officer
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i
                    class="mr-2 text-lg fas fa-university text-blueGray-400"
                  ></i>
                  University of Computer Science
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container px-4 mx-auto">
          <div
            class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl"
          >
            <div class="px-6">
              <div class="mt-6 text-center">
                <h3
                  class="mx-4 mb-2 text-2xl font-semibold leading-normal text-left text-blueGray-700"
                >
                  CSMJU | ระบบสารสนเทศสำหรับบุคคลากร 
                </h3>
              </div>

              <div class="w-full px-4 mt-10 lg:w-12/12">
                <div class="flex flex-wrap">
                  <div class="w-full px-4 lg:w-4/12">
                    <router-link to="/auth/login">
                      <div
                        class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
                      >
                        <img
                          src="@/assets/img/login.jpg"
                          class="h-auto max-w-full align-middle border-none rounded-lg"
                        />
                      </div>
                    </router-link>
                    <h5 class="pb-4 text-xl font-semibold text-center">
                      ระบบ...
                    </h5>
                  </div>

                  <div class="w-full px-4 lg:w-4/12">
                    <h5 class="pb-4 text-xl font-semibold text-center">
                      ระบบ...
                    </h5>
                    <router-link to="/profile">
                      <div
                        class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
                      >
                        <img
                          src="@/assets/img/login.jpg"
                          class="h-auto max-w-full align-middle border-none rounded-lg"
                        />
                      </div>
                    </router-link>
                  </div>

                  <div class="w-full px-4 lg:w-4/12">
                    <h5 class="pb-4 text-xl font-semibold text-center">
                      ระบบ...
                    </h5>
                    <router-link to="/landing">
                      <div
                        class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
                      >
                        <img
                          src="@/assets/img/login.jpg"
                          class="h-auto max-w-full align-middle border-none rounded-lg"
                        />
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import team2 from "@/assets/img/team-2-800x800.jpg";
import http from "@/services/AuthService"
export default {
  data() {
    return {
      team2,
      personnels:[]
    };
  },
  components: {
    
  },
  mounted() {
    http.get("personnel")
    .then(response => {
            let responseProduct = response.data
            this.products = responseProduct
            console.log(responseProduct)
        })
  },
};
</script>
