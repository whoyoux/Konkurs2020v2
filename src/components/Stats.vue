<template>
<b-container fluid>
    <b-row class="mb-3" v-if="withAll">
      <b-col col cols="12" md="6">
        <b-card class="p-3 text-center" no-body>
          <h4 style="color: var(--warning)">{{parseInt(all).toLocaleString()}}</h4>
          <h5 style="color: #a0aec0">{{allText}}</h5>
        </b-card>
      </b-col>
      <b-col col cols="12" md="6">
        <b-card class="p-3 text-center" no-body>
          <h4 style="color: var(--warning)">{{parseInt(allDeaths).toLocaleString()}}</h4>
          <h5 style="color: #a0aec0">{{allDeathsText}}</h5>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="4">
        <b-card class="p-3 text-center" no-body>
          <h4 class="text-warning">{{parseInt(sick).toLocaleString()}}</h4>
          <h5 style="color: #a0aec0">{{sickText}}</h5>
        </b-card>
      </b-col>
      <b-col cols="12" md="4">
        <b-card class="p-3 text-center" no-body>
          <h4 class="text-success">{{parseInt(recovery).toLocaleString()}}</h4>
          <h5 style="color: #a0aec0">{{recoveryText}}</h5>
        </b-card>
      </b-col>
      <b-col cols="12" md="4">
        <b-card class="p-3 text-center" no-body>
          <h4 class="text-danger">{{parseInt(deads).toLocaleString()}}</h4>
          <h5 style="color: #a0aec0">{{deadsText}}</h5>
        </b-card>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
export default {
    name: 'Stats',
    props: {
        sick: String,
        sickText: String,
        recovery: String,
        recoveryText: String,
        deads: String,
        deadsText: String,
        withAll: Boolean,
        all: String,
        allText: String,
        allDeaths: String,
        allDeathsText: String,
    }
}
</script>

<style scoped>
.row {
    margin-left: auto;
    margin-right: auto;
}


@media (max-width: 992px) {
    .col {
        margin: 3px;
    }
}

@media(min-width: 992px) {
    .row {
        width: 50vw;
    }
}

</style>