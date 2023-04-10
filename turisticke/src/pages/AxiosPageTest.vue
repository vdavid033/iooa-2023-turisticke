<template>
  <div class="q-pa-md">
    <h5>AXIOS</h5>
  </div>

  <div class="q-pa-md">
    <q-table
      title="Podaci iz tablice ATRAKCIJE"
      :rows="posts"
      :columns="columns"
      row-key="name"
    />
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" to="/" label="Natrag na početnu" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {api} from 'boot/axios';

const posts = ref([])

const columns = [
  { name: 'id_atrakcije', align: 'left', label: 'ID', field: 'id_atrakcije', sortable: true },
  { name: 'naziv', align: 'left', label: 'Naziv', field: 'naziv', sortable: true },
  { name: 'opis', align: 'left', label: 'Opis', field: 'opis', sortable: false },
  { name: 'slika', align: 'left', label: 'Slika', field: 'slika', sortable: false },
  { name: 'prosjecna_ocjena', align: 'left', label: 'Prosječna ocjena', field: 'prosjecna_ocjena', sortable: true },
  { name: 'geografska_sirina', align: 'left', label: 'GEO širina', field: 'geografska_sirina', sortable: true },
  { name: 'geografska_duzina', align: 'left', label: 'Geo dužina', field: 'geografska_duzina', sortable: true },
  { name: 'adresa', align: 'left', label: 'Adresa', field: 'adresa', sortable: false }
]


const getPosts = async () => {
  try{
    const response = await api.get('atrakcije', 'config')
    console.log(response.data)
    posts.value = response.data

  }catch (error){
    console.log(error)
  }

}

onMounted(() => {
  getPosts()
})

</script>
