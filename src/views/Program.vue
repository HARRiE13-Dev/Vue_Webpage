<template>
  <div>
    <navbar />
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
                  class="pt-6  mt-10 text-center border-t border-blueGray-200"
                ></div>
              </div>

              <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 px-2">
                  <div
                    class="relative px-4 pt-6 max-h-news flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-100"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 text-55 font-bold text-blueGray-700 text-shadow"
                        >
                          1.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class=" text-3xl font-semibold leading-normal ">
                          Fundamentals Computer Science
                        </h5>

                        <p class=" text-xl font-semibold leading-normal ">
                          กลุ่มวิชาความรู้พื้นฐานทางวิทยาการคอมพิวเตอร์
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_1"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 "
                      >
                        <div
                          class=" flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg bg-emerald-500 showdisplay hover:zoom-xs "
                        >
                          <div
                            class="py-4 px-2 hover:text-blueGray-800 text-white"
                          >
                            <h5
                              class="text-md font-semibold leading-normal top-auto bottom-auto "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="-mt-70 :-mt-5 -ml-20 absolute px-4 w-96 duration-150 ease-linear rounded-lg shadow-lg bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="bg-blueGray-100 rounded-lg py-2 text-emerald-600"
                            >
                              <p
                                class="font-bold mb-1 text-xl  text-shadow text-center"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="font-semibold   text-lg   text-shadow text-center"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="border-b border-blueGray-100 text-shadow my-2"
                            ></div>

                            <h4 class="text-md font-bold text-left ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="text-md font-bold text-left  ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-2">
                  <div
                    class="relative px-4 pt-6 max-h-news flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-100"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 text-55 font-bold text-blueGray-700 text-shadow"
                        >
                          2.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class=" text-3xl font-semibold leading-normal ">
                          System Analysis
                        </h5>

                        <p class=" text-xl font-semibold leading-normal ">
                          กลุ่มวิชาแนวคิดการวิเคราะห์และออกแบบ
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_2"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 "
                      >
                        <div
                          class=" flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg bg-emerald-500 showdisplay hover:zoom-xs "
                        >
                          <div
                            class="py-4 px-2 hover:text-blueGray-800 text-white"
                          >
                            <h5
                              class="text-md font-semibold leading-normal top-auto bottom-auto "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="-mt-70 :-mt-5 -ml-20 absolute px-4 w-96 duration-150 ease-linear rounded-lg shadow-lg bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="bg-blueGray-100 rounded-lg py-2 text-emerald-600"
                            >
                              <p
                                class="font-bold mb-1 text-xl  text-shadow text-center"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="font-semibold   text-lg   text-shadow text-center"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="border-b border-blueGray-100 text-shadow my-2"
                            ></div>

                            <h4 class="text-md font-bold text-left ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="text-md font-bold text-left  ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-2">
                  <div
                    class="relative px-4 pt-6 max-h-news flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-100"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 text-55 font-bold text-blueGray-700 text-shadow"
                        >
                          3.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class=" text-3xl font-semibold leading-normal ">
                          Application Development
                        </h5>

                        <p class=" text-xl font-semibold leading-normal ">
                          กลุ่มวิชาการพัฒนาระบบแอปพลิเคชัน
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_3"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 "
                      >
                        <div
                          class=" flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg bg-emerald-500 showdisplay hover:zoom-xs "
                        >
                          <div
                            class="py-4 px-2 hover:text-blueGray-800 text-white"
                          >
                            <h5
                              class="text-md font-semibold leading-normal top-auto bottom-auto "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="-mt-70 :-mt-5 -ml-20 absolute px-4 w-96 duration-150 ease-linear rounded-lg shadow-lg bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="bg-blueGray-100 rounded-lg py-2 text-emerald-600"
                            >
                              <p
                                class="font-bold mb-1 text-xl  text-shadow text-center"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="font-semibold   text-lg   text-shadow text-center"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="border-b border-blueGray-100 text-shadow my-2"
                            ></div>

                            <h4 class="text-md font-bold text-left ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="text-md font-bold text-left  ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-2">
                  <div
                    class="relative px-4 pt-6 max-h-news flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-100"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 text-55 font-bold text-blueGray-700 text-shadow"
                        >
                          4.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class=" text-3xl font-semibold leading-normal ">
                          Network System
                        </h5>

                        <p class=" text-xl font-semibold leading-normal ">
                          กลุ่มวิชาระบบเครือข่าย 
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_4"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 "
                      >
                        <div
                          class=" flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg bg-emerald-500 showdisplay hover:zoom-xs "
                        >
                          <div
                            class="py-4 px-2 hover:text-blueGray-800 text-white"
                          >
                            <h5
                              class="text-md font-semibold leading-normal top-auto bottom-auto "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="-mt-70 :-mt-5 -ml-20 absolute px-4 w-96 duration-150 ease-linear rounded-lg shadow-lg bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="bg-blueGray-100 rounded-lg py-2 text-emerald-600"
                            >
                              <p
                                class="font-bold mb-1 text-xl  text-shadow text-center"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="font-semibold   text-lg   text-shadow text-center"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="border-b border-blueGray-100 text-shadow my-2"
                            ></div>

                            <h4 class="text-md font-bold text-left ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="text-md font-bold text-left  ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-2">
                  <div
                    class="relative px-4 pt-6 max-h-news flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-100"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 text-55 font-bold text-blueGray-700 text-shadow"
                        >
                          5.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class=" text-3xl font-semibold leading-normal ">
                          Data Science
                        </h5>

                        <p class=" text-xl font-semibold leading-normal ">
                          กลุ่มวิชาวิทยาการข้อมูล
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_5"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 "
                      >
                        <div
                          class=" flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg bg-emerald-500 showdisplay hover:zoom-xs "
                        >
                          <div
                            class="py-4 px-2 hover:text-blueGray-800 text-white"
                          >
                            <h5
                              class="text-md font-semibold leading-normal top-auto bottom-auto "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="-mt-70 :-mt-5 -ml-20 absolute px-4 w-96 duration-150 ease-linear rounded-lg shadow-lg bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="bg-blueGray-100 rounded-lg py-2 text-emerald-600"
                            >
                              <p
                                class="font-bold mb-1 text-xl  text-shadow text-center"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="font-semibold   text-lg   text-shadow text-center"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="border-b border-blueGray-100 text-shadow my-2"
                            ></div>

                            <h4 class="text-md font-bold text-left ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="text-md font-bold text-left  ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-2">
                  <div
                    class="relative px-4 pt-6 max-h-news flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-100"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 text-55 font-bold text-blueGray-700 text-shadow"
                        >
                          6.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class=" text-3xl font-semibold leading-normal ">
                          Internet of Things
                        </h5>

                        <p class=" text-xl font-semibold leading-normal ">
                          กลุ่มวิชาอินเตอร์เน็ตในทุกสิ่ง
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_6"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 "
                      >
                        <div
                          class=" flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg bg-emerald-500 showdisplay hover:zoom-xs "
                        >
                          <div
                            class="py-4 px-2 hover:text-blueGray-800 text-white"
                          >
                            <h5
                              class="text-md font-semibold leading-normal top-auto bottom-auto "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="-mt-70 :-mt-5 -ml-20 absolute px-4 w-96 duration-150 ease-linear rounded-lg shadow-lg bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="bg-blueGray-100 rounded-lg py-2 text-emerald-600"
                            >
                              <p
                                class="font-bold mb-1 text-xl  text-shadow text-center"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="font-semibold   text-lg   text-shadow text-center"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="border-b border-blueGray-100 text-shadow my-2"
                            ></div>

                            <h4 class="text-md font-bold text-left ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="text-md font-bold text-left  ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-2">
                  <div
                    class="relative px-4 pt-6 max-h-news flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-100"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 text-55 font-bold text-blueGray-700 text-shadow"
                        >
                          7.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class=" text-3xl font-semibold leading-normal ">
                          Artificial Intelligence 
                        </h5>

                        <p class=" text-xl font-semibold leading-normal ">
                          กลุ่มวิชาปัญญาประดิษฐ์ 
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_7"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 "
                      >
                        <div
                          class=" flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg bg-emerald-500 showdisplay hover:zoom-xs "
                        >
                          <div
                            class="py-4 px-2 hover:text-blueGray-800 text-white"
                          >
                            <h5
                              class="text-md font-semibold leading-normal top-auto bottom-auto "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="-mt-70 :-mt-5 -ml-20 absolute px-4 w-96 duration-150 ease-linear rounded-lg shadow-lg bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="bg-blueGray-100 rounded-lg py-2 text-emerald-600"
                            >
                              <p
                                class="font-bold mb-1 text-xl  text-shadow text-center"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="font-semibold   text-lg   text-shadow text-center"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="border-b border-blueGray-100 text-shadow my-2"
                            ></div>

                            <h4 class="text-md font-bold text-left ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="text-md font-bold text-left  ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-2">
                  <div
                    class="relative px-4 pt-6 max-h-news flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-100"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 text-55 font-bold text-blueGray-700 text-shadow"
                        >
                          8.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class=" text-3xl font-semibold leading-normal ">
                         Computer Science for Business
                        </h5>

                        <p class=" text-xl font-semibold leading-normal ">
                          กลุ่มวิชาการประยุกต์งานด้านธุรกิจ
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_8"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 "
                      >
                        <div
                          class=" flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg bg-emerald-500 showdisplay hover:zoom-xs "
                        >
                          <div
                            class="py-4 px-2 hover:text-blueGray-800 text-white"
                          >
                            <h5
                              class="text-md font-semibold leading-normal top-auto bottom-auto "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="-mt-70 :-mt-5 -ml-20 absolute px-4 w-96 duration-150 ease-linear rounded-lg shadow-lg bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="bg-blueGray-100 rounded-lg py-2 text-emerald-600"
                            >
                              <p
                                class="font-bold mb-1 text-xl  text-shadow text-center"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="font-semibold   text-lg   text-shadow text-center"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="border-b border-blueGray-100 text-shadow my-2"
                            ></div>

                            <h4 class="text-md font-bold text-left ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="text-md font-bold text-left  ">
                              หน่วยกิต : {{ subject.Subject_Credit }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full lg:w-12/12 px-2">
                  <div
                    class="relative px-4 pt-6 max-h-news flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-100"
                  >
                    <div class="relative flex mb-4">
                      <div class="relative w-auto">
                        <h5
                          class="-mt-5 text-55 font-bold text-blueGray-700 text-shadow"
                        >
                          9.
                        </h5>
                      </div>
                      <div
                        class="relative w-auto ml-3 text-blueGray-700 text-shadow"
                      >
                        <h5 class=" text-3xl font-semibold leading-normal ">
                          Special Topics
                        </h5>

                        <p class=" text-xl font-semibold leading-normal ">
                          กลุ่มวิชาหัวข้อพิเศษ
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap">
                      <div
                        v-for="subject in group_9"
                        v-bind:key="subject.subjectId"
                        class="w-full px-2 lg:w-4/12 "
                      >
                        <div
                          class=" flex border flex-col border-blueGray-300 w-full min-w-0 mb-6 break-words duration-150 ease-linear rounded-lg shadow-lg bg-emerald-500 showdisplay hover:zoom-xs "
                        >
                          <div
                            class="py-4 px-2 hover:text-blueGray-800 text-white"
                          >
                            <h5
                              class="text-md font-semibold leading-normal top-auto bottom-auto "
                            >
                              {{ subject.Subject_NameTh }}
                            </h5>
                          </div>
                        </div>
                        <div
                          class="-mt-70 :-mt-5 -ml-20 absolute px-4 w-96 duration-150 ease-linear rounded-lg shadow-lg bg-emerald-400 contentshow opacity-90"
                        >
                          <div class="relative py-4 text-blueGray-800">
                            <div
                              class="bg-blueGray-100 rounded-lg py-2 text-emerald-600"
                            >
                              <p
                                class="font-bold mb-1 text-xl  text-shadow text-center"
                              >
                                {{ subject.Subject_NameTh }}
                              </p>
                              <p
                                class="font-semibold   text-lg   text-shadow text-center"
                              >
                                {{ subject.Subject_NameEn }}
                              </p>
                            </div>
                            <div
                              class="border-b border-blueGray-100 text-shadow my-2"
                            ></div>

                            <h4 class="text-md font-bold text-left ">
                              รหัสวิชา : {{ subject.Subject_Code }}
                              {{ subject.Subject_Credit }}
                            </h4>
                            <h4 class="text-md font-bold text-left  ">
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
export default {
  data() {
    return {
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
