<template>
  <div class="">
    <main class="profile-page custom">
      <section class="relative pb-16 bg-blueGray-200">
        <div class="container mx-auto">
          <div class="flex flex-wrap ">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-12/12"
            >
              <div class="px-6 mt-6">
                <div class="flex flex-wrap rounded-lg bg-blueGray-100">
                  <div class="w-full lg:w-3/12">
                    <div class="mr-4 text-center rounded-lg bg-emerald-500">
                      <h3
                        class="text-6xl font-semibold leading-normal text-white"
                      >
                        Profile
                      </h3>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12">
                    <h3 class="mt-1 text-2xl font-semibold ">
                      แก้ไขข้อมูลส่วนตัวผู้ใช้งาน
                    </h3>

                    <h3 class="text-xl font-normal ">
                      | Edit your profile
                    </h3>
                  </div>
                  <div class="w-full lg:w-3/12">
                    <div class="mt-4 text-right">
                      <a href="javascript:history.go(-1)">
                        <button
                          class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          ย้อนกลับ
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                  <div class="flex flex-wrap">
                    <!-- from input -->
                    <div class="w-full lg:w-6/12 pr-4">
                      <div class="px-2">
                        <div class="relative text-center">
                          <img
                            alt="..."
                            v-if="imgUrl"
                            :src="imgUrl"
                            class="mt-0 rounded-full shadow-lg h-200-px center-img max-w-200-px cropped bg-emerald-500"
                          />
                          <div class="text-left">
                            <label
                              class="block mt-4   my-3 text-gray-700 text-md"
                              for="image"
                              >อัพโหลดรูปโปรไฟล์</label
                            >

                            <input
                              ref="fileupload"
                              @change="onFileChange"
                              class="px-3 py-2 leading-tight text-gray-700 border rounded shadow w-full"
                              type="file"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Simulator  -->
                    <div class="w-full mt-2 lg:w-6/12">
                      <div class="border-l pr-2 pl-4">
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >รหัสนักศึกษา</label
                            >
                            <input
                              v-model="code"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Firstname"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ชื่อ (ภาษาไทย)</label
                            >
                            <input
                              v-model="first_name"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Firstname"
                              readonly
                            />
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3  text-gray-700 text-md"
                              for="Title"
                              >นามสกุล (ภาษาไทย)</label
                            >
                            <input
                              v-model="last_name"
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Lastname"
                              readonly
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ชื่อ (ภาษาอังกฤษ)</label
                            >
                            <input
                              v-model="first_nameEn"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Firstname (English)"
                              
                            />
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3  text-gray-700 text-md"
                              for="Title"
                              >นามสกุล (ภาษาอังกฤษ)</label
                            >
                            <input
                              v-model="last_nameEn"
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Lastname (English)"
                              
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >อีเมล</label
                            >
                            <input
                              v-model="email"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Email"
                              
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >มือถือ</label
                            >
                            <input
                              v-model="phone"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Phone"
                              
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ที่อยู่ (ปัจจุบัน)</label
                            >
                            <textarea
                              v-model="address"
                              cols="30"
                              placeholder="address"
                              rows="5"
                              class="relative w-full px-3 py-1 border rounded shadow text-base bg-white outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12  pr-4">
                      <div class="mt-4 p-4 text-center">
                        <button
                          @click="printCV"
                          class="px-6 py-3 mb-1  text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          ล้าง
                        </button>
                        <button
                          @click="printCV"
                          class="px-6 py-3 mb-1 mx-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          บันทึก
                        </button>
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
import imgUrl from "@/assets/img/upload_img.png";
export default {
  data() {
    return {
      imgUrl,
    };
  },
  methods: {},
  computed: {},
  components: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
};
</script>
