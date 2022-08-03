<template>
  <div class="card">
    <img :src="feature.src" />
    <h3>{{ feature.title }}</h3>
    <p>{{ feature.txt }}</p>
  </div>
</template>

<script>
  export default {
    name: 'feature-list',
    props: {
      feature: { type: Object },
    },
  };
</script>
