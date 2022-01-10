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
                        MIS
                      </h3>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12">
                    <h3 class="mt-1 text-2xl font-semibold ">
                      ประวัติโดยย่อ
                    </h3>

                    <h3 class="text-xl font-normal ">
                      | Curiculum Vitae
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
                    <div class="w-full lg:w-6/12 pr-4">
                      <form ref="addProductForm">
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-8/12">
                            <div class="mt-0">
                              <img v-if="imgUrl" :src="imgUrl" class="w-full" />
                            </div>

                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="image"
                              >อัพโหลดรูปโปรไฟล์</label
                            >
                            <input
                              ref="fileupload"
                              @change="onFileChange"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="file"
                            />
                          </div>
                          <div class="w-full px-2 md:w-4/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >คำนำหน้าชื่อ</label
                            >
                            <input
                              v-model="Title"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Product name"
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ชื่อ</label
                            >
                            <input
                              v-model="Title"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Product name"
                            />
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >นามสกุล</label
                            >
                            <input
                              v-model="Title"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Product name"
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 mb-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ที่อยู่ / สถานที่ติดต่อ</label
                            >
                            <input
                              v-model="Title"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Product name"
                            />
                          </div>
                          <div class="w-full px-2 mb-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >โทรศัพท์</label
                            >
                            <input
                              v-model="Title"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Product name"
                            />
                          </div>
                          <div class="w-full px-2 mb-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >อีเมล</label
                            >
                            <input
                              v-model="Title"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Product name"
                            />
                          </div>
                          <div class="w-full px-2 mb-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >โซเชียล</label
                            >
                            <input
                              v-model="Title"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Product name"
                            />
                          </div>
                        </div>

                        <div class="py-6 text-center">
                          <button
                            class="px-6 py-3 mb-1 mr-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            ล้าง
                          </button>
                          <button
                            class="px-6 py-3 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            นำไปใช้
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="w-full lg:w-6/12 ">
                      <div class="p-4 bg-emerald-300 rounded-lg">
                        <div
                          class="bg-white border border-blueGray-300 shadow-lg "
                        >
                          <div class="bg-blueGray-100 px-4 pt-4 pb-4">
                            <div class=" flex flex-warp">
                              <div class="ml-3 px-12 w-full lg:w-3/12 ">
                                <img
                                  alt="..."
                                  :src="image"
                                  class="mt-2 rounded-full shadow-lg h-100-px center-img bg-emerald-500"
                                />
                              </div>
                              <div class="ml-3 px-12 w-full lg:w-6/12 ">
                                <h1
                                  class="mt-4 font-normal text-4xl text-blueGray-800"
                                >
                                  สุรชาติ
                                </h1>
                                <h1
                                  class="mt-2 font-semibold text-2xl text-blueGray-800"
                                >
                                  คงกำเหนิด
                                </h1>
                              </div>
                              <div
                                class="text-right mt-4 mr-4 w-full lg:w-3/12 "
                              >
                                <div class="text-sm text-blueGray-400">
                                  <span>address </span>
                                  <i class="fas fa-home text-emerald-500"></i>
                                </div>
                                <div class="text-sm text-blueGray-400">
                                  <span>address </span>
                                  <i
                                    class="fas fa-phone-alt text-emerald-500"
                                  ></i>
                                </div>
                                <div class="text-sm text-blueGray-400">
                                  <span>address </span>
                                  <i
                                    class="fas fa-envelope text-emerald-500"
                                  ></i>
                                </div>
                                <div class="text-sm text-blueGray-400">
                                  <span>address </span>
                                  <i class="fas fa-globe text-emerald-500"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="bg-white px-4 pt-4 pb-6">
                            <div class=" flex flex-warp">
                              <div class="ml-3 px-4 w-full lg:w-12/12 ">
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-user-circle text-emerald-500"
                                    ></i>
                                    ประวัติโดยย่อ
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <p
                                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum consequuntur iste
                                    obcaecati error quisquam, cupiditate
                                    provident magni sed voluptatem dolore
                                    facere? Quod obcaecati maxime ducimus, quo
                                    suscipit deleniti atque exercitationem.
                                  </p>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-user-circle text-emerald-500"
                                    ></i>
                                    การศึกษา
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <p
                                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum consequuntur iste
                                    obcaecati error quisquam, cupiditate
                                    provident magni sed voluptatem dolore
                                    facere? Quod obcaecati maxime ducimus, quo
                                    suscipit deleniti atque exercitationem.
                                  </p>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-user-circle text-emerald-500"
                                    ></i>
                                    ประสบการณ์การทำงาน
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <p
                                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum consequuntur iste
                                    obcaecati error quisquam, cupiditate
                                    provident magni sed voluptatem dolore
                                    facere? Quod obcaecati maxime ducimus, quo
                                    suscipit deleniti atque exercitationem.
                                  </p>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-user-circle text-emerald-500"
                                    ></i>
                                    ทักษะ
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <p
                                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum consequuntur iste
                                    obcaecati error quisquam, cupiditate
                                    provident magni sed voluptatem dolore
                                    facere? Quod obcaecati maxime ducimus, quo
                                    suscipit deleniti atque exercitationem.
                                  </p>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-user-circle text-emerald-500"
                                    ></i>
                                    ผลงาน
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <p
                                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                  >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum consequuntur iste
                                    obcaecati error quisquam, cupiditate
                                    provident magni sed voluptatem dolore
                                    facere? Quod obcaecati maxime ducimus, quo
                                    suscipit deleniti atque exercitationem.
                                  </p>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import cover from "@/assets/img/repair.png";

export default {
  data() {
    return {
      cover,
    };
  },
};
</script>
