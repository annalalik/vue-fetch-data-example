<template>
  <div>
    <h2>Dodaj nowego użytkownika</h2>
    <div class="input__wrapper">
      <input
        class="input__field"
        v-model="username"
        placeholder="Entry user name"
      />
      <button class="input__button" v-on:click="addUser()">
        Dodaj użytkownika do listy
      </button>
    </div>

    <div v-for="(user, index) in users" :key="index" class="user__list--item">
      <p>{{ user.username }}</p>
    </div>
    <button class="back__button">
      <router-link to="/">Wróć do strony glównej</router-link>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      username: "",
    };
  },

  async created() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      requestOptions
    );
    const data = await response.json();
    this.users.push(...data);
  },

  methods: {
    async addUser() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/",
        {
          method: "POST",
          body: JSON.stringify({
            username: this.username,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      // now, ID is the same for every new entries, because the response from server is not corrected
      if (response.ok) {
        const newUser = await response.json();
        this.users.push(newUser);
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
h2 {
  color: #0a655e;
  letter-spacing: 6px;
  text-transform: uppercase;
}

.input__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input__field {
  width: 150px;
  height: 44px;
}

.back__button,
.input__button {
  background-color: #d1b352;
  border: 1px solid #d1b352;
  color: #0a655e;
  box-shadow: 5px 5px 15px hsla(175, 100%, 17%, 0.071);
  text-transform: uppercase;
}

.input__button {
  width: 150px;
  height: 50px;
  border-radius: 0 5px 5px 0;
}

.back__button {
  margin: 10px;
  width: 300px;
  height: 50px;
  font-size: 16px;
  border-radius: 5px;
}

.back__button a {
  color: #0a655e;
  text-decoration: none;
  letter-spacing: 2px;
}

.back__button:hover,
.input__button:hover {
  background-color: #c09d28;
  color: white;
}

.back__button:hover a {
  color: white;
}
</style>
