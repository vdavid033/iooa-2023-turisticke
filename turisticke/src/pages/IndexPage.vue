<template>
  <div class="q-pa-md row items-start q-gutter-md">

    <q-card class="my-card" flat bordered>
      <q-img src="~assets/trsat.jpg" />

      <q-card-section>
        <q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 12px; transform: translateY(-50%)"
          to="atract/atr" />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Rijeka Trsat</div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">Trsatska Gradina</div>
        <div class="text-caption text-grey">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </q-card-section>

      <q-separator />
    </q-card>

    <q-card class="my-card" flat bordered>
      <q-img src="~assets/novi.jpg" />

      <q-card-section>
        <q-btn fab color="primary" icon="place" class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)" />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Novi Vinodolski</div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">Pogled na grad Novi V.</div>
        <div class="text-caption text-grey">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </q-card-section>

      <q-separator />
    </q-card>

    <q-card class="my-card" flat bordered>
      <q-img src="~assets/ogulin.jpg" />

      <q-card-section>
        <q-btn fab color="primary" icon="place" class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)" />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Ogulin</div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">Centar grada Ogulina</div>
        <div class="text-caption text-grey">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </q-card-section>

      <q-separator />
    </q-card>

    <q-card class="my-card" flat bordered>
      <q-img src="~assets/gola.jpg" />

      <q-card-section>
        <q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 12px; transform: translateY(-50%)"
          to="auth/test" />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">Gola</div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">Pogled sa tornja crkve u Goli</div>
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>

      <q-separator />
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stars = ref(5);
</script>

<style>
.bg-blue {
  background-color: #1e90ff;
  color: white;
}
</style>
