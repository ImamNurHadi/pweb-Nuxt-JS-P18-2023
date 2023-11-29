<template>
    <div>
      <!-- Content -->
      <div class="display">
        <div class="content">
          <div class="tombol">
            <button @click="toggleTim">
              Dimana Aku?
            </button>
          </div>
          <div class="tim" v-if="showTim">
            <div class="card">
              <div class="card-details">
                <p class="text-title">Imam Nurhadi</p>
                <p class="text-body">Entry Fragger AyoBeliPiscok menggunakan Raze</p>
              </div>
              <button class="card-button">More info</button>
            </div>
  
            <div class="card">
              <div class="card-details">
                <p class="text-title">M. Arkananta R.T.</p>
                <p class="text-body">Smoker Idaman Bontang, sering marahin pengguna Raze karena nafsu</p>
              </div>
              <button class="card-button">More info</button>
            </div>
  
            <div class="card">
              <div class="card-details">
                <p class="text-title">Nur Aazka R. </p>
                <p class="text-body">KETUPEL GARPIT yang ngide beli pizza DOMINO</p>
              </div>
              <button class="card-button">More info</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <footer>
        <div class="container mx-auto flex items-center justify-between py-4">
          <div>
            <p class="text-white">&copy; 2023 AIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <style scoped>
.display {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 5vh;
  margin-top: 5vh;
  margin-bottom: 10vh;
  width: 70%;
  height: auto;
  max-width: 80%;   
  max-height: 100vh;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  position: relative;
}

.tombol {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.tim {
  display: flex;
  gap: 1rem; /* Menambahkan jarak antar card */
  margin-top: 7%;
  margin-bottom: 5%;
}
  button {
    background-color: white;
    color: black;
    border-radius: 10em;
    font-size: 17px;
    font-weight: 600;
    padding: 1em 2em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid black;
    box-shadow: 0 0 0 0 black;
  }
  
  button:hover {
    transform: translateY(-4px) translateX(-2px);
    box-shadow: 2px 5px 0 0 black;
  }
  
  button:active {
    transform: translateY(2px) translateX(1px);
    box-shadow: 0 0 0 0 black;
  }
  
  .card {
    width: 190px;
    height: auto;
    border-radius: 20px;
    background: #f5f5f5;
    position: relative;
    padding: 1.8rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 1rem;
  }
  
  .card-details {
    color: black;
    gap: .5em;
    display: grid;
    place-content: center;
  }
  
  .card-button {
    transform: translateX(-50%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #008bf8;
    color: #fff;
    font-size: 1rem;
    padding: .5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 1rem;
    opacity: 0;
    transition: 0.3s ease-out;
  }
  
  .text-body {
    color: rgb(134, 134, 134);
  }
  
  .text-title {
    font-size: 1.5em;
    font-weight: bold;
  }
  
  .card:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }
  
  .card:hover .card-button {
    transform: translateY(-50%);
    opacity: 1;
  }
  
  footer {
  background-color: #123C69;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: auto;
  width: 100%;
}   
  </style>
  
  <script>
export default {
  data() {
    return {
      showTim: false,
    };
  },
  methods: {
    toggleTim() {
      this.showTim = !this.showTim;
    },
  },
};
</script>