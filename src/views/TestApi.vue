<template>
  <div>
    <section class="w-full flex justify-center items-center my-10">
      <form class="">
        <div class="form-group">

          <label class="text-gray-600 font-semibold text-lg"
            >Phone Number</label
          >
          <div
            v-for="(input, index) in phoneNumbers"
            :key="`phoneInput-${index}`"
            class="input wrapper flex items-center"
          >
            <input
              v-model="input.phone"
              type="text"
              class="h-10 rounded-lg outline-none p-2"
              placeholder=" Enter Phone Number"
            />

            <button
              @click="addField(input, phoneNumbers)"
              class="px-6 py-3 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="button"
            >
              เพิ่ม
            </button>

            <button
              v-show="phoneNumbers.length > 1"
              @click="removeField(index, phoneNumbers)"
              class="px-6 py-3 mb-1 mr-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="button"
            >
              ลบ
            </button>
          </div>
        </div>
      </form>
    </section>

    <div
      v-for="i in phoneNumbers"
      :key="i.phone"
      class="flex text-center text-2xl"
    >
      {{ i.phone }}
    </div>
  </div>
</template>
<script>
export default {
  name: "AddRemove",
  data() {
    return {
      phoneNumbers: [{ phone: "" }],
      
    };
  },
  methods: {
    addField(object, fieldType) {
      let newObject = {};
      for (const [key] of Object.entries(object)) {
        newObject[key] = "";
      }
      fieldType.push(newObject);
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1);
    },
  },
};
</script>
