<template>
  <div>
    <section class="productOverview">
      asdasdsad
      <Carousel :itemsToShow="3" :wrapAround="true">
        <Slide v-for="(image, index) in images" :key="image.id">
          <img :src="getImage(image.url)" />
          <button v-if="slidesCount > 1" @click="deleteImage(index)">x</button>
        </Slide>
      </Carousel>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        { id: 1, url: "https://wwwdev.csmju.com/images/news/thumbnail/news_1637999077.jpg" },
        { id: 2, url: "https://wwwdev.csmju.com/images/news/thumbnail/news_1637999347.jpg" },
        { id: 3, url: "https://wwwdev.csmju.com/images/news/thumbnail/news_1637999347.jpg" },
      ],
    };
  },
  methods: {
    getImage(imagePath) {
      return require(imagePath);
    },
  },
});
</script>

<style></style>
