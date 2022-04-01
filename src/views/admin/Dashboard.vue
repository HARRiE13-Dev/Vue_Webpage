<template>
  <div>
    <!-- <div class="flex flex-wrap">
      <div class="w-full px-4 mb-12 xl:w-12/12 xl:mb-0">
        <card-line-chart />
      </div>
    </div> -->
    <div class="flex flex-wrap mt-4">
      <div class="w-full px-4 mb-12 xl:w-12/12 xl:mb-0">
        <card-page-visits />
      </div>
    </div>
  </div>
</template>
<script>
// import CardLineChart from "@/components/Cards/CardLineChart.vue";

import CardPageVisits from "@/components/Cards/CardPageVisits.vue";

export default {
  name: "dashboard-page",
  components: {
    // CardLineChart,

    CardPageVisits,
  },
};
</script>
