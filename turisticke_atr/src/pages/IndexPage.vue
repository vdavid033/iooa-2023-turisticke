<template>
  <q-page
  padding
   class="flex flex-center"
  >
  <div class="q-gutter-md" style="max-width: 350px">
    <q-input v-model="inputNaziv"
    label="Naziv"
    placeholder="Naziv atrakcije">
   </q-input>

    <q-input v-model="inputOpis"
    label="Opis"
    placeholder="Opis atrakcije">
  </q-input>

  <q-input v-model="inputLokacija"
    label="Lokacija"
    placeholder="Lokacija atrakcije">
  </q-input>

  <q-uploader
        url="http://localhost:4444/upload"
        label="Slika atrakcije"
        style="max-width: 300px"
      />

  <q-input v-model="inputSirina"
    label="Širina"
    placeholder="Grografska Širina atr">
  </q-input>

  <q-input v-model="inputDuzina"
    label="Dužina"
    placeholder="Geografska dužina atr">
  </q-input>
  <div class="row justify-center q-pa-md">
    <q-btn align="between" unelevated color="primary" label="Potvrdi" text-align="center" />
  </div>
</div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const inputOpis = ref('')
const inputDuzina = ref('')
const inputSirina = ref('')
const inputLokacija = ref('')
const inputNaziv = ref('')

</script>
