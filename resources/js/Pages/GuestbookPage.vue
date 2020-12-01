<template>
    <div>
        <site-header :authUser="authUser"/>
        <h1>Gästebuch</h1>
        <div>

            <!--            todo: does it make sense to reduce boilerplate code here (double svg element)?-->
            <button v-if="authUser" @click="showFormNewPost = !showFormNewPost">
                <svg style="display:inline" height="10" width="10" stroke="black" fill="none">
                    <path :class="{'hidden' : !showFormNewPost }" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2" d="M2 0L5 8L8 0"/>
                    <path :class="{'hidden' : showFormNewPost }" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2" d="M2 8L5 0L8 8"/>
                </svg>
                Neuer Eintrag
                <svg style="display:inline" height="10" width="10" stroke="black" fill="none">
                    <path :class="{'hidden' : !showFormNewPost }" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2" d="M2 0L5 8L8 0"/>
                    <path :class="{'hidden' : showFormNewPost }" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2" d="M2 8L5 0L8 8"/>
                </svg>

            </button>

            <!--            todo: Ho to redirect to '/' after login? ('HOME' is set to '/' in RouteServiceProvider and 'config/fortify.php' references 'HOME', but the redirect is still to /dashboard. Why doesn´t it work, do i have to use https://laravel.com/docs/8.x/authentication#authenticating-users really?
                            todo: read https://laracasts.com/discuss/channels/laravel/redirect-to-intended-url-jetstream-fortify)-->
            <p v-else style="margin:10px">
                <a href="/login">Logge dich ein</a>
                oder
                <a href="/register">registriere dich</a>
                um einen Beitrag verfassen zu können
            </p>


            <form :class="{'hidden' : showFormNewPost }" action="/posts" method="post">
                <input type="hidden" name="_token" :value="csrfToken">
                <br>
                <textarea id="body" name="body"
                          placeholder="Bis zu 2000 Zeichen"
                          rows="10" cols="50"
                          required
                          minlength="5"
                          maxlength="2000"
                          aria-label="Schreibe einen neuen Eintrag">

                </textarea>
                <br>
                <input type="submit" value="Eintrag anlegen"/>
                <a  @click.prevent="clearForm('body')" href="">Abbrechen </a>
            </form>

        </div>



        <div v-for="post in posts" :key="post.id">
            <user-post :post="post" :authUser="authUser" :csrfToken="csrfToken"/>
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
        },
        csrfToken: {
            type: String
        },

    },

    data: function () {
        return {
            showFormNewPost: true
        }
    },

    components: {
        UserPost,
        SiteHeader,
    },

    methods: {

        // todo: whats done here exactly (what is axios?)? / is there a better/nicer way to do this? (Just copied from AppLayout.vue)
        logout() {
            axios.post(route('logout').url()).then(response => {
                window.location = '/';
            })
        },

        clearForm (element){
            document.getElementById(element).value='';
            this.showFormNewPost=!this.showFormNewPost;
        }
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

/*button {*/
/*    margin: 10px;*/
/*}*/

.hidden {
    display: none;
}

</style>
