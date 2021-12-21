<template>
  <div>
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://wwwdev.csmju.com/images/banner/thumbnail/Banner_1639385731.jpg');
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
        <div class="container mx-auto">
          <div class="flex flex-wrap ">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words rounded-lg shadow-xl bg-blueGray-800 lg:w-12/12"
            >
              <div class="px-6">
                <div class="flex flex-wrap text-center lg:text-left">
                  <div class="w-full px-6 lg:w-4/12 ">
                    <div class="relative text-center">
                      <img
                        alt="..."
                        :src="team2"
                        class="-mt-20 rounded-full shadow-lg h-200-px center-img max-w-200-px"
                      />
                    </div>
                    <div class="relative px-3 py-6 mt-2 text-center">
                      <button
                        class="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                        type="button"
                      >
                        แก้ไขโปรไฟล์
                      </button>
                    </div>
                  </div>
                  <div class="relative w-full lg:w-4/12 ">
                    <div class="flex py-4 pt-6">
                      <div class="py-3 text-center lg:text-left">
                        <h3
                          class="mb-2 text-4xl font-semibold leading-normal text-blueGray-100"
                        >
                          {{ this.local_name }} {{ this.local_surname }}
                        </h3>
                        <h3
                          class="mb-2 text-2xl font-semibold leading-normal text-blueGray-100"
                        >
                          Firstname Lastname
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="relative w-full px-6 lg:w-4/12 ">
                    <div class="flex justify-center py-4 pt-4">
                      <div
                        class="p-3 mt-4 text-left border-2 rounded-lg shadow-lg bg-blueGray-100 border-blueGray-300"
                      >
                        <h3
                          class="mb-2 text-xl font-semibold leading-normal text-blueGray-700 "
                        >
                          ข้อมูลการติดต่อ
                        </h3>
                        <div class="py-1 border-t border-blueGray-300"></div>
                        <p
                          class="mb-2 font-normal leading-normal text-md text-blueGray-700"
                        >
                          เบอร์โทร : {{ this.local_mobile }}
                        </p>
                        <p
                          class="mb-2 font-normal leading-normal text-md text-blueGray-700"
                        >
                          E-mail : {{ this.local_email }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-12/12"
            >
              <div class="px-6 mt-6">
                <div class="flex flex-wrap rounded-lg bg-blueGray-100">
                  <div class="w-auto px-4 rounded-lg bg-emerald-500">
                    <h3
                      class="text-6xl font-semibold leading-normal text-white"
                    >
                      CSMJU
                    </h3>
                  </div>
                  <div class="w-auto ml-3">
                    <h3 class="mt-1 text-2xl font-semibold ">
                      ระบบสารสนเทศสาขาวิชาวิทยาการคอมพิวเตอร์
                    </h3>

                    <h3 class="text-xl font-normal ">
                      | Management Information System
                    </h3>
                  </div>
                </div>

                <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                  <div class="flex flex-wrap">
                    <div class="w-full px-2 lg:w-3/12 ">
                      <div
                        class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                      >
                        <img
                          src="@/assets/img/logo.png"
                          class="w-full align-middle rounded-t-lg text-blueGray-500"
                        />

                        <div class="relative p-4 ">
                          <h4 class="text-xl font-bold text-left ">
                            ระบบแจ้งตกค้างรายวิชา
                          </h4>

                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <h4 class="mt-2 font-normal text-left text-md ">
                              รายละเอียด :
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
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
import team2 from "@/assets/img/no-img.png";

export default {
  data() {
    return {
      team2,
      local_user: [],
      local_name: "",
      local_surname: "",
      local_card_id: "",
      local_email: "",
      local_mobile: "",
    };
  },
  method: {},
  mounted() {
    this.local_user = JSON.parse(window.localStorage.getItem("user"));
    // console.log(this.local_user);
    //-------------Save Profiling---------------

    this.local_name = this.local_user.name;
    this.local_surname = this.local_user.surname;
    this.local_card_id = this.local_user.card_id;
    this.local_email = this.local_user.email;
    this.local_mobile = this.local_user.mobile;
    // console.log(this.local_name);
  },
};
</script>
