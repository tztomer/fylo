<template>
  <div class="review-card">
    <p>{{ review.txt }}</p>
    <div class="card-footer">
      <img :src="review.src" alt="" />
      <div class="card-inner">
        <p class="name">{{ review.name }}</p>
        <p class="title">{{ review.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'review-list',
    props: {
      review: { type: Object },
    },
  };
</script>
