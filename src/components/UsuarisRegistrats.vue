<template>
  <h1>Usuaris Registrats:</h1>

  <div v-for="user in $store.state.users" :key="user">
    <div>{{ user }}</div>
  </div>

  <NovaEntradaModal />
</template>

<script>
import NovaEntradaModal from './NovaEntradaModal.vue'
export default {
  name: 'UsuarisRegistrats',
  components: {
    NovaEntradaModal,
  },
}
</script>
