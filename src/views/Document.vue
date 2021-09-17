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
                  แบบฟอร์มเอกสาร
                </h3>
              </div>

              <div class="py-5 mt-10 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center"></div>
                <div class="block w-full mb-4 overflow-x-auto ">
                  <table
                    class="items-center w-full bg-transparent border-collapse"
                  >
                    <thead>
                      <tr>
                        <th
                          class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                          :class="[
                            color === 'light'
                              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                              : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                          ]"
                        >
                          ลำดับ
                        </th>
                        <th
                          class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                          :class="[
                            color === 'light'
                              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                              : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                          ]"
                        >
                          แบบฟอร์มเอกสาร
                        </th>
                        <th
                          class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap"
                          :class="[
                            color === 'light'
                              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                              : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                          ]"
                        >
                          ตัวอย่างการกรอกข้อมูล
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                       
                      >
                        <th
                          class="flex items-center p-4 px-6 text-sm text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          1
                        </th>
                        <td
                          class="p-4 px-6 text-sm text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap hover:text-emerald-600"
                        >
                          <a href="http://">ใบลาสำหรับนักศึกษา</a>
                        </td>
                        <td
                          class="p-4 px-6 text-sm text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap hover:text-emerald-600"
                        >
                          <a href="http://">ตัวอย่าง</a>
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>
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
