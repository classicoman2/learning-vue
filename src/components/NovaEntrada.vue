<template>
  <div class="container">
    <div class="modal-header text-center">
      <!-- //TIP-BS Utilities-Text bold text-->
      <h5 class="modal-title fw-bold" id="exampleModalLabel">Crea Usuari</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-md-12">
          <form class="needs-validation" novalidate>
            <div class="row g-3">
              <div class="col-sm-12 text-start">
                <label for="firstname" class="form-label">First name</label>
                <!-- //TIP-v-model -->
                <input v-model="dataForm.firstname" type="text" class="form-control" placeholder value required />
                <div class="invalid-feedback">Valid first name is required.</div>
              </div>
              <div class="col-sm-12 text-start">
                <label for="lastname" class="form-label">Last name</label>
                <input v-model="dataForm.lastname" type="text" class="form-control" id="lastname" value required />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>
              <div class="col-sm-12 text-start">
                <label for="username" class="form-label">Username</label>
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input v-model="dataForm.username" type="text" class="form-control" id="username" required />
                  <div class="invalid-feedback">Your username is required.</div>
                </div>
              </div>
              <div class="col-sm-12 text-start">
                <label for="email" class="form-label">
                  Email
                  <span class="text-muted">(Optional)</span>
                </label>
                <input
                  v-model="dataForm.email"
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div class="invalid-feedback">Please enter a valid email address for shipping updates.</div>
              </div>
              <div class="col-sm-12 text-start">
                <label for="address" class="form-label">Address</label>
                <input v-model="dataForm.address" type="text" class="form-control" id="address" required />
                <div class="invalid-feedback">Please enter your shipping address.</div>
              </div>
              <div class="col-sm-12 text-start">
                <label for="country" class="form-label">Country</label>
                <select v-model="dataForm.country" class="form-select" id="country" required>
                  <option value>Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">Please select a valid country.</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" @click="guardarDades" class="btn btn-primary">Save changes</button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  //TIP-components - No fa falta posar el nom aqui
  name: 'NovaEntrada',
  data() {
    return {
      dataForm: {
        firstname: '',
        lastname: '',
        username: '',
        address: '',
        email: '',
        country: ''
      }
    }
  },
  methods: {
    guardarDades() {
      //Tancar Modal
      this.closeModal()
      //Store the new user
      this.$store.commit('afegirUsuari', this.dataForm);
      //Clear the form
      for (const property in this.dataForm)
        this.dataForm[property] = ''
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
  },

}
</script>

<!-- //TIP-style Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
