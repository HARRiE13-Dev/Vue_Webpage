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
                    <!-- from input -->
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
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-2/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ตำแหน่ง</label
                            >
                            <input
                              v-model="position"
                              class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Position"
                            />
                          </div>
                          <div class="w-full px-2 md:w-5/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ชื่อ</label
                            >
                            <input
                              v-model="first_name"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Firstname"
                            />
                          </div>
                          <div class="w-full px-2 md:w-5/12">
                            <label
                              class="block my-3  text-gray-700 text-md"
                              for="Title"
                              >นามสกุล</label
                            >
                            <input
                              v-model="last_name"
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Lastname"
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
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Firstname"
                            />
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >นามสกุล (ภาษาอังกฤษ)</label
                            >
                            <input
                              v-model="last_nameEn"
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Lastname"
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
                              v-model="address"
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Address"
                            />
                          </div>
                          <div class="w-full px-2 mb-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >โทรศัพท์</label
                            >
                            <input
                              v-model="phone"
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Phone Number"
                            />
                          </div>
                          <div class="w-full px-2 mb-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >อีเมล</label
                            >
                            <input
                              v-model="email"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="email"
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ประวัติโดยย่อ</label
                            >
                            <textarea
                              v-model="bio"
                              cols="30"
                              placeholder="Bio"
                              rows="5"
                              class="relative w-full px-3 py-1 border rounded shadow text-base bg-white outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                            ></textarea>
                          </div>
                        </div>
                        <label
                          class="block my-3 text-gray-700 text-md"
                          for="Title"
                          >การศึกษา / Education
                        </label>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-2/12">
                            <select
                              v-model="year"
                              id="date-dropdown"
                              class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              placeholder="Degree"
                            >
                            </select>
                          </div>
                          <div class="w-full px-2 md:w-2/12">
                            <input
                              v-model="graduate"
                              class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight  text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Degree"
                            />
                          </div>
                          <div class="w-full px-2 md:w-8/12">
                            <input
                              v-model="major"
                              class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border rounded shadow"
                              type="text"
                              placeholder="Major"
                            />
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ประสบการณ์การทำงาน</label
                            >
                            <textarea
                              v-model="experience"
                              cols="30"
                              placeholder="Experience"
                              rows="5"
                              class="relative w-full px-3 py-1 text-base bg-white border rounded outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                            ></textarea>
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ทักษะ</label
                            >
                            <textarea
                              v-model="skills"
                              cols="30"
                              placeholder="Skills"
                              rows="5"
                              class="relative w-full px-3 py-1 text-base bg-white border rounded outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                            ></textarea>
                          </div>
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ผลงาน</label
                            >
                            <textarea
                              v-model="portfolio"
                              cols="30"
                              placeholder="Portfolio"
                              rows="5"
                              class="relative w-full px-3 py-1 text-base bg-white border rounded outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                            ></textarea>
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
                    <!-- Simulator  -->
                    <div class="w-full lg:w-6/12">
                      <div class="p-4 bg-emerald-300 rounded-lg">
                        <div
                          class="bg-white border border-blueGray-300 shadow-lg "
                        >
                          <div class="bg-blueGray-100 px-0 pt-2 pb-4">
                            <div class=" flex flex-warp">
                              <div class="ml-0 px-0 w-full lg:w-3/12 ">
                                <img
                                  alt="..."
                                  :src="image"
                                  class="mt-2 rounded-full shadow-lg max-w-100-px h-100-px center-img bg-emerald-500"
                                />
                              </div>
                              <div class="ml-3 px-0 w-full lg:w-6/12 ">
                                <h1
                                  class="mt-4 font-normal text-xl text-blueGray-800"
                                >
                                  {{ this.position }}{{ this.first_name }}
                                  {{ this.last_name }}
                                </h1>
                                <h1
                                  class="mt-2 font-semibold text-lg text-blueGray-800"
                                >
                                  {{ this.first_nameEn }} {{ this.last_nameEn }}
                                </h1>
                              </div>
                              <div
                                class="text-right mt-4 mr-4 w-full lg:w-3/12 "
                              >
                                <div class="text-sm text-blueGray-400">
                                  <span>{{ this.address }}&nbsp; </span>
                                  <i class="fas fa-home text-emerald-500"></i>
                                </div>
                                <div class="text-sm text-blueGray-400">
                                  <span>{{ this.phone }}&nbsp; </span>
                                  <i
                                    class="fas fa-phone-alt text-emerald-500"
                                  ></i>
                                </div>
                                <div class="text-sm text-blueGray-400">
                                  <span>{{ this.email }}&nbsp; </span>
                                  <i
                                    class="fas fa-envelope text-emerald-500"
                                  ></i>
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
                                    <i class="fas fa-user text-emerald-500"></i>
                                    ประวัติโดยย่อ / Biological
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <p
                                    class="ml-5 font-normal text-sm  leading-normal break-words text-blueGray-500"
                                  >
                                    {{ this.bio }}
                                  </p>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-user-graduate text-emerald-500"
                                    ></i>
                                    การศึกษา / Education
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <p
                                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                  >
                                    {{ this.education }}
                                  </p>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-briefcase text-emerald-500"
                                    ></i>
                                    ประสบการณ์การทำงาน / Experience
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <p
                                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                  >
                                    {{ this.experience }}
                                  </p>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-tools text-emerald-500"
                                    ></i>
                                    ทักษะ / Skills
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <p
                                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                  >
                                    {{ this.skills }}
                                  </p>
                                </div>
                                <div class="px-0">
                                  <h1
                                    class="mt-6 font-semibold text-lg text-blueGray-700"
                                  >
                                    <i
                                      class="fas fa-award text-emerald-500"
                                    ></i>
                                    ผลงาน / Portfolio
                                  </h1>
                                  <div class="pt-1 border-t"></div>
                                  <p
                                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                  >
                                    {{ this.portfolio }}
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
import http from "@/services/APIService";
export default {
  data() {
    return {
      position: "",
      first_name: "",
      last_name: "",
      first_nameEn: "",
      last_nameEn: "",
      address: "",
      phone: "",
      email: "",

      bio: "",
      education: "",
      experience: "",
      skills: "",
      portfolio: "",
    };
  },
  mounted() {
    this.getPersonnelData();
    this.dateDropdown();
  },

  methods: {
    dateDropdown() {
      let dateDropdown = document.getElementById("date-dropdown");

      let currentYear = new Date().getFullYear();
      let earliestYear = 1970;
      while (currentYear >= earliestYear) {
        let dateOption = document.createElement("option");
        dateOption.text = currentYear;
        dateOption.value = currentYear;
        dateDropdown.add(dateOption);
        currentYear -= 1;
      }
    },
    getPersonnelData() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));
      let userData = local_user.user;
      let idUserData = userData.id;
      idUserData = idUserData - 1;
      http
        .get(`personnelid/${idUserData}`)
        .then((response) => {
          this.personnel_array = response.data;
          //Get data from API
          this.position = this.personnel_array.titlePosition;
          this.first_name = this.personnel_array.firstName;
          this.last_name = this.personnel_array.lastName;

          this.first_nameEn = this.personnel_array.fistNameEn;
          this.last_nameEn = this.personnel_array.lastNameEn;

          this.email = this.personnel_array.e_mail;
          this.phone = this.personnel_array.phoneNumber;

          this.image = this.personnel_array.personnelPhoto;
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
};
</script>
