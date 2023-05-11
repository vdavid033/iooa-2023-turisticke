<template>
  <div style="background-color: #8CDEED;">

  <h3>Unos komentara</h3>
  <h6>U polje ispod upišite svoj komentar o atrakciji</h6>
  <q-form class="text">

      <q-input filled v-model="komentar" label="Unesi svoj komentar.. " :dense="dense" />
    </q-form>

    
    <q-card-section>
            <q-btn label="Dodaj komentar" @click="dodajKomentar(komentar, trenutniID)" />
        </q-card-section>


  <q-card-section>
      <q-btn color="#4CAF50" @click="$router.push('/')" label="Natrag na početnu" />
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


//Dodavanje komentara za atrakciju

const dodajKomentar = async (komentar, trenutniID) => {
    try {
        console.log('Komentar: ', komentar)
        console.log("ID: ", trenutniID)

        const response = await api.post(`http://localhost:4200/dodajKomentar/${trenutniID}`, {
            Komentar: komentar
        });
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
}
</script>


<style scoped>
.text {
  width: 98%;
  height: 100px;
  margin-left: 5px;
  margin-bottom: 10px;
  padding-top: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgb(228, 233, 234);
  
  
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  
}

button:hover {
  background-color: #ffa702;
}
</style>