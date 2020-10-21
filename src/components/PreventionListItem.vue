<template>
  <div class="item">
      <div class="icon">
           <!-- https://www.iconpacks.net/free-icon/medical-mask-3974.html -->
          <img :src="require(`@/assets/img/${imgName}`)" :alt="`${imgName}`" class="img">
      </div>
      <div class="text">
          <h5>{{title}}</h5>
          <p>{{desc}}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: "PreventionListItem",
    props: {
        imgName: String,
        title: String,
        desc: String
    }

}
</script>

<style scoped>
.item {
    display: grid;
    grid-template-columns: 50px 1.5fr;
    grid-template-rows: 1fr;
    gap: 10px 0px;
    grid-template-areas:
        ". .";
}
.icon {
    width: 50px;
    height: 50px;
    background-color: #f56565;
    color: white;
    border-radius: 5px;
    position: relative;
}

.img {
    max-height: 70%;
    max-width: 70%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.text {
    margin-left: 15px;
    text-align: left;
}

.text p {
    color: var(--gray);
}
</style>