<template>
  <div>
    <section class="container mx-auto my-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="post in blogPosts" :key="post.id" class="rounded-lg overflow-hidden shadow-md">
          <div class="bg-primary relative"> <!-- Add relative positioning to the container -->
            <img :src="post.image" alt="Blog Post Image" class="w-full h-48 object-cover">
            <div class="p-4 flex flex-col justify-between h-full">
              <div>
                <h2 class="text-xl font-bold mb-2 text-white">{{ post.title }}</h2>
                <p class="text-white rounded">{{ post.excerpt }}</p>
              </div>
              <router-link :to="`/blog/${post.id}`" class="inline-block mx-auto mt-4 px-3 py-1 text-white border border-white hover:bg-red-500 transition duration-300 ease-in-out transform hover:scale-105 text-sm rounded-full">Read More</router-link>
              <!-- Center the button using mx-auto (margin auto) -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          title: 'Exploring the Latest Trends',
          excerpt: 'Discover the hottest trends in the industry and stay ahead of the curve.',
          image: 'https://picsum.photos/id/1/1000/1000',
        },
        {
          id: 2,
          title: 'The Art of Blogging',
          excerpt: 'Learn the art of creating engaging and compelling blog content that captivates your audience.',
          image: 'https://picsum.photos/id/1/1000/1000',
        },
        {
          id: 3,
          title: 'The Art of Blogging',
          excerpt: 'Learn the art of creating engaging and compelling blog content that captivates your audience.',
          image: 'https://picsum.photos/id/1/1000/1000',
        },
        {
          id: 4,
          title: 'The Art of Blogging',
          excerpt: 'Learn the art of creating engaging and compelling blog content that captivates your audience.',
          image: 'https://picsum.photos/id/1/1000/1000',
        },
        // Add more blog posts as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add scoped styles here if needed */

/* Color Palette */
.bg-primary {
  background-color: #123C69;
}

.text-primary {
  color: #123C69;
}

.bg-accent {
  background-color: #AC3B61;
}

.text-accent {
  color: #AC3B61;
}

.text-muted {
  color: #BAB2B5;
}

/* Responsive Padding */
.container {
  padding-left: 1rem;
  padding-right: 1rem;
}

.transition {
  transition: all 0.3s ease-in-out;
}

/* Optional: Add a hover effect to scale the button */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Change the background color on hover to red */
.hover\:bg-red-500:hover {
  background-color: #AC3B61; /* Red background color */
}
</style>
