<template>
  <div style="background-color: #8CDEED;">

  <h3>Unos komentara</h3>
  <h6>U polje ispod upišite svoj komentar o atrakciji</h6>
  <q-form @submit.prevent="addComment">
      <textarea v-model="newComment" placeholder="Unesite svoj komentar"></textarea>
      
    </q-form>

    <q-card-section>  
      <q-btn type="submit">DODAJ KOMENTAR</q-btn>
    </q-card-section>


  <q-card-section>
      <q-btn color="#4CAF50" @click="$router.push('/')" label="Natrag na početnu" />
    </q-card-section>
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      newComment: ''
    }
  },
  methods: {
    addComment() {
      // Ovdje dodajte kod za spremanje komentara u bazu podataka
      this.newComment = '' // Resetiranje teksta u tekstnom okviru
    }
  }
}
</script>



<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  background-color: #3e8e41;
}
</style>