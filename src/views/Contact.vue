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
                  ติดต่อเรา
                </h3>
              </div>

              <div class="py-5 mt-10 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap ">
                  <div class="w-full px-4 mb-4 lg:w-3/12">
                    <div
                      class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-full shadow-lg bg-emerald-400"
                    >
                      <i class="fas fa-phone-alt fa-2x"></i>
                    </div>

                    <p class="text-lg text-blueGray-500">
                      สามารถติดต่อได้ที่เบอร์ :
                    </p>
                    <h3
                      class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
                    >
                      <a href="tel:+6653873890-3">(+66) 053 873890-3</a>
                    </h3>

                    <p class="mb-4 text-xs text-red-500">
                      *หมายเหตุ : กรุณาติดต่อภายในวัน และเวลาราชการ
                    </p>
                  </div>
                  <div class="w-full px-4 mb-4 lg:w-3/12">
                    <div
                      class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-full shadow-lg bg-emerald-400"
                    >
                      <i class="fas fa-envelope fa-2x"></i>
                    </div>
                    <p class="text-lg text-blueGray-500">
                      ติดต่อทางอีเมลของเรา :
                    </p>
                    <h3
                      class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
                    >
                      <a href="mailto:csmju@gmail.com">csmju@gmail.com </a>
                    </h3>
                  </div>
                </div>
                <div class="flex flex-wrap ">
                  <div class="w-full px-4 mb-4 lg:w-3/12">
                    <div
                      class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-full shadow-lg bg-emerald-400"
                    >
                      <i class="fas fa-phone-alt fa-2x"></i>
                    </div>

                    <p class="text-lg text-blueGray-500">
                      ติดต่อทาง Facebook :
                    </p>
                    <h3
                      class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
                    >
                      <a href="https://www.facebook.com/computersciencemju"
                        >วิทยาการคอมพิวเตอร์ ม.แม่โจ้</a
                      >
                    </h3>
                  </div>
                  <div class="w-full px-4 mb-4 lg:w-3/12">
                    <div
                      class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-full shadow-lg bg-emerald-400"
                    >
                      <i class="fas fa-envelope fa-2x"></i>
                    </div>
                    <p class="text-lg text-blueGray-500">
                      ติดต่อทาง Line Offical :
                    </p>
                    <h3
                      class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
                    >
                      <a href="https://line.me/R/ti/p/%40053vfccm">CSMJU </a>
                    </h3>
                  </div>
                </div>

                <div class="flex flex-wrap ">
                  <div class="w-full px-0 mb-4 lg:w-6/12">
                    <div
                      class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-full shadow-lg bg-emerald-400"
                    >
                      <i class="fas fa-map fa-2x"></i>
                    </div>

                    <p class="text-lg text-blueGray-500">
                      ที่ตั้ง / อาคารธุรการ
                    </p>

                    <h3
                      class="mb-4 text-xl font-semibold leading-normal text-blueGray-700"
                    >
                      <a href="https://g.page/CSMJU?share"
                        >อาคาร 60 ปี ชั้น 6 คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                        <br />
                        63 หมู่ 4 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290</a
                      >
                    </h3>

                    <div
                      class="relative w-full max-w-full pb-64 overflow-hidden"
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.8002840419385!2d99.010800714766!3d18.8959391871915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da234aca979f93%3A0xb01d3d9375066a7a!2z4Liq4Liy4LiC4Liy4Lin4Li04LiK4Liy4Lin4Li04LiX4Lii4Liy4LiB4Liy4Lij4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmMIOC4oS7guYHguKHguYjguYLguIjguYk!5e0!3m2!1sen!2sth!4v1630916459077!5m2!1sen!2sth"
                        class="absolute w-full h-full"
                        loading="lazy"
                      ></iframe>
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

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    MainFooter,
  },
};
</script>
