<template>
  <div class="bg-image">
  <q-page padding class="flex flex-center">
    <q-card style="width: 350px;">
      <q-card-section>
        <div class="q-gutter-md full-with" style="max-width: 500px">
        <div class="full-with">
    <div class="q-gutter-md" style="max-width: 350px">
      <p  class="text-h5 text-weight-light text-center" style="color:#2196F3">Unos nove atrakcije</p>
      <q-input ref="nazivRef" v-model="inputNaziv" label="Naziv" placeholder="Naziv atrakcije">
      </q-input>

      <q-input ref="opisRef" v-model="inputOpis" label="Opis" placeholder="Opis atrakcije">
      </q-input>

      <q-input ref="adresaRef" v-model="inputAdresa" label="Adresa" placeholder="Adresa atrakcije">
      </q-input>

      <q-input ref="slikaRef" v-model="inputSlika" label="Slika" placeholder="https://stranica/slika.jpg">
      </q-input>

      <q-input ref="sirinaRef" v-model="inputSirina" label="Širina" placeholder="Grografska Širina atr">
      </q-input>

      <q-input ref="duzinaRef" v-model="inputDuzina" label="Dužina" placeholder="Geografska dužina atr">
      </q-input>
      <div class="row justify-center q-pa-md">
        <div class="row justify-center q-pa-md">
          <q-btn
          label="Unesi"
          @click="submitForm"
          color="blue"
          class="q-ml-sm"
        />
        </div>
      </div>
    </div>
  </div>
</div>
<q-dialog v-model="showDialog">
      <q-card>
        <q-card-section> Atrakcija je uspješno dodana! </q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            label="Ok"
            color="primary"
            v-close-popup
            @click="closeAndReload"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
</q-card-section>
  </q-card>
</q-page>
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { QDialog } from 'quasar'
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
import axios from 'axios' // Import axios
export default {
  data () {
    return {
      inputNaziv: '',
      inputOpis: '',
      inputDuzina: '',
      inputSirina: '',
      inputAdresa: '',
      inputSlika: ''
    }
  },
  methods: {

    resetForm () {
      this.inputNaziv = ''
      this.inputOpis = ''
      this.inputDuzina = ''
      this.inputSirina = ''
      this.inputAdresa = ''
      this.inputSlika = ''
      this.$refs.slikaRef.resetValidation()
      this.$refs.nazivRef.resetValidation()
      this.$refs.opisRef.resetValidation()
      this.$refs.duzinaRef.resetValidation()
      this.$refs.sirinaRef.resetValidation()
      this.$refs.adresaRef.resetValidation()
    },

    closeAndReload () {
      this.showDialog = false
      window.location.reload()
    },

    async submitForm () {
      const sampleData = {
        naziv: this.inputNaziv,
        opis: this.inputOpis,
        slika: this.inputSlika,
        geografska_duzina: this.inputDuzina,
        geografska_sirina: this.inputSirina,
        adresa: this.inputAdresa
      }
      try {
        const response = await axios.post(
          'http://localhost:3000/unosAtrakcija',
          sampleData
        )
        console.log(response.data)
        this.showDialog = true
        this.resetForm()
      } catch (error) {
        console.error(error)
      }
    }
  }
}

</script>
<style>
  .bg-image {
    background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.williamhortonphotography.com%2Fwp-content%2Fuploads%2F2017%2F09%2FCroatia-Krk-2015-10.jpg&f=1&nofb=1&ipt=374c233d6e256918b9237640e1c0d6b6d0d4a377be4c7dfc38405cba259d2566&ipo=images) ;

  }
</style>
