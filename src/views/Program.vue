<template>
  <div>
    <navbar />
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
         :style="`background-image: url('${bgupdate}');`"
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
            <div class="px-6 ">
              <div class="mt-6 text-center">
                <h3
                  class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  กระบวนวิชาของหลักสูตร
                </h3>
                <p
                  class="font-semibold leading-normal text-md text-blueGray-500"
                >
                  Course Curriculum
                </p>
              </div>

              <div class="block w-full mb-4 overflow-x-auto">
                <div
                  class="pt-6 mt-10 text-center border-t border-blueGray-200"
                ></div>
              </div>

              <div class="flex flex-wrap">
                <div class="w-full  p-2 lg:w-6/12">
                  <div
                    class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                        >
                          1.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class="text-3xl font-semibold leading-normal ">
                          Fundamentals Computer Science
                        </h5>

                        <p class="text-xl font-semibold leading-normal ">
                          กลุ่มวิชาความรู้พื้นฐานทางวิทยาการคอมพิวเตอร์
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_1"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 text-shadow text-center"
                      >
                        <div
                          class="flex h-100-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg  border-blueGray-300 bg-emerald-500 showdisplay hover:zoom-xs"
                        >
                          <div
                            class="px-2 py-4 text-white hover:text-blueGray-800"
                          >
                            <h5
                              class=" top-auto bottom-auto font-semibold leading-normal text-md "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 :-mt-5 w-96 bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="py-2 rounded-lg bg-blueGray-100 text-emerald-600"
                            >
                              <p
                                class="mb-1 text-xl font-bold text-center text-shadow"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="text-lg font-semibold text-center text-shadow"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="my-2 border-b border-blueGray-100 text-shadow"
                            ></div>

                            <h4 class="font-bold text-left text-md ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="font-bold text-left text-md ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 lg:w-6/12">
                  <div
                    class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full "
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                        >
                          2.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class="text-3xl font-semibold leading-normal ">
                          System Analysis
                        </h5>

                        <p class="text-xl font-semibold leading-normal ">
                          กลุ่มวิชาแนวคิดการวิเคราะห์และออกแบบ
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_2"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 text-shadow text-center"
                      >
                        <div
                          class="flex h-100-px  flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg  border-blueGray-300 bg-emerald-500 showdisplay hover:zoom-xs"
                        >
                          <div
                            class="px-2 py-4 text-white hover:text-blueGray-800"
                          >
                            <h5
                              class="top-auto bottom-auto font-semibold leading-normal text-md "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 :-mt-5 w-96 bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="py-2 rounded-lg bg-blueGray-100 text-emerald-600"
                            >
                              <p
                                class="mb-1 text-xl font-bold text-center text-shadow"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="text-lg font-semibold text-center text-shadow"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="my-2 border-b border-blueGray-100 text-shadow"
                            ></div>

                            <h4 class="font-bold text-left text-md ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="font-bold text-left text-md ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 lg:w-6/12">
                  <div
                    class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 h-full bg-blueGray-100"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                        >
                          3.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class="text-3xl font-semibold leading-normal ">
                          Application Development
                        </h5>

                        <p class="text-xl font-semibold leading-normal ">
                          กลุ่มวิชาการพัฒนาระบบแอปพลิเคชัน
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_3"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 text-shadow text-center"
                      >
                        <div
                          class="flex h-100-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg  border-blueGray-300 bg-emerald-500 showdisplay hover:zoom-xs"
                        >
                          <div
                            class="px-2 py-4 text-white hover:text-blueGray-800"
                          >
                            <h5
                              class="top-auto bottom-auto font-semibold leading-normal text-md "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 :-mt-5 w-96 bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="py-2 rounded-lg bg-blueGray-100 text-emerald-600"
                            >
                              <p
                                class="mb-1 text-xl font-bold text-center text-shadow"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="text-lg font-semibold text-center text-shadow"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="my-2 border-b border-blueGray-100 text-shadow"
                            ></div>

                            <h4 class="font-bold text-left text-md ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="font-bold text-left text-md ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 lg:w-6/12">
                  <div
                    class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                        >
                          4.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class="text-3xl font-semibold leading-normal ">
                          Network System
                        </h5>

                        <p class="text-xl font-semibold leading-normal ">
                          กลุ่มวิชาระบบเครือข่าย
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_4"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 text-shadow text-center"
                      >
                        <div
                          class="flex h-100-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg  border-blueGray-300 bg-emerald-500 showdisplay hover:zoom-xs"
                        >
                          <div
                            class="px-2 py-4 text-white hover:text-blueGray-800"
                          >
                            <h5
                              class="top-auto bottom-auto font-semibold leading-normal text-md "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 :-mt-5 w-96 bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="py-2 rounded-lg bg-blueGray-100 text-emerald-600"
                            >
                              <p
                                class="mb-1 text-xl font-bold text-center text-shadow"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="text-lg font-semibold text-center text-shadow"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="my-2 border-b border-blueGray-100 text-shadow"
                            ></div>

                            <h4 class="font-bold text-left text-md ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="font-bold text-left text-md ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 lg:w-6/12">
                  <div
                    class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                        >
                          5.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class="text-3xl font-semibold leading-normal ">
                          Data Science
                        </h5>

                        <p class="text-xl font-semibold leading-normal ">
                          กลุ่มวิชาวิทยาการข้อมูล
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_5"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 text-shadow text-center"
                      >
                        <div
                          class="flex h-100-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg  border-blueGray-300 bg-emerald-500 showdisplay hover:zoom-xs"
                        >
                          <div
                            class="px-2 py-4 text-white hover:text-blueGray-800"
                          >
                            <h5
                              class="top-auto bottom-auto font-semibold leading-normal text-md "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 :-mt-5 w-96 bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="py-2 rounded-lg bg-blueGray-100 text-emerald-600"
                            >
                              <p
                                class="mb-1 text-xl font-bold text-center text-shadow"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="text-lg font-semibold text-center text-shadow"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="my-2 border-b border-blueGray-100 text-shadow"
                            ></div>

                            <h4 class="font-bold text-left text-md ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="font-bold text-left text-md ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 lg:w-6/12">
                  <div
                    class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                        >
                          6.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class="text-3xl font-semibold leading-normal ">
                          Internet of Things
                        </h5>

                        <p class="text-xl font-semibold leading-normal ">
                          กลุ่มวิชาอินเตอร์เน็ตในทุกสิ่ง
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_6"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 text-shadow text-center"
                      >
                        <div
                          class="flex h-100-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg  border-blueGray-300 bg-emerald-500 showdisplay hover:zoom-xs"
                        >
                          <div
                            class="px-2 py-4 text-white hover:text-blueGray-800"
                          >
                            <h5
                              class="top-auto bottom-auto font-semibold leading-normal text-md "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 :-mt-5 w-96 bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="py-2 rounded-lg bg-blueGray-100 text-emerald-600"
                            >
                              <p
                                class="mb-1 text-xl font-bold text-center text-shadow"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="text-lg font-semibold text-center text-shadow"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="my-2 border-b border-blueGray-100 text-shadow"
                            ></div>

                            <h4 class="font-bold text-left text-md ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="font-bold text-left text-md ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 lg:w-6/12">
                  <div
                    class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news h-full border-blueGray-300 bg-blueGray-100"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                        >
                          7.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class="text-3xl font-semibold leading-normal ">
                          Artificial Intelligence
                        </h5>

                        <p class="text-xl font-semibold leading-normal ">
                          กลุ่มวิชาปัญญาประดิษฐ์
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_7"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 text-shadow text-center"
                      >
                        <div
                          class="flex h-100-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg  border-blueGray-300 bg-emerald-500 showdisplay hover:zoom-xs"
                        >
                          <div
                            class="px-2 py-4 text-white hover:text-blueGray-800"
                          >
                            <h5
                              class="top-auto bottom-auto font-semibold leading-normal text-md "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 :-mt-5 w-96 bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="py-2 rounded-lg bg-blueGray-100 text-emerald-600"
                            >
                              <p
                                class="mb-1 text-xl font-bold text-center text-shadow"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="text-lg font-semibold text-center text-shadow"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="my-2 border-b border-blueGray-100 text-shadow"
                            ></div>

                            <h4 class="font-bold text-left text-md ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="font-bold text-left text-md ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 lg:w-6/12">
                  <div
                    class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                        >
                          8.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class="text-3xl font-semibold leading-normal ">
                          Computer Science for Business
                        </h5>

                        <p class="text-xl font-semibold leading-normal ">
                          กลุ่มวิชาการประยุกต์งานด้านธุรกิจ
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_8"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 text-shadow text-center"
                      >
                        <div
                          class="flex h-100-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg  border-blueGray-300 bg-emerald-500 showdisplay hover:zoom-xs"
                        >
                          <div
                            class="px-2 py-4 text-white hover:text-blueGray-800"
                          >
                            <h5
                              class="top-auto bottom-auto font-semibold leading-normal text-md "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 :-mt-5 w-96 bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="py-2 rounded-lg bg-blueGray-100 text-emerald-600"
                            >
                              <p
                                class="mb-1 text-xl font-bold text-center text-shadow"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="text-lg font-semibold text-center text-shadow"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="my-2 border-b border-blueGray-100 text-shadow"
                            ></div>

                            <h4 class="font-bold text-left text-md ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="font-bold text-left text-md ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 lg:w-6/12">
                  <div
                    class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                        >
                          9.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class="text-3xl font-semibold leading-normal ">
                          Special Topics
                        </h5>

                        <p class="text-xl font-semibold leading-normal ">
                          กลุ่มวิชาหัวข้อพิเศษ
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_9"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 text-shadow text-center"
                      >
                        <div
                          class="flex h-100-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg  border-blueGray-300 bg-emerald-500 showdisplay hover:zoom-xs"
                        >
                          <div
                            class="px-2 py-4 text-white hover:text-blueGray-800"
                          >
                            <h5
                              class="top-auto bottom-auto font-semibold leading-normal text-md"
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72  w-96 bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="py-2 rounded-lg bg-blueGray-100 text-emerald-600"
                            >
                              <p
                                class="mb-1 text-xl font-bold text-center text-shadow"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="text-lg font-semibold text-center text-shadow"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="my-2 border-b border-blueGray-100 text-shadow"
                            ></div>

                            <h4 class="font-bold text-left text-md ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="font-bold text-left text-md ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
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
    <main-footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import MainFooter from "@/components/Footers/MainFooter.vue";
import http from "@/services/APIService";
import bgupdate from "@/assets/img/bg-update.jpg";
export default {
  data() {
    return {
      bgupdate,
      subject: {
        subjectId: 0,
        Subject_Code: "",
        Subject_NameTh: "",
        Subject_Credit: 0,
      },
      group_1: [],
      group_2: [],
      group_3: [],
      group_4: [],
      group_5: [],
      group_6: [],
      group_7: [],
      group_8: [],
      group_9: [],
    };
  },
  mounted() {
    this.getSubjectGruop();
  },
  methods: {
    getSubjectGruop() {
      http.get(`subject/Fundamental`).then((response) => {
        this.group_1 = response.data;
      });
      http.get(`subject/Analysis`).then((response) => {
        this.group_2 = response.data;
      });
      http.get(`subject/Analysis`).then((response) => {
        this.group_2 = response.data;
      });
      http.get(`subject/Application`).then((response) => {
        this.group_3 = response.data;
      });
      http.get(`subject/Network`).then((response) => {
        this.group_4 = response.data;
      });
      http.get(`subject/Data`).then((response) => {
        this.group_5 = response.data;
      });
      http.get(`subject/internet`).then((response) => {
        this.group_6 = response.data;
      });
      http.get(`subject/Artificial`).then((response) => {
        this.group_7 = response.data;
      });
      http.get(`subject/Computer`).then((response) => {
        this.group_8 = response.data;
      });
      http.get(`subject/Special`).then((response) => {
        this.group_9 = response.data;
      });
    },
  },
  components: {
    Navbar,
    MainFooter,
  },
};
</script>
