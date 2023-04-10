<template>
  <q-layout-left>
    <q-card-section>
      <div class="text-h6">Naziv atrakcije:</div>
      <div class="text-subtitle1">Trsatska gradina{{ naziv }}</div>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Opis:</div>
      <div class="q-truncate">
        Trsatska gradina je jedno od mojih najdražih mjesta u Rijeci i mjesto
        koje često i sa zadovoljstvom posjećujem jer mi uvijek iznova, ljeti i
        zimi daje poseban osjećaj mira. Osim pogleda, pažnju na ulazu privlači i
        masivan kameni, sivi zid koji kao oklop štiti ljepote unutrašnjosti
        Trsatske gradine. Kada kroz kulu uđemo u područje gradine, s lijeve
        strane nalazi se masivni željezni top, čiji je pogled, kao pogled
        brojnih posjetitelja usmjeren prema moru. S desne strane, podignemo li
        pogled, vidjet ćemo da se tamo, osim kafića , nalazi glavna i najviša
        kula unutar koje se nalazi stepenište koje omogućava pristup njezinim
        najvišim dijelovima i naravno, najljepšem pogledu.{{ opis }}
      </div>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Ocjena:</div>
      <div class="text-subtitle1">4.5{{ ocjena }}</div>
    </q-card-section>
    <q-card-section>
      <q-btn @click="$router.push('/komentari')" label="Pogledaj komentare" />
    </q-card-section>
    <q-page class="bg-blue"> </q-page>
  </q-layout-left>
  <q-layout-right style="position: absolute; top: 0; right: 0">
    <img alt="" src="~assets/naslovna.jpg" style="max-width: 800px" />
  </q-layout-right>
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

<style>
.bg-blue {
  background-color: #1e90ff;
  color: white;
}
</style>
