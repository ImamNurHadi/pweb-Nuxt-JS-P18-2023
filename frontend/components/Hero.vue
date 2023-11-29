<template>
  <div :style="{ backgroundImage: 'url(https://picsum.photos/id/16/2500/1667/)', height: 'calc(100vh - 64px)' }" class="bg-primary text-white py-16 bg-cover bg-center relative">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="container mx-auto text-center relative z-10">
      <h1 class="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
      <p class="text-lg">Discover the latest trends and insightful articles on our blog.</p>
      
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg overflow-hidden shadow-lg relative">
          <img src="https://via.placeholder.com/400x250" alt="Article Image" class="w-full h-48 object-cover object-center">
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">Article Title 1</h2>
            <p class="text-gray-600 leading-relaxed">Brief description of the article content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" class="block absolute bottom-0 left-0 w-full bg-accent text-white text-center font-semibold py-2 hover:bg-accent-dark transition duration-300">Read more</a>
          </div>
        </div>
        
        <div class="bg-white rounded-lg overflow-hidden shadow-lg relative">
          <img src="https://via.placeholder.com/400x250" alt="Article Image" class="w-full h-48 object-cover object-center">
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">Article Title 2</h2>
            <p class="text-gray-600 leading-relaxed">Brief description of the article content. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <a href="#" class="block absolute bottom-0 left-0 w-full bg-accent text-white text-center font-semibold py-2 hover:bg-accent-dark transition duration-300">Read more</a>
          </div>
        </div>
      </div>
      
      <div class="mt-12">
        <a href="/blog" class="bg-accent text-white font-semibold py-3 px-6 rounded-full hover:bg-accent-dark transition duration-300">Explore More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style scoped>

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

.container {
  padding-left: 1rem;
  padding-right: 1rem;
}

.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center center;
}

.absolute {
  position: absolute;
}

.bottom-0 {
  bottom: 0;
}

.left-0 {
  left: 0;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.overflow-hidden {
  overflow: hidden;
}

.leading-relaxed {
  line-height: 1.6;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.transition {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transition:hover {
  transform: translateY(-2px);
}

.rounded-full {
  border-radius: 9999px;
}
</style>
