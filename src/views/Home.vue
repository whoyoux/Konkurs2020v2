<template>
  <div class="home">
    <h1 class="mb-5">Liczba zakażen na świecie</h1>

    <Stats 
        :sick="`${todayCases}`"
        :sickText="`Dzisiejsze zakażenia`"
        :recovery="`${7800000000 - parseInt(active)}`"
        :recoveryText="`Liczba zdrowych`"
        :deads="`${todayDeaths}`"
        :deadsText="`Dzisiejsze zgony`"
      />

    <Stats
      class="mt-3"
        :sick="`${sick}`"
        :sickText="`Zakażenia`"
        :recovery="`${recovery}`"
        :recoveryText="`Liczba wyzdrowień`"
        :deads="`${deads}`"
        :deadsText="`Zgony`"
      />
  </div>
</template>

<script>
import axios from 'axios';
import Stats from '@/components/Stats.vue';
export default {
  name: 'Home',
  components: {
    Stats
  },
  data() {
    return {
      sick: "",
      recovery: "",
      deads: "",

      todayDeaths: "",
      todayCases: "",
      active: ""
    }
  },
  async mounted() {
    try {
      const response = await axios.get("https://coronavirus-19-api.herokuapp.com/all");
      const world_response = await axios.get("https://coronavirus-19-api.herokuapp.com/countries/World");

      const data = response.data;
      const world_data = world_response.data;
      this.sick = data.cases;
      this.recovery = data.recovered;
      this.deads = data.deaths;

      this.todayDeaths = world_data.todayDeaths;
      this.todayCases = world_data.todayCases;
      this.active = world_data.active;
    } catch(err){
      console.log(err);
    }
  }
}
</script>
