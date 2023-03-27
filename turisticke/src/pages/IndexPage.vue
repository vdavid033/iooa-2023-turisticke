<!-- <script setup>
import { ref } from "vue"

const imeGrada = ref("Rijeci");

const resetGrada = () => {
  imeGrada.value = "Rijeci"
}

</script>

<template>
  <H4>Veleučilište u {{ imeGrada }}</H4>

  <input type="text" v-model="imeGrada">
  <button @click="resetGrada()">Reset</button>
</template> -->

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const $q = useQuasar()

const name = ref(null);
const age = ref(null);
const accept = ref(false);




const onSubmit = () => {
  if (accept.value !== true) {

    console.log("U if je ušao")

    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Morate prihvatiti uvijete'
    })
  }
  else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Spremljeno'
    })
  }
}

const onReset = () => {
  name.value = null
  age.value = null
  accept.value = false
}


</script>

<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="name" label="Vaše ime *" hint="Ime i prezime" lazy-rules
        :rules="[val => val && val.length > 0 || 'Unos je obavezan']" />

      <q-input filled type="number" v-model="age" label="Vaše godine *" lazy-rules :rules="[
        val => val !== null && val !== '' || 'Unesite vaše godine',
        val => val > 0 && val < 100 || 'Mora bit više od 0 i manje od 100'
      ]" />

      <q-toggle v-model="accept" label="Prihvaćam uvjete" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>



