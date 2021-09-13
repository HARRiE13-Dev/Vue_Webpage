<template>
  <div class="container h-full px-4 mx-auto custom">
    <div class="flex items-center content-center justify-center h-full">
      <div class="w-full px-4 lg:w-4/12">
        <div
          class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200"
        >
          <div class="px-6 py-6 mb-0 rounded-t">
            <div class="mb-3 text-center">
              <h4 class="font-bold text-blueGray-500">
                Sign in
              </h4>
            </div>

            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  v-model="email"
                  type="email"
                  class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  placeholder="@mju.ac.th"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  v-model="password"
                  type="password"
                  class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  placeholder="รหัสผ่าน"
                />
              </div>

              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-blueGray-700"
                  />
                  <span class="ml-2 text-sm text-blueGray-600">
                    Remember me
                  </span>
                </label>
              </div>

              <div class="mt-6 text-center">
                <button
                
                  v-on:click="submit()"
                  class="w-full px-6 py-3 mb-1 mr-1 text-sm text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                  type="button"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      if (this.email == "student" && this.password == "123456") {
        this.$router.push("service_student");
      } else if (this.email == "teacher" && this.password == "123456") {
        this.$router.push("service_teacher");
      } else {
        alert("Your Account is not Data");
        //axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
          //axios.get('http://wwwdev.csmju.com/api/personnel')
          
          const token ='2c32ddd497924dfcabb3bec972341808'
          axios.get('https://api.mju.ac.th/Student/API/STUDENTe8ee4f3759cc4763a8f231965a2da6db23052020/Program/0401',{
            headers:{
                'Authorization': `token ${token}`
            }
          })
          
          .then((resp) => {
            console.log(resp.data);
            //console.log(personnel.e_mail);
            console.log("Success");
          })
          .catch((err) => {
            console.log(err);
            console.log(status);
            console.log("Failed");
          });
      }
    },
  },
};
</script>
