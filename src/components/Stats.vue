<template>
<b-container fluid>
    <b-row class="row" v-if="withAll">
        <b-col sm="12" lg="6" class="col mb-3">
            <div class="info">
                <h4 style="color: var(--warning)">{{parseInt(all).toLocaleString()}}</h4>
                <h5 style="color: #a0aec0">{{allText}}</h5>
            </div>
        </b-col>
        <b-col sm="12" lg="6" class="col mb-3">
            <div class="info">
                <h4 style="color: var(--danger)">{{parseInt(allDeaths).toLocaleString()}}</h4>
                <h5 style="color: #a0aec0">{{allDeathsText}}</h5>
            </div>
        </b-col>
    </b-row>
    <b-row class="row">
        <b-col sm="12" lg="4" class="col">
            <div class="info">
                <h4 style="color: var(--warning)">{{parseInt(sick).toLocaleString()}}</h4>
                <h5 style="color: #a0aec0">{{sickText}}</h5>
            </div>
        </b-col>
        <b-col sm="12" lg="4" class="col">
            <div class="info">
                <h4 style="color: var(--success)">{{parseInt(recovery).toLocaleString()}}</h4>
                <h5 style="color: #a0aec0">{{recoveryText}}</h5>
            </div>
        </b-col>
        <b-col sm="12" lg="4" class="col">
            <div class="info">
                <h4 style="color: var(--danger)">{{parseInt(deads).toLocaleString()}}</h4>
                <h5 style="color: #a0aec0">{{deadsText}}</h5>
            </div>
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
        allDeathsText: String
    }
}
</script>

<style scoped>
.row {
    margin-left: auto;
    margin-right: auto;
}

.col {
    height: 100px;
    display: table;
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

.info {
    border: 1px solid #bfc9d6;
    border-radius: 4px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
</style>