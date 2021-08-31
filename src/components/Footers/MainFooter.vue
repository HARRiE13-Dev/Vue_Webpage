<template>
  <footer class="relative pt-8 pb-6 bg-blueGray-200 custom">
    
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full px-4 lg:w-6/12">
          <h4 class="text-3xl font-semibold">{Logo}</h4>
          <p class="py-2">
            สาขาวิชาวิทยาการคอมพิวเตอร์ <br />
            อาคาร 60 ปี คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ <br />
            63 หมู่ 4 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290<br />
            โทร. 053-873890-3 <br>
            Fax. 053-873898
          </p>

          <div class="mt-6 mb-6 lg:mb-0">
            <button
              class="items-center justify-center w-10 h-10 mr-2 font-normal text-red-500 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
              type="button"
            >
              <i class="fab fa-youtube"></i>
            </button>
            <button
              class="items-center justify-center w-10 h-10 mr-2 font-normal text-green-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
              type="button"
            >
              <i class="fab fa-line"></i>
            </button>
            <button
              class="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none"
              type="button"
            >
              <i class="fab fa-facebook-square"></i>
            </button>
            <button
              class="items-center justify-center w-10 h-10 mr-2 font-normal text-black bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
              type="button"
            >
              <i class="fas fa-phone-alt"></i>
            </button>
            
          </div>
        </div>

        <div class="w-full px-6 lg:w-6/12">
          <div class="flex flex-wrap mb-6 items-top">
            <div class="w-full px-4 lg:w-6/12">
              <span
                class="block mb-2 text-sm font-semibold uppercase text-blueGray-500"
              >
                ระบบสารสนเทศ
              </span>
              <ul class="list-unstyled">
                <li>
                  <router-link
                    to="/appeal"
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                  >
                    ระบบ 1
                  </router-link>
                </li>
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="https://blog.creative-tim.com?ref=vn-footer"
                  >
                    ระบบ2
                  </a>
                </li>
                
               
              </ul>
            </div>
            
            <div class="w-full px-4 lg:w-6/12">
              <span
                class="block mb-2 text-sm font-semibold uppercase text-blueGray-500"
              >
                หน่วยงานเกี่ยวข้อง
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="https://www.mju.ac.th/th/"
                    target="_blank"
                  >
                   มหาวิทยาลัยแม่โจ้
                  </a>
                </li>
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="http://reg.mju.ac.th/registrar/home.asp"
                    target="_blank"
                  >
                    งานทะเบียน
                  </a>
                </li>
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="http://www.education.mju.ac.th/"
                  >
                    สำนักบริหารพัฒนาวิชาการ 
                  </a>
                </li>
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="http://www.admissions.mju.ac.th/main.aspx"
                  >
                    การรับสมัครนักศึกษา
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>

      <hr class="my-6 border-blueGray-300" />

      <div
        class="flex flex-wrap items-center justify-center md:justify-between"
      >
        <div class="w-full px-4 mx-auto text-center md:w-4/12">
          <div class="py-1 text-sm font-semibold text-blueGray-500">
            Copyright © 2021 Computer Science MJU
            <br />
            by HOP Team | All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
