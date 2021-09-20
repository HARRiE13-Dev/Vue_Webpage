<template>
  <Carousel :autoplay="2000" :items-to-show="1.5" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    ...
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel,  Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default 
defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    
  },
});
</script>
