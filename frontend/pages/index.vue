<template>
  <div style="background-color: #EEE2DC;">
    <Navbar />
    <div>
      <Hero />
      <BlogPost />
      <Footer />
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    BlogPost, Navbar
  },
  data() {
    return {
      blogPosts: [
        {
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

</style>
