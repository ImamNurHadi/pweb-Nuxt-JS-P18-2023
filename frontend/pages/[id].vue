<template>
  <div class="single-blog container mx-auto">
    <nuxt-link
      class="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      to="/"
    >
      Back
    </nuxt-link>

    <div v-if="blogDetails" class="blog-info flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-8">
      <div class="blog-img w-full lg:w-1/2">
        <img
          :src="blogDetails.image"
          :alt="blogDetails.title"
          class="max-h-96 w-full object-cover rounded shadow-lg"
        />
      </div>

      <div class="blog-content w-full lg:w-1/2">
        <h1 class="text-3xl font-semibold mb-4">{{ blogDetails.title }}</h1>

        <div class="text-lg mb-4">
          <p class="mb-2">
            <span class="font-semibold">Date:</span> {{ blogDetails.date }}
          </p>
          <p class="mb-2">
            <span class="font-semibold">Writer:</span> {{ blogDetails.writer }}
          </p>
          <p>
            <span class="font-semibold">Content:</span> {{ blogDetails.fullcontent }}
          </p>
        </div>

        <!-- Add any additional content or styling here -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogDetails: null, // To store the details of a specific blog
    };
  },
  async mounted() {
    // Fetch blog details based on the ID from the route params
    await this.fetchBlogDetails();
  },
  methods: {
    async fetchBlogDetails() {
      const blogId = this.$route.params.id; // Get the blog ID from route params

      try {
        const response = await axios.get(
          `http://localhost:3100/api/blog/${blogId}`
        );
        const blogData = response.data;

        this.blogDetails = {
          title: blogData.title,
          date: blogData.date,
          writer: blogData.writer,
          fullcontent: blogData.fullcontent,
          image: blogData.image,
        };
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    },
  },
};
</script>
