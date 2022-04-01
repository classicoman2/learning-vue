<template>
  <h1>Usuaris Registrats:</h1>
  <slot></slot>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Username</th>
        <th scope="col">email</th>
        <th scope="col">country</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in $store.state.users" :key="user">
        <td>{{ user.firstname }}</td>
        <td>{{ user.lastname }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.country }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UsuarisRegistrats'
}
</script>
