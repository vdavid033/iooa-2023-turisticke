<template>
  <div class="bg-image">
  <q-page padding class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="q-gutter-md full-with" style="max-width: 500px">
        <div class="full-with">
    <div class="q-gutter-md" style="max-width: 350px">
      <q-input v-model="inputNaziv" label="Naziv" placeholder="Naziv atrakcije">
      </q-input>

      <q-input v-model="inputOpis" label="Opis" placeholder="Opis atrakcije">
      </q-input>

      <q-input v-model="inputLokacija" label="Lokacija" placeholder="Lokacija atrakcije">
      </q-input>

      <q-uploader url="http://localhost:4444/upload" label="Slika atrakcije" style="max-width: 300px" />

      <q-input v-model="inputSirina" label="Širina" placeholder="Grografska Širina atr">
      </q-input>

      <q-input v-model="inputDuzina" label="Dužina" placeholder="Geografska dužina atr">
      </q-input>
      <div class="row justify-center q-pa-md">
        <q-btn align="between" unelevated color="primary" @click="SubmitUnos" label="Potvrdi" text-align="center" />
      </div>
    </div>
  </div>
</div>
</q-card-section>
  </q-card>
  </q-page>
</div>

</template>

<script>

</script>
<style>
.bg-image {
  background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.williamhortonphotography.com%2Fwp-content%2Fuploads%2F2017%2F09%2FCroatia-Krk-2015-10.jpg&f=1&nofb=1&ipt=374c233d6e256918b9237640e1c0d6b6d0d4a377be4c7dfc38405cba259d2566&ipo=images) ;

}
</style>
