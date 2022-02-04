<template>
  <div class="flex items-center min-h-screen p-6 bg-white dark:bg-gray-900">
    <div
      class="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg  dark:bg-gray-800"
    >
      <div
        class="cssanimation sequence fadeInBottom flex flex-col items-center py-10 overflow-y-auto custom md:flex-col"
      >
        <img class="h-48" src="@/assets/img/logo.png" alt="404 not found" />
        <!-- <img class="" src="@/assets/img/404.gif" alt="404 not found" /> -->

        <p
          class="cssanimation sequence fadeInBottom text-shadow text-2xl mt-10 text-blueGray-700 dark:text-gray-300"
        >
          ไม่พบหน้าที่คุณต้องการ!

          <router-link to="/" class="text-teal-500" href="#">
            กลับหน้าหลัก
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


