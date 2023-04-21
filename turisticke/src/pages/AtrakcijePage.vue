<template>
  <div style="background-color: cyan;">
  <q-card-section>
    <div class="text-h6">Naziv atrakcije:</div>
    <div class="text-subtitle1">Trsatska gradina{{ naziv }}</div>
  </q-card-section>
  

<div class="image">

      <q-card> 
      <img src="~assets/trsat.jpg">
     </q-card> 
     
    </div>
   
    <div class="container d-flex justify-content-center align-items-center">
      <q-card-section>
      <div class="text-h6">Opis:</div>
      <div class="q-truncate">

        <q-card-section>
          Trsatska gradina je jedno od mojih najdražih mjesta u Rijeci i mjesto
          koje često i sa zadovoljstvom posjećujem jer mi uvijek iznova, ljeti i
          zimi daje poseban osjećaj mira. Osim pogleda, pažnju na ulazu privlači i
          masivan kameni, sivi zid koji kao oklop štiti ljepote unutrašnjosti
          Trsatske gradine. Kada kroz kulu uđemo u područje gradine, s lijeve
          strane nalazi se masivni željezni top, čiji je pogled, kao pogled
          brojnih posjetitelja usmjeren prema moru. S desne strane, podignemo li
          pogled, vidjet ćemo da se tamo, osim kafića , nalazi glavna i najviša
          kula unutar koje se nalazi stepenište koje omogućava pristup njezinim
          najvišim dijelovima i naravno, najljepšem pogledu.
        </q-card-section>

      </div>

    </q-card-section>
    </div>
    

  <q-card-section>

    <div class="text-h6">Ocjena:</div>
    <!-- <div class="text-subtitle1">4.5{{ ocjena }}</div> -->
    <q-rating v-model="stars" :max="5" size="32px" />
  </q-card-section>
  <q-card-section>
    <q-btn @click="$router.push('/komentari')" label="Pogledaj komentare" />
  </q-card-section>

  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" to="/" label="Natrag na početnu" />
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      naziv: "",
      opis: "",
      ocjena: "",
      komentar: "",
      //imageData: "",
    };
  },
  created() {
    // kod za povezivanje na bazu
  },
};
</script>
<script setup>
import { ref } from "vue";

const stars = ref(4);
</script>

<style scoped>

/*.bg-blue {
  background-color: #1e90ff;
}*/

.q-truncate {
  /* max-width: 600px; */
  text-align: auto;
  font-size: 16px;
}

.container { 
  display:block;
  align-items: center; 
  grid-template-columns: 1fr 1fr 1fr;  
  column-gap: 5px; 
 } 

.image{

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
