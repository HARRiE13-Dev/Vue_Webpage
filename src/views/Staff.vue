<template>
  <div>
    <navbar />
    <main class="profile-page">
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
          
            <div class="px-6 ">
                <div class="mt-6 mb-10 text-center">
                <h3
                  class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                 พนักงาน
                </h3>
                
              </div>
              <div class="w-full px-4 mt-12 lg:w-12/12">
                <div class="flex flex-wrap py-6">
                  <div class="w-full px-4 text-center lg:w-4/12">
                  
                   <div class="relative px-12">
                    <img
                      alt="..."
                      :src="team2"
                      class="h-auto align-middle border-none rounded-full shadow-xl " 
                    />
                  </div>
                   
                      <h3
                        class="mb-0 text-3xl font-semibold leading-normal text-blueGray-700"
                      >
                        Jenna Stones
                      </h3>
                      <p class="mb-4 text-xl font-semibold text-blueGray-500">
                        Jenna Stones
                      </p>

                      <p class="mt-3 mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-briefcase text-blueGray-400"
                        ></i>
                        Solution Manager - Creative Tim Officer
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-university text-blueGray-400"
                        ></i>
                        University of Computer Science
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-phone-alt text-blueGray-400"
                        ></i>
                        09-9999999
                      </p>
                      <p class="mb-6 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-envelope text-blueGray-400"
                        ></i>
                        email@email.com
                      </p>
                    
                  </div>
                  <div class="w-full px-4 text-center lg:w-4/12">
                  
                   <div class="relative px-12">
                    <img
                      alt="..."
                      :src="team2"
                      class="h-auto align-middle border-none rounded-full shadow-xl lg:max-w-100-px"
                    />
                  </div>
                   
                      <h3
                        class="mb-0 text-3xl font-semibold leading-normal text-blueGray-700"
                      >
                        Jenna Stones
                      </h3>
                      <p class="mb-4 text-xl font-semibold text-blueGray-500">
                        Jenna Stones
                      </p>

                      <p class="mt-3 mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-briefcase text-blueGray-400"
                        ></i>
                        Solution Manager - Creative Tim Officer
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-university text-blueGray-400"
                        ></i>
                        University of Computer Science
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-phone-alt text-blueGray-400"
                        ></i>
                        09-9999999
                      </p>
                      <p class="mb-6 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-envelope text-blueGray-400"
                        ></i>
                        email@email.com
                      </p>
                    
                  </div>
                  <div class="w-full px-4 text-center lg:w-4/12">
                  
                   <div class="relative px-12">
                    <img
                      alt="..."
                      :src="team2"
                      class="h-auto align-middle border-none rounded-full shadow-xl lg:max-w-100-px"
                    />
                  </div>
                   
                      <h3
                        class="mb-0 text-3xl font-semibold leading-normal text-blueGray-700"
                      >
                        Jenna Stones
                      </h3>
                      <p class="mb-4 text-xl font-semibold text-blueGray-500">
                        Jenna Stones
                      </p>

                      <p class="mt-3 mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-briefcase text-blueGray-400"
                        ></i>
                        Solution Manager - Creative Tim Officer
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-university text-blueGray-400"
                        ></i>
                        University of Computer Science
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-phone-alt text-blueGray-400"
                        ></i>
                        09-9999999
                      </p>
                      <p class="mb-6 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-envelope text-blueGray-400"
                        ></i>
                        email@email.com
                      </p>
                    
                  </div>
                </div>
                <hr>
                <div class="flex flex-wrap py-6">
                  <div class="w-full px-4 text-center lg:w-4/12">
                  
                   <div class="relative px-12">
                    <img
                      alt="..."
                      :src="team2"
                      class="h-auto align-middle border-none rounded-full shadow-xl " 
                    />
                  </div>
                   
                      <h3
                        class="mb-0 text-3xl font-semibold leading-normal text-blueGray-700"
                      >
                        Jenna Stones
                      </h3>
                      <p class="mb-4 text-xl font-semibold text-blueGray-500">
                        Jenna Stones
                      </p>

                      <p class="mt-3 mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-briefcase text-blueGray-400"
                        ></i>
                        Solution Manager - Creative Tim Officer
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-university text-blueGray-400"
                        ></i>
                        University of Computer Science
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-phone-alt text-blueGray-400"
                        ></i>
                        09-9999999
                      </p>
                      <p class="mb-6 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-envelope text-blueGray-400"
                        ></i>
                        email@email.com
                      </p>
                    
                  </div>
                  <div class="w-full px-4 text-center lg:w-4/12">
                  
                   <div class="relative px-12">
                    <img
                      alt="..."
                      :src="team2"
                      class="h-auto align-middle border-none rounded-full shadow-xl lg:max-w-100-px"
                    />
                  </div>
                   
                      <h3
                        class="mb-0 text-3xl font-semibold leading-normal text-blueGray-700"
                      >
                        Jenna Stones
                      </h3>
                      <p class="mb-4 text-xl font-semibold text-blueGray-500">
                        Jenna Stones
                      </p>

                      <p class="mt-3 mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-briefcase text-blueGray-400"
                        ></i>
                        Solution Manager - Creative Tim Officer
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-university text-blueGray-400"
                        ></i>
                        University of Computer Science
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-phone-alt text-blueGray-400"
                        ></i>
                        09-9999999
                      </p>
                      <p class="mb-6 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-envelope text-blueGray-400"
                        ></i>
                        email@email.com
                      </p>
                    
                  </div>
                  <div class="w-full px-4 text-center lg:w-4/12">
                  
                   <div class="relative px-12">
                    <img
                      alt="..."
                      :src="team2"
                      class="h-auto align-middle border-none rounded-full shadow-xl lg:max-w-100-px"
                    />
                  </div>
                   
                      <h3
                        class="mb-0 text-3xl font-semibold leading-normal text-blueGray-700"
                      >
                        Jenna Stones
                      </h3>
                      <p class="mb-4 text-xl font-semibold text-blueGray-500">
                        Jenna Stones
                      </p>

                      <p class="mt-3 mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-briefcase text-blueGray-400"
                        ></i>
                        Solution Manager - Creative Tim Officer
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-university text-blueGray-400"
                        ></i>
                        University of Computer Science
                      </p>
                      <p class="mb-0 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-phone-alt text-blueGray-400"
                        ></i>
                        09-9999999
                      </p>
                      <p class="mb-6 text-blueGray-600">
                        <i
                          class="mr-2 text-lg fas fa-envelope text-blueGray-400"
                        ></i>
                        email@email.com
                      </p>
                    
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
