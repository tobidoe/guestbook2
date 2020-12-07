<template>

    <!--            todo: How to redirect to '/' after login? ('HOME' is set to '/' in RouteServiceProvider and 'config/fortify.php' references 'HOME', but the redirect is still to /dashboard. Why doesn´t it work, do i have to use https://laravel.com/docs/8.x/authentication#authenticating-users really?
                            todo: read https://laracasts.com/discuss/channels/laravel/redirect-to-intended-url-jetstream-fortify)-->

    <div>

        <site-header :authUser="authUser"/>

        <h1>Gästebuch</h1>

        <div>
            <ResponsiveFormNewPost v-if="authUser" :csrfToken="csrfToken"/>
            <disclaimer-login v-else/>
        </div>


        <div v-for="post in posts" :key="post.id">
            <user-post :post="post" :authUser="authUser" :csrfToken="csrfToken"/>
        </div>

    </div>
</template>


<script>

import UserPost from "@/components/UserPost";
import SiteHeader from "@/components/SiteHeader";
import DisclaimerLogin from "@/components/DisclaimerLogin";
import ResponsiveFormNewPost from "@/components/ResponsiveFormNewPost";

export default {
    name: "GuestbookPage",

    props: {
        posts: {
            type: Array
        },
        authUser: {
            type: null
        },
        csrfToken: {
            type: String
        },

    },

    data: function () {
        return {}
    },

    components: {
        DisclaimerLogin,
        UserPost,
        SiteHeader,
        ResponsiveFormNewPost,
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

/*todo: is there a better way to circumvent tailwind?*/

* {
    margin: 2px;
}

h1, button, form, textarea, submit, input, a {
    all: revert;
}

.hidden {
    display: none;
}

</style>
