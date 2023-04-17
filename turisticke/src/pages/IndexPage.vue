<template>
  <div class="q-pa-md row items-start q-gutter-md">

    <q-card v-for="post in posts" :key="post.id" class="my-card" flat bordered>
      <q-img :src=post.slika />

      <q-card-section>
        <q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 12px; transform: translateY(-50%)"
          to="one_atraction" />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">{{ post.naziv }}</div>
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

const posts = ref([])



const getPosts = async () => {
  try{
    const response = await api.get('atrakcije')
    console.log(response.data)
    posts.value = response.data

  }catch (error){
    console.log(error)
  }

}

onMounted(() => {
  getPosts()
})

//const stars = ref(5);
</script>

<style>
.bg-blue {
  background-color: #1e90ff;
  color: white;
}

.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
