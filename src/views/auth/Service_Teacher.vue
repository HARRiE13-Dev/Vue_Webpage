<template>
  <div>
 
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
                ระบบสารสนเทศสำหรับบุคคลากร
                </h3>
                
              </div>

              <div class="py-6 mt-2 text-center border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-9/12">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                    
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium iste optio animi id accusantium quasi reiciendis? Cupiditate veniam temporibus itaque reprehenderit ipsam quam molestiae corrupti sapiente. Hic saepe omnis architecto?
                    </p>
                  </div>
                </div>
              </div>

              <div class="w-full px-4 mt-10 lg:w-12/12">
            <div class="flex flex-wrap">
              
              <div class="w-full px-4 lg:w-4/12">
                <h5 class="pb-4 text-xl font-semibold text-center">
                   ระบบ...
                </h5>
                <router-link to="/auth/login">
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
                  >
                    <img src="@/assets/img/login.jpg" 
                    class="h-auto max-w-full align-middle border-none rounded-lg"
                     >
                  </div>
                </router-link>
                
              </div>

              <div class="w-full px-4 lg:w-4/12">
                <h5 class="pb-4 text-xl font-semibold text-center">
                   ระบบ...
                </h5>
                <router-link to="/profile">
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
                  >
                    <img src="@/assets/img/login.jpg" 
                    class="h-auto max-w-full align-middle border-none rounded-lg"
                     >
                  </div>
                </router-link>
              </div>

              <div class="w-full px-4 lg:w-4/12">
                <h5 class="pb-4 text-xl font-semibold text-center">
                   ระบบ...
                </h5>
                <router-link to="/landing">
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
                  >
                    <img src="@/assets/img/login.jpg" 
                    class="h-auto max-w-full align-middle border-none rounded-lg"
                     >
                  </div>
                </router-link>
              </div>
              
            </div>
          </div>

          <div class="w-full px-4 mt-10 lg:w-12/12">
            <div class="flex flex-wrap">
              
              <div class="w-full px-4 lg:w-4/12">
                <h5 class="pb-4 text-xl font-semibold text-center">
                  ระบบ...
                </h5>
                <router-link to="/auth/login">
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
                  >
                    <img src="@/assets/img/login.jpg" 
                    class="h-auto max-w-full align-middle border-none rounded-lg"
                     >
                  </div>
                </router-link>
                
              </div>

              <div class="w-full px-4 lg:w-4/12">
                <h5 class="pb-4 text-xl font-semibold text-center">
                 ระบบ...
                </h5>
                <router-link to="/profile">
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
                  >
                    <img src="@/assets/img/login.jpg" 
                    class="h-auto max-w-full align-middle border-none rounded-lg"
                     >
                  </div>
                </router-link>
              </div>

              <div class="w-full px-4 lg:w-4/12">
                <h5 class="pb-4 text-xl font-semibold text-center">
                   ระบบ...
                </h5>
                <router-link to="/landing">
                  <div
                    class="relative flex flex-col w-full min-w-0 mb-6 break-words transition-all duration-150 ease-linear bg-white rounded-lg shadow-lg hover:-mt-4"
                  >
                    <img src="@/assets/img/login.jpg" 
                    class="h-auto max-w-full align-middle border-none rounded-lg"
                     >
                  </div>
                </router-link>
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

export default {
  data() {
    return {
    
    };
  },
  components: {
   
    
    
  },
};
</script>
