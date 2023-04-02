<template>
  <q-page
  padding
   class="flex flex-center"
  >
  <div class="q-gutter-md" style="max-width: 350px">
    <q-input v-model="inputText"
    label="Naziv"
    placeholder="Naziv atrakcije">
   </q-input>

    <q-input v-model="inputText"
    label="Opis"
    placeholder="Opis atrakcije">
  </q-input>

  <q-input v-model="inputText"
    label="Lokacija"
    placeholder="Lokacija atrakcije">
  </q-input>

  <q-uploader
        url="http://localhost:4444/upload"
        label="Slika atrakcije"
        style="max-width: 300px"
      />

  <q-input v-model="inputText"
    label="Širina"
    placeholder="Grografska Širina atr">
  </q-input>

  <q-input v-model="inputText"
    label="Dužina"
    placeholder="Geografska dužina atr">
  </q-input>
</div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const inputText = ref('')
</script>
