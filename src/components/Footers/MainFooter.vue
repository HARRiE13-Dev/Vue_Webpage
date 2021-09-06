<template>
  <footer class="relative pt-8 pb-6 bg-blueGray-200 custom">
    
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full px-6 lg:w-6/12">
          <h4 class="text-3xl font-semibold">{Logo}</h4>
          <p class="py-2">
            สาขาวิชาวิทยาการคอมพิวเตอร์ <br />
            อาคาร 60 ปี คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ <br />
            63 หมู่ 4 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290<br />
            โทร. <a href="tel:053-873890-3">053-873890-3</a> <br>
            Fax. 053-873898 <br>
            E-mail : csmju@gmail.com <a href=""></a>
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
                class="block mb-2 text-lg font-semibold uppercase text-blueGray-500"
              >
                ระบบสารสนเทศ
              </span>
              <ul class="list-unstyled">
                <li>
                  <router-link
                    to="/appeal"
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                  >
                    ระบบจองห้องเรียน
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/appeal"
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                  >
                    ระบบแจ้งรายวิชาตกค้าง
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/appeal"
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                  >
                    ระบบแจ้งซ่อม
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/appeal"
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                  >
                    ระบบบันทึกกิจกรรม
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/appeal"
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                  >
                    ข่าวสาร/ประชาสัมพันธ์
                  </router-link>
                </li>
                
                
               
              </ul>
            </div>
            
            <div class="w-full px-4 lg:w-6/12">
              <span
                class="block mb-2 text-lg font-semibold uppercase text-blueGray-500"
              >
                MJU Links
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
                    href="http://www.science.mju.ac.th/"
                    target="_blank"
                  >
                   คณะวิทยาศาสตร์
                  </a>
                </li>
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="http://reg.mju.ac.th/registrar/home.asp"
                    target="_blank"
                  >
                    งานทะเบียนนักศึกษา
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
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="https://it.mju.ac.th/"
                  >
                    ศูนย์เทคโนโลยีสารสนเทศ
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
