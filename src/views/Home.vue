<template>
  <div class="home">
    <UsuarisRegistrats>
      <!-- //TIP-slot-->
      <div class="text-center">
        <NovaEntradaModal />
      </div>
    </UsuarisRegistrats>
  </div>
</template>

<script>
// @ is an alias to /src
import UsuarisRegistrats from '../components/UsuarisRegistrats.vue'
import NovaEntradaModal from '../components/NovaEntradaModal.vue'

export default {
  name: 'Home',
  components: {
    UsuarisRegistrats,
    NovaEntradaModal
  }
}
</script>

