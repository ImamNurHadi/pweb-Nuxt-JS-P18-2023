<template>
    <div :style="{ backgroundImage: 'url(https://picsum.photos/id/16/2500/1667/)', height: 'calc(100vh - 64px)' }" class="bg-primary text-white py-16 bg-cover bg-center relative">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="container mx-auto text-center relative z-10">
        <h1 class="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
        <p class="text-lg">Discover the latest trends and insightful articles on our blog.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Hero',
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
  
  /* Background styles */
  .bg-cover {
    background-size: cover;
  }
  
  .bg-center {
    background-position: center center;
  }
  </style>
  