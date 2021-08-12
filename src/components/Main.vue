<template>
  <div>
    <h1>JSON Placeholder API - operacje na danych</h1>
    <button class="router__button">
      <router-link to="/list">Widok listy</router-link>
    </button>
    <button class="router__button">
      <router-link to="/new-entry">Nowy wpis</router-link>
    </button>
  </div>
</template>

<script></script>

<style scoped>
* {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
h1 {
  color: #0a655e;
  letter-spacing: 6px;
  text-transform: uppercase;
}

.router__button {
  width: 200px;
  height: 100px;
  margin: 10px;
  background-color: #d1b352;
  border: 1px solid #d1b352;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 5px 5px 15px #00585112;
  text-transform: uppercase;
}

.router__button a {
  color: #0a655e;
  text-decoration: none;
  letter-spacing: 4px;
}

.router__button:hover {
  background-color: #c09d28;
}

.router__button:hover a {
  color: white;
}
</style>
