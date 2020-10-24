<template>
  <div>
      <b-badge variant="danger" style="background: #f56565" class="mb-2">PROFILAKTYKA</b-badge>
      <h2 style="font-weight: bold" class="mb-3">Koronawirus</h2>
      <h5 style="color: #a0aec0; font-weight: normal;" class="mr-2 ml-2">Proste kroki, które pokazują jak bezpiecznie żyć bez obawiania się zakażenia.</h5>
      <ul class="list">
        <PreventionListItem imgName="mask.svg" title="Maseczki ochronne" desc="Maseczka znacznie utrudnia wirusowi na przedostanie się do naszego układu oddechowego."/>
        <PreventionListItem imgName="hands.svg" title="Mycie rąk" desc="Myj dokładnie ręcę przez przynajmniej 30 sekund."/>
        <PreventionListItem imgName="space.svg" title="Bezpieczna odległość" desc="Zachowaj bezpieczną odległość od innych osob."/>
        <PreventionListItem imgName="wash.svg" title="Dezynfekcja" desc="Dezynfekuj ręcę przed wejściem do sklepu, szkoły, urzędu itp."/>
        <PreventionListItem imgName="quarantine.svg" title="Kwarantanna" desc="Przestrzegaj kwarantanny. Nawet jeżeli nie widzisz objawów, możesz byc zakażony."/>
        <PreventionListItem imgName="cough.svg" title="Objawy" desc="Jeżeli masz objawy to dzwoń do najbliższej stacji sanitarno-epidemiologicznej."/>
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