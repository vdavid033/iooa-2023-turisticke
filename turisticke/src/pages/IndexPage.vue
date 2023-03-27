<template>
  <div>
    <q-btn label="Klikni me!" color="primary" @click="showAlert" />
    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <q-item-label header> Pažnja!!! </q-item-label>
          <q-item-label> Kliknili ste na dugme </q-item-label>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="OK" color="primary" @click="closeDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>

  <div>
    <q-btn @click="redirectToWebsite">Idi na VeleRi početnu stranicu</q-btn>
  </div>

  <q-page class="flex flex-center">
    <div class="text-center">
      <img
        alt="Veleri logo"
        src="~assets/veleri-logo-horizontal.png"
        style="width: 500px; height: 200px"
      />
      <H4>Veleučilište u Rijeci</H4>
    </div>
  </q-page>


</template>

<<<<<<< HEAD



=======
>>>>>>> 0ef926d5be0b1e90dfef31cce32ec05e23e16ea7
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  data() {


    return {
      showDialog: false,
    };
  },
  methods: {
    showAlert() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },

<<<<<<< HEAD

=======
    redirectToWebsite() {
      window.location.href = "https://www.veleri.hr/hr";
    },
  },
});
>>>>>>> 0ef926d5be0b1e90dfef31cce32ec05e23e16ea7
</script>


<style>

body{
background-color:aqua;

}

</style>