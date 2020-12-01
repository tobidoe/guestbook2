<template>
    <div>

<!--        todo: Is there a better/nicer way to realize logout process? (Just copied from AppLayout.vue)-->
        <form v-if="authUser" @submit.prevent="logout" style="text-align: right">
            Hallo {{ authUser.name }}
            <button type="submit">
                Abmelden
            </button>
        </form>

        <p v-else style="text-align: right">
            <span style="margin:10px">Nicht angemeldet</span>
            <a href="/login">Einloggen</a>
            <a href="/register">Anmelden</a>
        </p>


        <!--    @if (Route::has('login'))-->
        <!--    <div id="menuLandingPage" style="float:none">-->
        <!--        @auth-->
        <!--        <a href="{{ url('/dashboard') }}" class="text-sm text-gray-700 underline">Dashboard</a>-->
        <!--        <a href="{{ url('/posts') }}" >Gästebuch</a>-->
        <!--        @else-->
        <!--        <a href="{{ route('login') }}" class="text-sm text-gray-700 underline">Login</a>-->

        <!--        @if (Route::has('register'))-->
        <!--        <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 underline">Register</a>-->
        <!--        @endif-->
        <!--        @endif-->
        <!--    </div>-->
        <!--    @endif-->


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
