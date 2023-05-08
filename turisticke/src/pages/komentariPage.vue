<template>
  <div style="background-color: #8CDEED;">

  <h3>Unos komentara</h3>
  <h6>U polje ispod upišite svoj komentar o atrakciji</h6>
  <q-form class="text">
      <!-- <textarea v-model="newComment" placeholder="Unesite svoj komentar..."></textarea> -->
      <q-input filled v-model="noviKomentar" label="Unesi svoj komentar.. " :dense="dense" />

    </q-form>

    
    <q-card-section>  
      <q-btn label="Dodaj komentar"
          @click="submitForm"/>
    </q-card-section>


  <q-card-section>
      <q-btn color="#4CAF50" @click="$router.push('/')" label="Natrag na početnu" />
    </q-card-section>
    

  </div>
</template>

<script>
import { ref } from 'vue'
import {api} from 'boot/axios' 
export default {
  data() {
    return {
      noviKomentar: ''
    }
  },
  methods: {
 
    async submitForm () {
      const sampleData = {
        noviKomentar:this.noviKomentar
      }
      try {
        const response = await api.post(
          '/komentari',
          sampleData
        )
        console.log(response.data)
        // this.showDialog = true
        // this.resetForm()
      } catch (error) {
        console.error(error)
      }
    }
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