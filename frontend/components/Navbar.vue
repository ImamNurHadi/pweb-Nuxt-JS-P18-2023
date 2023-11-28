<template>
  <nav>
    <div class="container mx-auto flex items-center justify-between py-4">
      <!-- Logo -->
      <a class="text-3xl font-bold text-white" href="/">
        AIA
      </a>

      <!-- Navbar Links -->
      <ul class="hidden md:flex space-x-6">
        <li><router-link class="text-white hover:text-gray-200" to="/">Home</router-link></li>
        <li><router-link class="text-white hover:text-gray-200" to="/blogs">Blogs</router-link></li>
        <li><router-link class="text-white hover:text-gray-200" to="/menu">About</router-link></li>
      </ul>


    </div>
  </nav>
</template>

<script>
export default {
};
</script>

<style scoped>
/* Add scoped styles here if needed */
/* Add an active state style */
.router-link-exact-active {
  color: #AC3B61; /* Active color */
  font-weight: bold;
}

/* Navbar Background Color */
nav {
  background-color: #123C69;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Navbar Link Styles */
.router-link {
  transition: color 0.3s ease-in-out;
  color: #fff; /* Default link color */
}

.router-link:hover {
  color: #AC3B61; /* Hover link color */
}
</style>

