<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#novaEntradaModal">Nou Usuari</button>
  <!-- Modal -->
  <div class="modal fade" id="novaEntradaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Crea Usuari</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <NovaEntrada />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" @click="guardarDades" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NovaEntrada from "./NovaEntrada.vue";
export default {
  components: {
    NovaEntrada
  },
  methods: {
    guardarDades() {
      //Tancar Modal
      this.closeModal()
      //TODO Store the new user.

    },
    /**
     * Close the Modal. 
     * //FIX No acaba de tancar bé, ja que s'ha de clicar 2 pics per obrir el modal després.
     */
    closeModal() {
      document.getElementById("novaEntradaModal").classList.toggle("show")
      document.getElementById("novaEntradaModal").style.display = "none"
      document.getElementById("novaEntradaModal").removeAttribute("role")
      document.getElementById("novaEntradaModal").removeAttribute("aria-modal")
      document.getElementById("novaEntradaModal").setAttribute("aria-hidden", true)
      document.querySelector("body").classList.toggle("modal-open")
      document.querySelector("body").style = ""
      document.querySelector(".modal-backdrop").remove()
    }
  }
}

</script>