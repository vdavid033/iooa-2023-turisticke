<template>
    <q-card class="q-pa-sm q-gutter-sm" flat bordered>
        <q-card-section>
            <div class="text-h3 text-bold text-center text-blue-7 q-ml-sm">
                Dodaj atrakciju
                <div class="q-ml-sm flex justify-end q-gutter-sm">
                    <q-btn size="15px" name="send" rel="stylesheet" to="/IndexPage" color="red" label="Natrag" />
                </div>
            </div>
        </q-card-section>
        <q-separator color="red" />
        <div class="q-ml-sm flex flex-start q-gutter-sm">
            <div style="width: 500px">
                <q-input filled type="double" label="Naziv atrakcije" lazy-rules
                    :rules="[(val) => (val !== null && val !== '') || 'Unesite naziv']" />
            </div>
            <div style="width: 500px">
                <q-input filled type="double" label="Geografska dužina" lazy-rules
                    :rules="[(val) => (val !== null && val !== '') || 'Unesite geografsku dužinu']" />
            </div>
            <div style="width: 500px">
                <q-input filled type="double" label="Geografska širina" lazy-rules
                    :rules="[(val) => (val !== null && val !== '') || 'Unesite geografsku širinu']" />
            </div>
            <div style="width: 500px">
                <q-select filled type="double" lazy-rules
                    :rules="[(val) => (val !== null && val !== '') || 'Odaberite kategoriju']" v-model="selectedCategory"
                    label="Kategorija" :options="categories" option-label="name" option-value="value" />
            </div>
            <div style="width: 500px">
                <q-input filled type="double" label="Adresa atrakcije" lazy-rules :rules="[
                    (val) => (val !== null && val !== '') || 'Unesite adresu atrakcije',
                ]" />
            </div>
        </div>
        <div class="q-ml-sm flex flex-start q-gutter-sm">
            <q-uploader style="max-width: 500px" label="Umetnite slike atrakcije" />
        </div>

        <div class="q-pa-sm" style="max-width: 500px">
            <q-input label="Opis atrakcije" v-model="text" filled type="textarea" />
        </div>

        <div class="q-ml-sm flex justify-center q-gutter-sm">
            <q-btn label="Postavi" @click="submitForm" color="green" class="q-ml-sm" />
            <q-btn label="Otkaži" type="submit" color="red" class="q-ml-sm" />
        </div>
    </q-card>
</template>
<script>
import { ref } from "vue";
import axios from "axios"; // Import axios
export default {
    data() {
        return {
            selectedCategory: null,
            categories: [
                { name: "Povijesno", value: "history" },
                { name: "Moderno", value: "modern" },
                { name: "Korisno", value: "useful" },
                { name: "Ostalo", value: "other" },
            ],
        };
    },
    methods: {
        async submitForm() {

            const sampleData = {
                id_atrakcije: 1234,
                naziv: "Test",
                slika: "test.jpg",
                opis: "testiranje",
                geografka_sirina: 100,
                geografska_duzina: 150,
                adresa: "Probna 12",
                id_korisnika: 1,
                sifra_kategorije: 1
            };
            try {
                const response = await axios.post("http://localhost:3000/unosAtrakcija", sampleData);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
  