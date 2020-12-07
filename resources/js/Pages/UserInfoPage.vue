<template>
    <div>
        <site-header :authUser="authUser"/>
        <h1>{{ user.name }}</h1>
        <p>
            angemeldet seit: {{ user.created_at }} <br>
            Beiträge verfasst: {{ user.posts.length }} <br>
            Kommentare zu Beiträgen verfasst: {{ user.comments.length }}
        </p>
    </div>

</template>

<script>

import SiteHeader from "@/components/SiteHeader";

export default {
    name: "UserInfoPage",

    components: {SiteHeader},

    props: {
        user: {
            type: null
        },
        authUser: {
            type: null
        },
    },
}
</script>

<style scoped>
h1, h3 {
    all: revert;
}

</style>
