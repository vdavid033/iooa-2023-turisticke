<template>
  <div class="q-pa-md row items-start q-gutter-md">

<q-card v-for="post in posts" :key="post.id" class="my-card" flat bordered>
  <q-img :src=post.slika />
  <q-card-section>

    <div class="row no-wrap items-center">
      <div class="col text-h1 ellipsis">{{ post.naziv }}</div>
    </div>

    <q-rating v-model=post.prosjecna_ocjena :max="5" size="32px" />
  </q-card-section>

  <q-card-section class="q-pt-none">
    <div class="text-subtitle1">{{ post.adresa }}</div>
    <div class="text-caption text-grey">
      {{post.opis}}
    </div>
  </q-card-section>

  <q-separator />
</q-card>



</div>


</template>

<script setup>

import { ref, onMounted } from "vue"
import {api} from 'boot/axios'
import { useRoute, useRouter } from 'vue-router';

const posts = ref([])
const route = useRoute()
const router = useRouter()

const trenutniID = route.params.id

const getPosts = async () => {
  try{
    const response = await api.get(`/atrakcije/${trenutniID}`)
    posts.value = response.data

    console.log("ID je: " , trenutniID)
    console.log("Podatak iz baze po ID: " , posts.value)


  }catch (error){
    console.log(error)
  }
}

onMounted(() => {
  getPosts()
})

</script>



<style scoped>
.bg-blue {
  background-color: #1e90ff;
}

.q-truncate {
  max-width: 600px;
}

.container {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5px;
}

.my-card {
  width: 100%;
  max-width: 800px;
}
</style>
