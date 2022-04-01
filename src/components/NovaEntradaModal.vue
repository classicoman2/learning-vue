<template>
  <div class="modal-dialog-backdrop" style="display:none"></div>
  <!-- Button trigger modal -->
  <button @click="showModal" type="button">New User</button>
  <!-- Modal -->
  <div class="modal-dialog" style="display:none">
    <div class="container">
      <!-- TIP: the submit event will no longer reload the page -->
      <form @submit.prevent="onSubmit">
        <h1>Subscription Form</h1>
        <div class="box">
          <label for="firstname">First Name:</label>
          <input v-model="dataForm.firstname" type="text" id="firstname" />
        </div>
        <div class="box">
          <label for="lastname">Last Name:</label>
          <input v-model="dataForm.lastname" type="text" id="lastname" />
        </div>
        <div class="box">
          <label for="username">Username:</label>
          <input v-model="dataForm.username" type="text" id="username" />
        </div>
        <div class="box">
          <label for="telephone">Telephone:</label>
          <input type="text" id="telephone" />
        </div>
        <div class="box">
          <label for="email">Email:</label>
          <!-- TODO: should be a dropdown - placeholder -->
          <input v-model="dataForm.email" type="text" id="email" />
        </div>
        <div class="box">
          <label for="country">Username:</label>
          <!-- TODO: should be a dropdown - pendent -->
          <input v-model="dataForm.country" type="text" id="country" />
        </div>
        <div>
          <button @click="guardarDades" id="sendModal">Guardar</button>
          <button @click="closeModal" id="closeModal">Tancar</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NovaEntradaModal',
  data() {
    return {
      // prettier-ignore
      dataForm: {
        firstname: '', lastname: '', username: '', telephone: '', email: '', country: ''
      }
    }
  },
  methods: {
    showModal() {
      document.querySelector(".modal-dialog").style.display = 'block'
      document.querySelector(".modal-dialog-backdrop").style.display = 'block'
    },
    closeModal() {
      document.querySelector(".modal-dialog").style.display = 'none'
      document.querySelector(".modal-dialog-backdrop").style.display = 'none'
      //TODO: add a CSS Transition!
    },

    guardarDades() {

      //Validate data
      if (this.validateInput(this.dataForm)) {
        //Store the new user
        this.$store.commit('afegirUsuari', this.dataForm);

        //Clear the form
        for (const property in this.dataForm)
          this.dataForm[property] = ''

        //Close the modal
        this.closeModal()
      }
      else {
        // Do nothing
      }
    },

    validateInput() {
      //TODO: pendent validació de form i mostrar missatges (com a classe!)
      return true
    }
  }
}
</script>


<style scoped>
.modal-dialog-backdrop {
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  position: fixed;
  top: 0;
  z-index: 1;
  opacity: 0.8;
}

.modal-dialog {
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 100px;
}

* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

form {
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box {
  display: flex;
  justify-content: center;
  margin: 5px 0px;
  width: 100%;
}

label {
  width: 90px;
  text-align: right;
  margin-right: 6px;
  line-height: 31px;
}

input {
  border: 1px solid #ccc !important;
  padding: 5px;
  min-width: 67%;
}

button {
  color: #fff !important;
  background-color: #2196f3 !important;
  border: 0px;
  padding: 4px 11px;
  margin: 0px 3px;
  font-size: 1.2rem;
  cursor: pointer;
}

button:hover {
  background-color: #4eadfa !important;
}

button:active {
  background-color: #0080e9 !important;
}
</style>