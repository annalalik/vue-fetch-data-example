<template>
  <div>
    <h2>Lista użytkowników</h2>
    <div class="user__list">
      <div v-for="user in users" :key="user.id" class="user__list--item">
        <p>{{ user.username }}</p>
        <button class="remover__button" v-on:click="removeUser(user.id)">
          Usuń z listy
        </button>
      </div>
    </div>
    <button class="back__button">
      <router-link to="/">Wróć do strony głównej</router-link>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
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
    async removeUser(userId) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + userId,
        {
          method: "DELETE",
        }
      );

      // according to API docs: Important: resource will not be really updated on the server but it will be faked as if.
      // so, the below code allows to see the result of removing data, but the data is not removed on the server
      if (response.ok) {
        const userIndex = this.users.findIndex((user) => user.id === userId);
        this.users.splice(userIndex, 1);
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

.back__button,
.remover__button {
  margin: 10px;
  background-color: #d1b352;
  border: 1px solid #d1b352;
  color: #0a655e;
  border-radius: 5px;
  box-shadow: 5px 5px 15px hsla(175, 100%, 17%, 0.071);
  text-transform: uppercase;
}

.remover__button {
  width: 100px;
  height: 30px;
  font-size: 14px;
  margin-right: 0;
}

.back__button {
  width: 300px;
  height: 50px;
  font-size: 16px;
}

.back__button a,
.remover__button a {
  color: #0a655e;
  text-decoration: none;
  letter-spacing: 2px;
}

.back__button:hover,
.remover__button:hover {
  background-color: #c09d28;
  color: white;
}

.back__button:hover a,
.remover__button:hover a {
  color: white;
}

.user__list--item {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
}
</style>
