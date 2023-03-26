<template>
  <div>
    <q-btn label="Klikni me!" color="primary" @click="showAlert" />
    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <q-item-label header>
            Pažnja!!!
          </q-item-label>
          <q-item-label>
            Kliknili ste na dugme
          </q-item-label>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="OK" color="primary" @click="closeDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>


  </div>

  <q-page class="flex flex-center">
    <div class="text-center">
      <img alt="Veleri logo" src="~assets/veleri-logo-horizontal.png" style="width: 500px; height: 200px">
      <H4>Veleučilište u Rijeci</H4>
    </div>

  </q-page>
</template>


<script>



import { defineComponent } from 'vue'


export default defineComponent({
  name: 'IndexPage',



  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    showAlert() {
      this.showDialog = true
    },
    closeDialog() {
      this.showDialog = false
    }
  }
})


</script>
