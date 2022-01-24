<template>
  <div>
    <input ref="fileupload" type="file" @change="onFileSelected" />
    <img v-if="imgUrl" :src="imgUrl" class="w-24" />
    <img @change="endcode()" alt="" />
    <button @click="encode">encode</button>

    <p>
      {{ this.base64 }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
      base64: "",

      imgUrl: "",
      file: null,

      inputBase64: "",
    };
  },
  methods: {
    onFileSelected(event) {
      const file = event.target.files[0];
      this.file = event.target.files[0];
      this.imgUrl = URL.createObjectURL(file);
    },
    encode() {
      var file = this.file;

      var reader = new FileReader();

      reader.onload = function() {
        var base64String = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        this.base64 = base64String;
        alert(this.base64);
      };
      reader.readAsDataURL(file);
    },
  },
  mounted() {
    this.decode();
  },
};
</script>

<style></style>
