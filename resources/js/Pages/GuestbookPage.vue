<template>
    <div>
        <site-header :authUser="authUser"/>
        <h1>Gästebuch</h1>

        <div v-for="post in posts" :key="post.id">
            <user-post v-bind:post="post"/>
        </div>

    </div>
</template>

<script>

import UserPost from "@/components/UserPost";
import SiteHeader from "@/components/SiteHeader";

export default {
    name: "GuestbookPage",

    props: {
        posts: {
            type: Array
        },
        authUser: {
            type: null
        }

    },

    data: function () {
        return {}
    },

    components: {
        UserPost,
        SiteHeader,
    }
}
</script>

<style scoped>


</style>
