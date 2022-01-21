<template>
  <div>
    <div id="example-1">
      <button @click.stop="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    }
};
</script>

<style></style>
