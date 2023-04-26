

<template>
  <div style="background-color: #229df9">
    <div v-for="post in posts" :key="post.id" class="row q-pa-md">

      <div q-card>
        <q-img :src=post.slika width="800px" height="600px" position="absolute" top="50%" left="50%"
          transform="translate(-50%, -50%)">
          <div class="absolute-bottom text-subtitle1 text-center">
            <div style="text-transform:uppercase; font-size:50px">{{ post.naziv }}</div>
          </div>
        </q-img>
      </div>


      <div class="q-pa-md">
<div class="q-pa-md items-start q-gutter-xs" style="background-color: black; color: white;">
  <h6>Opis: {{ post.opis }}</h6>
  <q-separator color="white" />
  <h6>Adresa: {{ post.adresa }}</h6>
  <q-separator color="white" />
  <h6>Ocjena: {{ post.prosjecna_ocjena }}</h6>
  <q-separator color="white" />
  <h6>Geo širina: {{ post.geografska_sirina }}</h6>
  <q-separator color="white" />
  <h6>Geo dužina: {{ post.geografska_duzina }}</h6>
  <q-separator color="white" />
  <h6>Adresa: {{ post.adresa }}</h6>
</div>

</div>
</div>


    <q-card-section>
      <q-btn  color="black" @click="$router.push('/')" label="Natrag na početnu" />
    </q-card-section>
    <q-card-section>
      <q-btn  color="black" @click="$router.push('/komentari')" label="Dodaj komentar" />
    </q-card-section>
  </div>




</template>



<script setup>

import { ref, onMounted } from "vue"
import { api } from 'boot/axios'
import { useRoute, useRouter } from 'vue-router';

const posts = ref([])
const route = useRoute()
const router = useRouter()

const trenutniID = route.params.id
const getPosts = async () => {
  try {
    const response = await api.get(`/atrakcije/${trenutniID}`)
    posts.value = response.data

    console.log("ID je: ", trenutniID)
    console.log("Podatak iz baze po ID: ", posts.value)

  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getPosts()
})


</script>




<style scoped></style>


