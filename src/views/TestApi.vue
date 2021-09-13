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
              <div class="mt-6 mb-10 text-center ">
                <h3
                  class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
                >
                  
                </h3>
              </div>

              <div class="flex flex-wrap py-6">
                <div
                  v-for="student in personnel_array"
                  v-bind:key="student.studentID"
                  class="w-full px-4 text-center lg:w-4/12"
                >
                  <div class="relative px-12 py-12 ">
                   
                  </div>

                  <h3
                    class="mb-0 text-lg font-semibold leading-normal text-blueGray-700"
                  >
                  
                    {{ student.nameTh }} 
                    
                  </h3>
                  
               
                 
                 
                  
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
import axios from "axios";

export default {
  data() {
    return {
      token: "2c32ddd497924dfcabb3bec972341808",
      //team2,
      personnel_array: [],
      personnel: {
        studentID: 0,
        nameTh: '',
        

      },
    };
  },
  mounted() {
    this.getPersonnelData();
  },
  methods: {
    getPersonnelData() {
      axios(
        {
          method: "GET",
          url:
            "https://api.mju.ac.th/Student/API/STUDENTe8ee4f3759cc4763a8f231965a2da6db23052020/Program/0401",
        },
        {
          headers: {
            'Authorization': `Basic ${this.token}`,
          },
        }
      ).then((Response) => {
        this.personnel_array = Response.data;
      });
    },
  },
  components: {
    Navbar,
    MainFooter,
  },
};
</script>
