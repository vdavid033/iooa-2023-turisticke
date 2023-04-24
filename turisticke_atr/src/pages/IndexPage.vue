<template>
    <q-page padding class="flex flex-center">
        <div class="q-gutter-md" style="max-width: 350px">
            <q-input v-model="inputNaziv" label="Naziv" placeholder="Naziv atrakcije">
            </q-input>

            <q-input v-model="inputOpis" label="Opis" placeholder="Opis atrakcije">
            </q-input>

            <q-input v-model="inputLokacija" label="Lokacija" placeholder="Lokacija atrakcije">
            </q-input>

            <q-uploader url="http://localhost:8080/upload" label="Slika atrakcije" style="max-width: 300px" />

            <q-input v-model="inputSirina" label="Širina" placeholder="Grografska Širina atr">
            </q-input>

            <q-input v-model="inputDuzina" label="Dužina" placeholder="Geografska dužina atr">
            </q-input>
            <div class="row justify-center q-pa-md">
              <q-btn
              label="Unesi"
              @click="submitForm"
              color="green"
              class="q-ml-sm"
            />
            </div>
        </div>
    </q-page>
</template>

<script>

/*
import { ref } from 'vue'
*/
import axios from 'axios' // Import axios
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
export default {

  methods: {
    async submitForm () {
      const sampleData = {
        naziv: 'Test',
        opis: 'testiranje',
        prosjecna_ocjena: '5',
        geografska_sirina: '15.2',
        geografska_duzina: '20.0',
        adresa: 'Test svrha'
      }
      try {
        const response = await axios.post('http://localhost:3000/unosAtrakcija', sampleData)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}

/*
const inputOpis = ref('')
const inputDuzina = ref('')
const inputSirina = ref('')
const inputLokacija = ref('')
const inputNaziv = ref('')
*/
</script>
