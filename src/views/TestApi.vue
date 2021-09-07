<template>
  <div class="text-center font-weight mt-lg">
    <h1>Example</h1>
    <h2>Test Database Vue.js mixed Laravel.php</h2>

    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap">
        <div class="flex-1 w-full px-4">
          <span
            class="block p-3 my-4 text-sm border border-solid rounded text-blueGray-700 border-blueGray-100"
            >ID</span
          >
        </div>
        <div class="flex-1 w-full px-4">
          <span
            class="block p-3 my-4 text-sm border border-solid rounded text-blueGray-700 border-blueGray-100"
            >Name</span
          >
        </div>
        <div class="flex-1 w-full px-4">
          <span
            class="block p-3 my-4 text-sm border border-solid rounded text-blueGray-700 border-blueGray-100"
            >Lastname</span
          >
        </div>
      </div>
      <div
        v-for="personnel in personnel_array"
        v-bind:key="personnel.personnelId"
        class="flex flex-wrap"
      >
        <div class="flex-1 w-full px-4">
          <span
            class="block p-3 my-4 text-sm border border-solid rounded text-blueGray-700 border-blueGray-100"
            >{{ personnel.personnelId }}</span
          >
        </div>
        <div class="flex-1 w-full px-4">
          <span
            class="block p-3 my-4 text-sm border border-solid rounded text-blueGray-700 border-blueGray-100"
            >{{ personnel.firstName }}</span
          >
        </div>
        <div class="flex-1 w-full px-4">
          <span
            class="block p-3 my-4 text-sm border border-solid rounded text-blueGray-700 border-blueGray-100"
            >{{ personnel.lastName }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      axios.get("http://wwwdev.csmju.com/api/personnel").then((Response) => {
        //console.log(Response);
        this.personnel_array = Response.data;
      });
    },
    deleteUser(id, index) {
      //console.log(id);
      axios
        .delete("http://wwwdev.csmju.com/api/personnel/" + id)
        .then((Response) => {
          console.log(Response);
          this.personnel_array.splice(index, 1);
        });
    },
  },
  data() {
    return {
      personnel_array: [],
      personnel: {
        personnelId: 0,
        firstName: "",
        lastName: "",
      },
    };
  },
};
</script>
