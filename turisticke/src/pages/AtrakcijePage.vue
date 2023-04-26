

<template>
  <div>
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
            <h4>Opis: {{ post.opis }}</h4>
            <h4>Adresa: {{ post.adresa }}</h4>
            <h4>Ocjena: {{ post.prosjecna_ocjena }}</h4>
            <h4>Geo širina: {{ post.geografska_sirina }}</h4>
            <h4>Geo dužina: {{ post.geografska_duzina }}</h4>
            <h4>Adresa: {{ post.adresa }}</h4>
      </div>
    </div>


    <q-card-section>
      <q-btn @click="$router.push('/')" label="Natrag na početnu" />
    </q-card-section>
    <q-card-section>
      <q-btn @click="$router.push('/komentari')" label="Dodaj komentar" />
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


