<template>
  <div>
      <h1 class="mb-3">Wyszukaj dane w danym kraju</h1>
      <h5 style="color: #a0aec0; font-weight: normal;" class="mr-2 ml-2">Wpisz nazwę kraju w języku angielskim</h5>
      <b-container class="width">
       <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="np. Poland"
            v-model="country"
        ></b-input>
        <b-button variant="outline-danger mt-3 mb-5" @click="getInfo">Wyszukaj</b-button>
      </b-container>
      <Stats 
        class="mt-4"
        :sick="`${all_sick}`"
        :sickText="`Zakażenia`"
        :recovery="`${new_sick}`"
        :recoveryText="`Dzisiejsze zakażenia`"
        :deads="`${deads}`"
        :deadsText="`Wszystkie zgony`"
      />
  </div>
</template>

<script>
import axios from 'axios';
import Stats from '@/components/Stats.vue';
export default {
    name: "SearchCounty",
    data() {
        return {
            country: '',
            new_sick: '0',
            all_sick: '0',
            deads: '0',
        }
    },
    components: {
        Stats
    },
    async mounted() {
    
  },
  methods: {
      async getInfo(e) {
        e.preventDefault();
        try {
            if(this.country.trim() !== "") {
                this.hasData = false;
                const response = await axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${this.country.charAt(0).toUpperCase() + this.country.slice(1)}`);
                const data = response.data;
                console.log(data);
                if(data === "Country not found") {
                    this.$bvToast.toast(`Nie znaleziono kraju!`, {
                        title: 'Błąd!',
                        autoHideDelay: 5000 
                    })
                    return;
                }
                this.new_sick = data.todayCases;
                this.all_sick = data.cases;
                this.deads = data.deaths;
                this.hasData = true;
            } else {
                this.$bvToast.toast(`Proszę podać nazwe kraju!`, {
                    title: 'Błąd!',
                    autoHideDelay: 5000 
                })
            }
        } catch(err){
            console.log(err);
        }
      }
  }
}
</script>

<style>

.width {
    width: 50vw;
}

@media (max-width: 768px) {
    .width {
        width: 75vw;
    }
}

</style>