<template>
  <div>
    <b-navbar variant="faded" type="light" class="nav" toggleable="md">
        <b-navbar-brand>
            <img :src="require(`../assets/img/coronavirus-icon.svg`)" alt="logo" width="40" height="40"/>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/">Licznik zakażeń</b-nav-item>
                <b-nav-item to="/1">Nowe zakażenia na świecie</b-nav-item>
                <b-nav-item to="/in_poland">Zakażenia w Polsce</b-nav-item>
                <b-nav-item to="/prevention">Profilaktyka</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    @media (min-width: 768px) {
        .nav {
            padding: 20px;
            margin-left: 20px;
        }

        .nav-link {
            margin-left: 15px;
        }
    }

    .nav-link {
        color: #a0aec0 !important;
        font-weight: 600;
        transition: 100ms all;
    }

    .nav-link:hover {
        color: var(--gray) !important;
    }
</style>