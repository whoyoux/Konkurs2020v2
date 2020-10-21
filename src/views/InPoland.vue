<template>
  <div class="home">
    <h1 class="mb-5">Zakażenia w Polsce</h1>

    <Stats 
        :sick="`${new_sick}`"
        :sickText="`Dzisiejsze zachorowania`"
        :recovery="`${new_recovery}`"
        :recoveryText="`Wyzdrowienia`"
        :deads="`${new_deads}`"
        :deadsText="`Dzisiejsze zgony`"
        :withAll=true
        :all="`${all}`"
        :allText="`Wszystkie przypadki`"
        :allDeaths="`${allDeaths}`"
        :allDeathsText="`Zgony`"
      />

    <Stats
        class="mt-3"
        :sick="`${active}`"
        :sickText="`Aktualnie chorzy`"
        :recovery="`${tests}`"
        :recoveryText="`Wykonane testy`"
        :deads="`${critical}`"
        :deadsText="`Stan krytyczny`"
      />

  </div>
</template>

<script>
import axios from 'axios';
import Stats from '@/components/Stats.vue';
export default {
  name: 'InPoland',
  components: {
    Stats
  },
  data() {
    return {
      new_sick: "",
      new_recovery: "",
      new_deads: "",
      critical: "",
      active: "",
      tests: "",
      all: "",
      allDeaths: ""
    }
  },
  async mounted() {
    try {
      const response = await axios.get("https://coronavirus-19-api.herokuapp.com/countries/Poland");
      const data = response.data;
      this.new_sick = data.todayCases;
      this.new_recovery = data.recovered;
      this.new_deads = data.todayDeaths;
      this.critical = data.critical;
      this.active = data.active;
      this.tests = data.totalTests;
      this.all = data.cases;
      this.allDeaths = data.deaths;
    } catch(err){
      console.log(err);
    }
  }
}
</script>

<style scoped>
.info {
    border: 1px solid #bfc9d6;
    border-radius: 4px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
</style>