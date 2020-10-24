<template>
  <div>
      <b-badge variant="danger" style="background: #f56565" class="mb-2">Objawy</b-badge>
      <h2 style="font-weight: bold" class="mb-3">Koronawirus</h2>
      <h5 style="color: #a0aec0; font-weight: normal;" class="mr-2 ml-2">Najczęstsze objawy COVID-19.</h5>
      <h6 style="color: #a0aec0; font-weight: normal;" class="mr-2 ml-2">Jeżeli podejrzewasz u siebie koronawirusa i posiadasz część z objawów to skontaktuj się z najbliższą stacją sanitarno-epidemiologiczną.</h6>
      <ul class="list">
        <PreventionListItem imgName="cough.svg" title="Suchy kaszel" desc="" class="m-2" />
        <PreventionListItem imgName="thermometer.svg" title="Podwyższona temperatura" desc="" class="m-2"/>
        <PreventionListItem imgName="vertigo.svg" title="Ból głowy" desc="" class="m-2"/>
        <PreventionListItem imgName="sinus.svg" title="Zanik węchu i smaku" desc="" class="m-2"/>
        <PreventionListItem imgName="vertigo.svg" title="Zmęczenie" desc="" class="m-2"/>
        <PreventionListItem imgName="lungs.svg" title="Trudności z oddychaniem" desc="" class="m-2"/>
      </ul>
  </div>
</template>

<script>
import PreventionListItem from '@/components/PreventionListItem.vue';
export default {
    name: 'Prevention',
    components: {
        PreventionListItem
    }
}
</script>

<style scoped>

@media (min-width: 768px) {
    .list {
        margin-left: auto;
        margin-right: auto;
        width: 75vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 20px 30px;
        grid-template-areas:
            ". ."
            ". ."
            ". .";
    }
}

.list {
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    margin-top: 55px;
}

</style>