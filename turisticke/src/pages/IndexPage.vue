<template>
  <div class="bg-beige">
    <q-header> </q-header>
    <q-page>
      <q-layout>
        <q-layout-header>
          <div class="q-pa-md">
            <q-card>
              <q-card-section>
                <div></div>
                <div class="text-h6">Naziv atrakcije:</div>
                <div class="text-subtitle1">{{ naziv }}</div>
              </q-card-section>
              <q-card-section>
                <div class="text-h6">Opis atrakcije:</div>
                <div class="text-subtitle1">{{ opis }}</div>
              </q-card-section>
              <q-card-section>
                <q-btn
                  @click="$router.push('/komentari')"
                  label="Pogledaj komentare"
                />
              </q-card-section>
              <q-card-section>
                <div class="text-h6">Ocjena atrakcije:</div>
                <div class="text-subtitle1">{{ ocjena }}</div>
              </q-card-section>
            </q-card>
          </div>
        </q-layout-header>
        <q-layout-right>
          <img alt="Veleri logo" src="~assets/naslovna.jpg" style="" />
        </q-layout-right>
      </q-layout>
    </q-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      naziv: "",
      opis: "",
      komentar: "",
      ocjena: "",
      imageData: "",
    };
  },
  created() {
    // kod za povezivanje na bazu
  },
};
</script>
