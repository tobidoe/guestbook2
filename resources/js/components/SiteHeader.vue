<template>
    <div>
        Hallo {{authUser.name}}


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
}
</script>

<style scoped>

</style>
