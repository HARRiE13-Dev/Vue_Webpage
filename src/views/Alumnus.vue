<template>
  <div>
    <navbar />
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://3l4jojspj4-flywheel.netdna-ssl.com/wp-content/uploads/iStock-655597202-1.jpg');
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
                  ศิษย์เก่า
                </h3>
              </div>

              <div class="py-6 mt-2 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-9/12">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      ข่าวสาร ประกาศ และประชาสัมพันธ์ต่าง ๆ ที่เกี่ยวกับนักศึกษา
                      บุคคลากร คณาจารย์สาขาวิชาวิทยาการคอมพิวเตอร์
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap">
                <div
                  v-for="alum in products"
                  :key="alum.AlumniId"
                  class="w-full p-2 duration-150 ease-linear shadow-lg lg:w-3/12 hover:zoom"
                >
                  <div
                    class="relative flex flex-col w-full min-w-0 break-words rounded-sm shadow-lg bg-emerald-500"
                  >
                    <img
                      alt="..."
                      :src="alum.Alumni_Picture"
                      class="w-full align-middle rounded-sm"
                    />
                    <blockquote class="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        class="absolute left-0 block w-full h-95-px -top-94-px"
                      ></svg>
                      <h4 class="text-xl font-bold text-white">
                        {{ alum.Firstname_Alumni }} {{ alum.Lastname_Alumni }}
                      </h4>
                      <p class="mt-2 font-light text-white text-md">
                        {{ alum.News_Detail }}
                      </p>
                    </blockquote>
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
import http from "@/services/APIService";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getAlumnus();
  },
  methods: {
    getAlumnus() {
      http
        .get(`alumni`)
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status == 500) {
              //Call Sweet Alert
              const Toast = this.$swal.mixin({
                position: "center",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: "error",
                title: "Connection Error",
              });
            }
          }
        });
    },
  },
  components: {
    Navbar,
    MainFooter,
  },
};
</script>
