<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#novaEntradaModal">New User</button>
  <!-- Modal -->
  <div class="modal fade" id="novaEntradaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <NovaEntrada />
      </div>
    </div>
  </div>
</template>


<script>
import NovaEntrada from "./NovaEntrada.vue";
export default {
  name:'NovaEntradaModal',
  components: {
    NovaEntrada
  }
}

</script>