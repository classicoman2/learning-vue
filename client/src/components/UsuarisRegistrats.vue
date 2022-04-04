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
  name: 'UsuarisRegistrats',
}
</script>

<style lang="scss" scoped>
table {
  width: 800px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

th,
td {
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
}

th {
  text-align: left;
}

thead {
  th {
    background-color: #55608f;
  }
}

tbody {
  tr {
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
  td {
    position: relative;
    &:hover {
      &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: -9999px;
        bottom: -9999px;
        background-color: rgba(255, 255, 255, 0.2);
        z-index: -1;
      }
    }
  }
}
</style>
