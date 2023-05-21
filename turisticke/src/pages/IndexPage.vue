<template>
    <div style="background-color: #229df9">
  <div class="q-pa-md row items-start q-gutter-md">

    <q-card v-for="post in posts" :key="post.id" class="my-card">
      <q-img :src=post.slika />



      <q-card-section>
        <q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 12px; transform: translateY(-50%)"
          :to="'/one_atraction/' + post.id_atrakcije" />

          <q-btn fab color="red" icon="delete" class="absolute"  style="top: 0px; left: 12px; transform: translateY(-50%)"
           @click="deleteById(post.id_atrakcije)" />

           <div class="myDiv" style="padding: 10px;"></div>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">{{ post.naziv }}</div>
        </div>

        <q-rating v-model=post.prosjecna_ocjena :max="5" :readonly="true" size="32px" />
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


const deleteById = async (id) => {


try {
  //const response = await api.delete('atrakcije/${id}');
  const response = await api.delete(`http://localhost:4200/obrisi_atrakcije/${id}`);
  console.log(response.data);
  // Perform any additional actions after successful deletion
} catch (error) {
  console.log(error);
}
  getPosts();
}


onMounted(() => {
  getPosts()
})

const goToAtrakcijeDetalji = (id) => {
  router.push({
    name: 'one_atraction',
    params: {
      id: id
    }})
  }

</script>

<style>
.bg-blue {
  background-color: #21c9fc;
  color: white;
}

.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
