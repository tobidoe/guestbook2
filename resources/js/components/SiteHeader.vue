<template>
    <div style="overflow:hidden">

        <span style="float:left">
            <a href="/">Gästebuch</a>
            <a href="/dashboard">Dashboard</a>
        </span>

        <span style="float:right">
            <!--        todo: Is there a better way to realize logout process? (Just copied from AppLayout.vue)-->
<!--            <form v-if="authUser" @submit.prevent="logout" style="text-align: right">-->
<!--                Hallo {{ authUser.name }}-->
<!--                <button type="submit">-->
<!--                    Abmelden-->
<!--                </button>-->
<!--            </form>-->
            <button type="button" @click="logout">
                Abmelden
            </button>

            <p v-else style="text-align: right">
                <span style="margin:10px">Nicht angemeldet</span>
                <a href="/login">Einloggen</a>
                <a href="/register">Anmelden</a>
            </p>

        </span>

    </div>

</template>


<script>
export default {
    name: "SiteHeader",

    props: {
        authUser: {
            type: null,
        },
    },

    methods: {

        // todo: whats done here exactly (what is axios?)? / is there a better/nicer way to do this? (Just copied from AppLayout.vue)
        logout() {
            axios.post(route('logout').url()).then(response => {
                window.location = '/';
            })
        },
    },
}
</script>

<style scoped>

* {
    all: revert;
}


button {
    margin: 10px;
}

</style>
