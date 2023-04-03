<template>
  <q-layout-left>
    <q-card-section>
      <div class="text-h6">Naziv atrakcije:</div>
      <div class="text-subtitle1">{{ naziv }}</div>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Opis:</div>
      <div class="text-subtitle1">{{ opis }}</div>
    </q-card-section>
    <q-card-section>
      <q-btn @click="$router.push('/komentari')" label="Pogledaj komentare" />
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Ocjena:</div>
      <div class="text-subtitle1">{{ ocjena }}</div>
    </q-card-section>
  </q-layout-left>
  <q-layout-right style="position: absolute; top: 0; right: 0; margin: 16px">
    <img alt="" src="~assets/naslovna.jpg" style="max-width: 600px" />
  </q-layout-right>
</template>

<script>
export default {
  data() {
    return {
      naziv: "",
      opis: "",
      komentar: "",
      ocjena: "",
      //imageData: "",
    };
  },
  created() {
    // kod za povezivanje na bazu
  },
};
</script>
<style>
.bg-dark-blue {
  background-color: #1e90ff;
  color: white;
}
</style>
