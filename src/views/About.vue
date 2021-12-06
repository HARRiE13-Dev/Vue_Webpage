<template>
  <div>
    <navbar />
    <main class="profile-page custom">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
          
            background-image: url('https://wwwdev.csmju.com/images/banner/thumbnail/Banner_1638264985.jpg');
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
                  เกี่ยวกับเรา
                </h3>
                 <p
                  class="font-semibold leading-normal text-md text-blueGray-500"
                >
                  About Us
                </p>
              </div>

              <div class="py-6 mt-10 border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4 lg:w-12/12">
                    <ul
                      class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
                    >
                      <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                        <a
                          class="block px-5 py-3 font-bold leading-normal uppercase rounded shadow-lg"
                          v-on:click="toggleTabs(1)"
                          v-bind:class="{
                            'text-emerald-500 bg-white': openTab !== 1,
                            'text-white bg-emerald-500': openTab === 1,
                          }"
                        >
                          <i class="mr-1 text-base fas fa-history"></i>
                          ประวัติความเป็นมา
                        </a>
                      </li>
                      <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                        <a
                          class="block px-5 py-3 font-bold leading-normal uppercase rounded shadow-lg"
                          v-on:click="toggleTabs(2)"
                          v-bind:class="{
                             'text-emerald-500 bg-white': openTab !== 2,
                            'text-white bg-emerald-500': openTab === 2,
                          }"
                        >
                          <i class="mr-1 text-base fas fa-bullseye"></i> พันธกิจ
                        </a>
                      </li>
                      <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                        <a
                          class="block px-5 py-3 font-bold leading-normal uppercase rounded shadow-lg"
                          v-on:click="toggleTabs(3)"
                          v-bind:class="{
                            'text-emerald-500 bg-white': openTab !== 3,
                            'text-white bg-emerald-500': openTab === 3,
                          }"
                        >
                          <i class="mr-1 text-base fas fa-globe"></i>
                          วิสัยทัศน์
                        </a>
                      </li>
                    </ul>
                    
                    <div
                      class="relative flex flex-col w-full"
                    >
                      <div class="flex-auto px-0 py-5 ">
                        <div class="text-justify tab-content tab-space text-blueGray-700">
                          <div
                            v-bind:class="{
                              hidden: openTab !== 1,
                              block: openTab === 1,
                            }"
                          >
                            <p
                              class="mt-8 text-2xl font-bold leading-relaxed text-center"
                            >
                              ประวัติสาขาวิชาวิทยาการคอมพิวเตอร์
                            </p>
                            <p
                              class="mb-8 text-xl font-bold leading-relaxed text-center"
                            >
                              คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                            </p>
                            <p class="my-6 rem2">
                              สาขาวิชาวิทยาการคอมพิวเตอร์
                              ได้ดำเนินการเปิดสอนมาตั้งแต่ปีการศึกษา2536
                              เป็นสาขาวิชาแรกของคณะวิทยาศาสตร์ที่เริ่มจัดตั้งมาพร้อมกับคณะวิทยาศาสตร์
                              โดยมีประวัติความเป็นมาดังนี้
                            </p>
                            <p class="my-6 rem2">
                              <b>ปีการศึกษา 2536 </b
                              >หมวดวิชาวิทยาศาสตร์และคณิตศาสตร์
                              ภาควิชาศึกษาทั่วไป คณะธุรกิจการเกษตร
                              ได้แยกตัวออกมาเพื่อจัดตั้งเป็นคณะวิทยาศาสตร์
                              โดยมีภาควิชาวิทยาการคอมพิวเตอร์เป็นภาควิชาหนึ่งที่สังกัดในคณะวิทยาศาสตร์
                              ในระยะเริ่มแรกได้บริหารจัดการโดย
                              หัวหน้าภาควิชาคนแรก (รองศาสตราจารย์จรัส กาใหญ่)
                              ต่อมาได้ขยายจำนวนรับคณาจารย์มากขึ้นตามลำดับ
                              โดยมีภาระงานสอนรายวิชาคอมพิวเตอร์เบื้องต้น
                              ซึ่งเป็นรายวิชาพื้นฐานสำหรับนักศึกษาในหลายสาขาวิชา
                              นอกจากนั้นยังเปิดสอนรายวิชาการเขียนโปรแกรมภาษาเบสิค
                              และรายวิชาโปรแกรมสำเร็จรูปเพื่อเป็นวิชาเลือกให้กับนักศึกษาที่สนใจเรียนรายวิชาทางด้านคอมพิวเตอร์เป็นวิชาเลือกเสรีอีกด้วย
                              ขณะนั้นใช้เครื่องไมโครคอมพิวเตอร์รุ่น 386 จำนวน 30
                              เครื่อง เป็นอุปกรณ์ที่ใช้ในการเรียนการสอน
                              โดยสำนักงานของภาควิชาวิทยาการคอมพิวเตอร์ตั้งอยู่ที่อาคารเรียนรวมทางวิทยาศาสตร์
                              (หลังเก่า) 2 ชั้น
                            </p>
                            <p class="my-6 rem2">
                              <b>ปีการศึกษา 2538 </b
                              >ภาควิชาวิทยาการคอมพิวเตอร์ได้เปิดสอนหลักสูตรสาขาวิชาวิทยาการคอมพิวเตอร์ขึ้น เป็นสาขาวิชาแรกในคณะวิทยาศาสตร์ โดยมีนักศึกษาเข้าศึกษาเป็นรุ่นแรกจำนวน 38 คน พร้อมกับได้รับงบประมาณจัดซื้อเครื่องไมโครคอมพิวเตอร์คอมพิวเตอร์รุ่น486 เพิ่มอีกจำนวน 30 เครื่อง ต่อจากนั้นในแต่ละปีการศึกษาก็รับนักศึกษาเข้าใหม่อีกปีละประมาณ 50 คน
                            </p>

                            <p class="my-6 rem2">
                              <b>ปีการศึกษา 2543 </b>
                              สาขาวิชาวิทยาการคอมพิวเตอร์ มีจำนวนนักศึกษาทั้ง 4 ชั้นปีประมาณ 200 คน และมีนักศึกษาที่สำเร็จการศึกษาจบตามหลักสูตร ออกไปรับใช้ประเทศชาติแล้วจำนวน 2 รุ่น ประมาณ 65 คน  ขณะนั้นภาควิชาวิทยาการคอมพิวเตอร์ได้ย้ายสำนักงานมาอยู่ที่อาคารเรียนรวมทางวิทยาศาสตร์ (หลังใหม่) ชั้นที่ 6 โดยมีห้องปฏิบัติการคอมพิวเตอร์เบื้องต้นสำหรับนักศึกษาสาขาวิชาอื่น ๆ เพิ่มอีกจำนวน 2 ห้องปฏิบัติการ โดยติดตั้งระบบ LAN ที่ใช้เครื่องไมโครคอมพิวเตอร์ Pentium III 500 MHz ใช้ระบบปฏิบัติการ WINDOWS 98 จำนวน 50 เครื่อง ห้องปฏิบัติการคอมพิวเตอร์สำหรับนักศึกษาสาขาวิชาวิทยาการคอมพิวเตอร์ จำนวน 2 ห้อง โดยติดตั้งระบบ LAN ที่ใช้เครื่องไมโครคอมพิวเตอร์ Pentium III 500 MHz ระบบปฏิบัติการ WINDOWS NT จำนวน 100 เครื่อง ห้องปฏิบัติการคอมพิวเตอร์ระบบ UNIX สำหรับงานวิจัยของคณาจารย์และงานสำหรับทำโครงงาน คอมพิวเตอร์ของนักศึกษาสาขาวิชาวิทยาการคอมพิวเตอร์ชั้นปีที่ 4 ประกอบด้วยไมโครคอมพิวเตอร์ SUN จำนวน 5 เครื่อง เครื่องไมโครคอมพิวเตอร์ Silicon Graphic จำนวน 2 เครื่อง และเครื่องไมโครคอมพิวเตอร์ Pentium III 500 MHz จำนวน 3 เครื่อง
                            </p>
                            <p class="my-6 rem2">
                              <b>ปีการศึกษา 2545 </b>
                              ภาควิชาวิทยาการคอมพิวเตอร์ เริ่มเปิดการเรียนการสอนหลักสูตรสาขาวิชาที่ 2 คือ หลักสูตรสาขาวิชาเทคโนโลยีสารสนเทศ สังกัดภาควิชาวิทยาการคอมพิวเตอร์ มีนักศึกษาภาคปกติ จำนวนประมาณ 55 คนและภาคสมทบ จำนวนประมาณ 90 คน
          ปีการศึกษา 2547 ภาควิชาวิทยาการคอมพิวเตอร์ ได้เพิ่มจำนวนห้องเรียนปฏิบัติการคอมพิวเตอร์ จำนวน 1 ห้องเรียน และห้องบรรยายคอมพิวเตอร์จำนวน 1 ห้องเรียน สำหรับใช้ในการเรียนการสอนของสาขาวิชาเทคโนโลยีสารสนเทศ โดยตั้งอยู่ที่อาคารเรียนรวมทางวิทยาศาสตร์ (หลังเก่า) 2 ชั้น และจัดซื้อเครื่องไมโครคอมพิวเตอร์ Intel รุ่น Pentium 4 ความเร็วขนาด 3.0 GHz จำนวน 20 เครื่อง
                            </p>
                            <p class="my-6 rem2">
                              <b>ปีการศึกษา 2549 </b>ภาควิชาวิทยาการคอมพิวเตอร์ รับอาจารย์มาเพิ่มจำนวน 2 คน และมีอาจารย์ที่ได้รับทุนการศึกษากลับมาปฏิบัติงานจำนวน 2 คน เพื่อรองรับรายวิชาของสาขาวิชาวิทยาการคอมพิวเตอร์และสาขาวิชาเทคโนโลยีสารสนเทศที่มีจำนวนรายวิชาเพิ่มมากขึ้น
                            </p>
                            <p class="my-6 rem2">
                              <b>ปีการศึกษา 2550 </b>ภาควิชาวิทยาการคอมพิวเตอร์ มีจำนวนนักศึกษาทั้ง 2 สาขาวิชา รวมทั้งหมด (ภาคปกติและภาคสมทบ) ประมาณ 433 คน คณาจารย์ 18 คน (รวมทั้งนักเรียนทุนโท-เอกและอาจารย์
ลาศึกษาต่อ)
                            </p>
                            <p class="my-6 rem2">
                              <b>ปีการศึกษา 2551 </b>ภาควิชาวิทยาการคอมพิวเตอร์ ยกเลิกภาควิชาเปลี่ยนแปลงเป็น สาขาวิชาวิทยาการคอมพิวเตอร์ แยกตัวออกจากสาขาวิชาเทคโนโลยีสารสนเทศ
                            </p>
                            <p class="my-6 rem2">
                              <b>ปีการศึกษา 2554 </b>สาขาวิชาวิทยาการคอมพิวเตอร์ รับสมัครพนักงานมหาวิทยาลัยตำแหน่งอาจารย์วุฒิการศึกษาระดับปริญญาโท จำนวน 1 อัตรา
                            </p>
                            <p class="my-6 rem2">
                              <b>ปีการศึกษา 2555 </b>สาขาวิชาวิทยาการคอมพิวเตอร์ มีห้องปฏิบัติการคอมพิวเตอร์ใหม่เพิ่มอีก  จำนวน 1 ห้อง คือ ห้องปฏิบัติการคอมพิวเตอร์ 3203 ชั้น 2 อาคารจุฬาภรณ์  โดยได้จัดซื้อเครื่องไมโครคอมพิวเตอร์ Intel รุ่น Core i7  จำนวน 46 เครื่อง และมีห้องสำหรับวิจัยทางคอมพิวเตอร์ คือ ห้อง 3204 ชั้น 2 อาคารจุฬาภรณ์ และได้มีการบรรจุพนักงานมหาวิทยาลัยตำแหน่งอาจารย์ระดับปริญญาเอก จำนวน 1 คน สาขาวิชาได้มีโลโก้ของสาขาวิชาฯ โดยเป็นผลงานการออกแบบของนักศึกษาและทางสาขาวิชาฯได้ปรับปรุงสีให้เหมาะสมโดยใช้สีฟ้าเข้มเป็นสัญลักษณ์ของสาขาวิชาฯ  สาขาวิชาวิทยาการคอมพิวเตอร์ มีจำนวนนักศึกษาที่กำลังศึกษา รวมทั้งหมดประมาณ 472 คน คณาจารย์ 14 คน (รวมทั้งนักเรียนทุนโท-เอกและอาจารย์ลาศึกษาต่อ) 
                            </p>



                            
                          </div>

                          <div
                            v-bind:class="{
                              hidden: openTab !== 2,
                              block: openTab === 2,
                            }"
                          >
                             <p
                              class="mt-8 text-2xl font-bold leading-relaxed text-center"
                            >
                            พันธกิจสาขาวิทยาการคอมพิวเตอร์
                            </p>
                             <p
                              class="mb-8 text-xl font-bold leading-relaxed text-center"
                            >
                              คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                            </p>
                            <p class="my-6 rem2">
                                   จัดการเรียนการสอนวิชาพื้นฐานและผลิตบัณฑิตทางด้านวิทยาการคอมพิวเตอร์ เทคโนโลยีสารสนเทศ ให้มีความรู้ทั้งทางทฤษฎีและปฏิบัติ  ดำเนินการวิจัยทางด้านวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศโดยคำนึงถึงความรู้และการประยุกต์ใช้ผสมผสานให้เกิดการพัฒนาท้องถิ่นและประเทศชาติ เพื่อเผยแพร่และบริการความรู้ทางด้านวิทยาการคอมพิวเตอร์ เทคโนโลยีสารสนเทศแก่ชุมชนส่งเสริมและเข้าร่วมในกิจกรรมทำนุบำรุงศิลปวัฒนธรรมตามประเพณี
                            </p>
                          </div>
                          <div
                            v-bind:class="{
                              hidden: openTab !== 3,
                              block: openTab === 3,
                            }"
                          >
                            <p
                              class="mt-8 text-2xl font-bold leading-relaxed text-center"
                            >
                             วิสัยทัศน์สาขาวิทยาการคอมพิวเตอร์
                            </p>
                             <p
                              class="mb-8 text-xl font-bold leading-relaxed text-center"
                            >
                              คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                            </p>
                               <p class="my-6 rem2">
                              สาขาวิชาวิทยาการคอมพิวเตอร์ ได้กำหนดวิสัยทัศน์ คือ<b> “มุ่งเน้นพัฒนาให้ภาควิชาเป็นศูนย์กลางความเป็นเลิศทางวิชาการเรียนรู้ งานวิจัย ทางด้านวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ ที่มีขีดความสามารถในการแข่งขัน ระดับประเทศและนานาชาติ พร้อมทั้งมุ่งพัฒนาและสร้างบัณฑิตที่มีความรู้ความสามารถและมีคุณภาพเข้าสู่ตลาดแรงงาน รวมถึงยึดมั่นในคุณธรรม” </b>ขณะเดียวกันภาควิชายังยึดถือและปฏิบัติตามวิสัยทัศน์ของ คณะวิทยาศาสตร์ และมหาวิทยาลัยแม่โจ้
                            </p>
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



export default {
  data() {
    return {
     
      openTab: 1,
    };
  },
  components: {
    Navbar,
    MainFooter,
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
