<template>
  <div class="container h-full px-4 mx-auto custom">
    <div class="flex items-center content-center justify-center h-full">
      <div class="w-full px-4 lg:w-4/12">
        <div
          class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200"
        >
          <div class="px-6 py-6 mb-0 rounded-t">
            <div class="mb-3 text-center">
              <h4 class="font-bold text-blueGray-500 text-xl">
                เข้าสู่ระบบสำหรับผู้ดูแลระบบ
              </h4>
            </div>

            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form @submit.prevent="onSubmit">
              <div class="relative w-full mb-3">
                <label
                  class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                  htmlFor="grid-password"
                >
                  Username
                </label>
                <input
                  v-model="email"
                  type="email"
                  class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  placeholder="Username"
                />
              </div>
              <div
                v-if="v$.email.$error"
                class="mt-2 text-sm text-right text-red-500"
              >
                {{ v$.email.$errors[0].$message }}
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
                  placeholder="password"
                />
                <button @click="submit" type="submit" class="hidden">
                  Submit
                </button>
              </div>
              <div
                v-if="v$.password.$error"
                class="mt-2 text-sm text-right text-red-500"
              >
                {{ v$.password.$errors[0].$message }}
              </div>

              <div class="mb-3 mt-6 ">
                <vue-recaptcha
                  v-if="showRecaptcha"
                  siteKey="6Le4YCUeAAAAAO0lm_yXaykPaveKVJCipX7I_M8u"
                  size="normal"
                  theme="light"
                  data-size="compact"
                  :tabindex="0"
                  @verify="recaptchaVerified"
                  @expire="recaptchaExpired"
                  @fail="recaptchaFailed"
                  ref="vueRecaptcha"
                >
                </vue-recaptcha>
              </div>

              <div class="mt-6 text-center">
                <button
                  @click="submit"
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
import vueRecaptcha from "vue3-recaptcha2";
import useValidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import http from "@/services/AuthService";

export default {
  data() {
    return {
      v$: useValidate(),
      email: "",
      password: "",
      showRecaptcha: true,

      verify: null,
    };
  },
  components: {
    vueRecaptcha,
  },
  methods: {
    recaptchaVerified(response) {
      this.verify = response;
    },

    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed(response) {
      console.log(response);
    },

    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        if (this.verify !== null) {
          http
            .post("login", {
              email: this.email,
              password: this.password,
            })
            .then((response) => {
              console.log(response.data.token);

              //Data User LocalStorage
              localStorage.setItem("user", JSON.stringify(response.data));

              const Toast = this.$swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
              });

              Toast.fire({
                icon: "success",
                title: "กำลังเข้าสู่ระบบ",
              }).then(() => {
                // Login  Success => Dashboard
                this.$router.push({ name: "Dashboard" });
              });
            })
            .catch((error) => {
              if (error.response) {
                if (error.response.status == 500) {
                  //Call Sweet Alert
                  const Toast = this.$swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                  });

                  Toast.fire({
                    icon: "error",
                    title: "ข้อมูลไม่ถูกต้อง",
                  });
                }
              }
            });
        } else {
          const Swal = this.$swal.mixin({
            position: "center",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });

          Swal.fire({
            icon: "warning",
            title: `กดยืนยัน "reCAPTCHA" ก่อน`,
          });
        }
      } else {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: "error",
          title: "ข้อมูลไม่ถูกต้อง",
        });
      }
    },
  },
  validations() {
    return {
      email: {
        required: helpers.withMessage("ป้อนอีเมลก่อน", required),
        email: helpers.withMessage("รูปแบบอีเมลไม่ถูกต้อง", email),
      },
      password: {
        required: helpers.withMessage("ป้อนรหัสผ่านก่อน", required),
        minLength: helpers.withMessage(
          ({ $params }) => `รหัสผ่านต้องไม่น้อยกว่า ${$params.min} ตัวอักษร`,
          minLength(5)
        ),
      },
    };
  },
};
</script>
