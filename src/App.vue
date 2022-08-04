<template>
  <div class="container">
    <appHeader></appHeader>
    <main>
      <section class="sec-one">
        <div class="img-sec-one-wrapper">
          <img src="../src/assets/img/sec-one-img.svg" alt="" srcset="" />
        </div>

        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p v-font-size
          >Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and
          co-workers.
        </p>
        <button>Get Started</button>
      </section>
      <section class="sec-two">
        <feature-list v-for="(feature, idx) in features" :feature="feature" :key="idx" />
      </section>
      <section class="sec-tree">
        <img src="../src/assets/img/sec-3-img.svg" alt="" srcset="" />

        <div class="sec-tree-content">
          <h2>Stay productive, wherever you are</h2>
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
          <a href="">See how Fylo works <span class="material-icons"> arrow_forward </span></a>
        </div>
      </section>
      <section class="sec-four">
        <reviewList v-for="(review, idx) in reviews" :review="review" :key="idx"></reviewList>
      </section>
    </main>
  </div>
</template>

<script>
  import { service } from '../src/service/service.js';
  import appHeader from '../src/components/app-header.vue';
  import featureList from '../src/components/feature-list.vue';
  import reviewList from './components/review-list.vue';
  export default {
    data() {
      return {
        features: service.query(),
        reviews: service.getReview(),
      };
    },
    components: {
      appHeader,
      featureList,
      reviewList,
    },
  };
</script>
