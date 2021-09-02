<template>
  <div>
    <navbar />
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
              <div class="mt-6 text-center">
                <h3
                  class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  อาคาร / ห้องเรียน
                </h3>
              </div>

              <div class="py-6 mt-2 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-9/12">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laudantium iste optio animi id accusantium quasi
                      reiciendis? Cupiditate veniam temporibus itaque
                      reprehenderit ipsam quam molestiae corrupti sapiente. Hic
                      saepe omnis architecto?
                    </p>
                  </div>
                </div>
              </div>
              
                  <div class="px-6 mt-2">
                <h3
                  class="mb-2 text-3xl font-semibold leading-normal text-blueGray-700"
                >
                  อาคารเรียน
                </h3>
              </div>

              <div class="w-full px-0 mt-10 lg:w-12/12">
                <div class="flex flex-wrap">
                  <div class="w-6/12 px-4 lg:w-6/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                          อาคารจุฬาภรณ์ คณะวิทยาศาสตร์
                        </h4>
                       
                      </blockquote>
                    </div>
                  </div>
                  <div class="w-6/12 px-4 lg:w-6/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                        อาคาร 60 ปี มหาวิทยาลัยแม่โจ้
                        </h4>
                        
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              <hr>

               <div class="px-6 mt-6">
                <h3
                  class="mb-2 text-3xl font-semibold leading-normal text-blueGray-700"
                >
                  ห้องปฏิบัติการคอมพิวเตอร์
                </h3>
              </div>

                <div class="w-full px-0 mt-10 lg:w-12/12">
                <div class="flex flex-wrap">
                  <div class="w-6/12 px-4 lg:w-4/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                          ห้องปฏิบัติการ 3203
                        </h4>
                        <p class="mt-2 font-light text-white text-md">
                           จำนวนที่นั่ง : 45 <br>
                          หมายเลขห้อง 32032 <br>
                          สถานที่ : สถานที่ ชั้น 2  อาคารจุฬาภรณ์ <br> คณะวิทยาศาสตร์
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  <div class="w-6/12 px-4 lg:w-4/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                        ห้องปฏิบัติการคอมพิวเตอร์ 1
                        </h4>
                        <p class="mt-2 font-light text-white text-md">
                           จำนวนที่นั่ง : 30 <br>
                          หมายเลขห้อง 2602 <br>
                          สถานที่ : ชั้น 6 อาคาร 60 ปี ม.แม่โจ้ คณะวิทยาศาสตร์
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  <div class="w-6/12 px-4 lg:w-4/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                         ห้องปฏิบัติการคอมพิวเตอร์ 2
                        </h4>
                        <p class="mt-2 font-light text-white text-md">
                             จำนวนที่นั่ง : 30 <br>
                          หมายเลขห้อง 2602 <br>
                          สถานที่ : ชั้น 6 อาคาร 60 ปี ม.แม่โจ้ คณะวิทยาศาสตร์
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap">
                  <div class="w-6/12 px-4 lg:w-4/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                          ห้องปฏิบัติการคอมพิวเตอร์ 3
                        </h4>
                        <p class="mt-2 font-light text-white text-md">
                            จำนวนที่นั่ง : 30 <br>
                          หมายเลขห้อง 2602 <br>
                          สถานที่ : ชั้น 6 อาคาร 60 ปี ม.แม่โจ้ คณะวิทยาศาสตร์
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  <div class="w-6/12 px-4 lg:w-4/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                        ห้องปฏิบัติการคอมพิวเตอร์ 4
                        </h4>
                        <p class="mt-2 font-light text-white text-md">
                             จำนวนที่นั่ง : 30 <br>
                          หมายเลขห้อง 2602 <br>
                          สถานที่ : ชั้น 6 อาคาร 60 ปี ม.แม่โจ้ คณะวิทยาศาสตร์
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  <div class="w-6/12 px-4 lg:w-4/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                        ห้องปฏิบัติการคอมพิวเตอร์ 5
                        </h4>
                        <p class="mt-2 font-light text-white text-md">
                           จำนวนที่นั่ง : 30 <br>
                          หมายเลขห้อง 2602 <br>
                          สถานที่ : ชั้น 6 อาคาร 60 ปี ม.แม่โจ้ คณะวิทยาศาสตร์
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>

              </div>

               <div class="px-6 mt-6">
                <h3
                  class="mb-2 text-3xl font-semibold leading-normal text-blueGray-700"
                >
                 ห้องบรรยายคอมพิวเตอร์
                </h3>
              </div>

              <div class="w-full px-4 mt-10 lg:w-12/12">
                <div class="flex flex-wrap">
                  <div class="w-6/12 px-4 lg:w-3/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-5 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                          
ห้องบรรยาย 3203
                        </h4>
                        <p class="mt-2 font-light text-white text-md">
                          จำนวนที่นั่ง : 48 <br>
                          หมายเลขห้อง : 32031 <br>
                          สถานที่ : ชั้น 2 อาคารจุฬาภรณ์ <br>
                          คณะวิทยาศาสตร์
                        </p>
                      </blockquote>
                    </div>
                  </div>

                  <div class="w-6/12 px-4 lg:w-3/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-5 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                          ห้องบรรยาย 6
                        </h4>
                        <p class="mt-2 font-light text-white text-md">
                          จำนวนที่นั่ง : 90 <br>
                          หมายเลขห้อง 2610 <br>
                          สถานที่ : ชั้น 6 อาคาร 60 ปี ม.แม่โจ้ คณะวิทยาศาสตร์
                          
                        </p>
                      
                      </blockquote>
                    </div>
                  </div>

                  <div class="w-6/12 px-4 lg:w-3/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-5 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                          ห้องบรรยาย 7
                        </h4>
                        <p class="mt-2 font-light text-white text-md">
                            จำนวนที่นั่ง : 56 <br>
                          หมายเลขห้อง 2607 <br>
                          สถานที่ : ชั้น 6 อาคาร 60 ปี ม.แม่โจ้ คณะวิทยาศาสตร์
                        </p>
                      </blockquote>
                    </div>
                  </div>
                  
                  <div class="w-6/12 px-4 lg:w-3/12 ">
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg bg-emerald-500"
                    >
                      <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        class="w-full align-middle rounded-t-lg"
                      />
                      <blockquote class="relative p-5 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          class="absolute left-0 block w-full h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            class="fill-current text-emerald-500"
                          ></polygon>
                        </svg>
                        <h4 class="text-xl font-bold text-white">
                             ห้องบรรยาย 8
                        </h4>
                        <p class="mt-2 font-light text-white text-md">
                         จำนวนที่นั่ง : 56 <br>
                          หมายเลขห้อง 2608 <br>
                          สถานที่ : ชั้น 6 อาคาร 60 ปี ม.แม่โจ้ คณะวิทยาศาสตร์
                        </p>
                      </blockquote>
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

import team2 from "@/assets/img/team-2-800x800.jpg";

export default {
  data() {
    return {
      team2,
    };
  },
  components: {
    Navbar,
    MainFooter,
  },
};
</script>
