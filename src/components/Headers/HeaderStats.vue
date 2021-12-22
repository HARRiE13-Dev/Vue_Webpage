<template>
  <!-- Header -->
  <div class="relative pt-8 pb-32 bg-emerald-600 md:pt-32">
    <div class="w-full px-4 mx-auto md:px-10">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
            <card-stats
              statSubtitle="จำนวนผู้ที่เข้าสู่ระบบ"
              statTitle="10"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>

          <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
            <card-stats
              statSubtitle="API Request"
              statTitle="100 / วินาที"
              statIconName="fas fa-percent"
              statIconColor="bg-emerald-500"
            />
          </div>

          <div class="w-full px-4 lg:w-6/12 xl:w-6/12">
            <card-stats
              statSubtitle="ระบบแจ้งตกค้างรายวิชา"
              statTitle="24 รายการ"
              statIconName="fas fa-percent"
              statIconColor="bg-emerald-500"
            />
          </div>
        </div>
        <div class="flex flex-wrap mt-6">
          <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
            <card-stats
              statSubtitle="ระบบจองห้องเรียน"
              statTitle="0 รายการ"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
            <card-stats
              statSubtitle="ระบบแจ้งซ่อม"
              statTitle="3 รายการ"
              statArrow="down"
              statPercent="3.48"
              statPercentColor="text-red-500"
              statDescripiron="Since last week"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-orange-500"
            />
          </div>
          <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
            <card-stats
              statSubtitle="ระบบร้องเรียน"
              statTitle="15 รายการ"
              statArrow="down"
              statPercent="1.10"
              statPercentColor="text-orange-500"
              statDescripiron="Since yesterday"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
          </div>
          <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
            <card-stats
              statSubtitle="ระบบยืม-คืน"
              statTitle="1 รายการ"
              statArrow="up"
              statPercent="12"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="fas fa-percent"
              statIconColor="bg-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";

export default {
  components: {
    CardStats,
  },
};
</script>
