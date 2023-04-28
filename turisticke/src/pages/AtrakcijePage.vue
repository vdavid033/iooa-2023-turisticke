<template>
  <div style="background-color: #229df9">
    <div v-for="post in posts" :key="post.id" class="row q-pa-md">

      <div q-card>
        
        <q-img :src=post.slika width="800px" height="600px" position="absolute" top="50%" left="50%"
          transform="translate(-50%, -50%)">
                <div class="q-pa-md">
                     <q-btn-dropdown color="black" label="Uredi sliku">
                        <q-list>
                            <q-item clickable v-close-popup @click="$router.push('/slika')" >
                              <q-item-section>
                             <q-item-label>Dodaj sliku</q-item-label>
                              </q-item-section>
                        </q-item>

                            <q-item clickable v-close-popup @click="obrisi_sliku(post.id_atrakcije)">
                               <q-item-section>
                            <q-item-label>Obriši sliku</q-item-label>
                              </q-item-section>
                          </q-item>     
                    </q-list>
                  </q-btn-dropdown>
                </div>
          <div class="absolute-bottom text-subtitle1 text-center">
            <div style="text-transform:uppercase; font-size:50px">{{ post.naziv }}</div>
          </div>
        </q-img>
      </div>


      <div class="q-pa-md" >
          <div class="q-pa-md items-start q-gutter-xs" style="background-color: black; color: white;">
            <h6>Opis: {{ post.opis }}</h6>
            <q-separator color="white" />
            <h6>Adresa: {{ post.adresa }}</h6>
            <q-separator color="white" />
            <h6>Ocjena:</h6>
            <q-rating v-model=post.prosjecna_ocjena :max="5" :readonly="true" size="32px" />
            <q-separator color="white" />
            <h6>Geo širina: {{ post.geografska_sirina }}</h6>
            <q-separator color="white" />
            <h6>Geo dužina: {{ post.geografska_duzina }}</h6>
          </div>
      </div>
    </div>



    <q-card-section>
      <q-btn color="black" @click="$router.push('/')" label="Natrag na početnu" />
    </q-card-section>
    <q-card-section>
      <q-btn color="black" @click="$router.push('/komentari')" label="Dodaj komentar" />
    </q-card-section>

    <q-separator />

    <div class="q-pa-md row items-start q-gutter-xs">
      <h5 style="color: white">Komentari:</h5></div>

    <div class="q-pa-md row items-start q-gutter-md">
      <q-card v-for="post in 6" :key="post" class="my-card" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Kristian</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-card-section horizontal>
          <q-card-section>
            <text>Ovo je testni komentar.</text>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
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


const obrisi_sliku = async (id) => {
try {
  //const response = await api.delete('atrakcije/${id}');
  const response = await api.delete(`http://localhost:4200/obrisi_sliku_atrakcije/${id}`);
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


</script>




<style scoped></style>


<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px

</style>
