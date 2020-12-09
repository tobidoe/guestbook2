<template>
    <div>

<!--        button with click dependent responsive svg arrows-->
        <button @click="showFormNewPost = !showFormNewPost">
            <svg style="display:inline" height="10" width="10" stroke="black" fill="none">
                <path :class="{'hidden' : showFormNewPost }" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" d="M2 0L5 8L8 0"/>
                <path :class="{'hidden' : !showFormNewPost }" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" d="M2 8L5 0L8 8"/>
            </svg>
            Neuer Eintrag
            <svg style="display:inline" height="10" width="10" stroke="black" fill="none">
                <path :class="{'hidden' : showFormNewPost }" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" d="M2 0L5 8L8 0"/>
                <path :class="{'hidden' : !showFormNewPost }" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" d="M2 8L5 0L8 8"/>
            </svg>
        </button>

<!--        responsive form for sending a new post-->
<!--        comment: why not work with v-show/v-if instead of the dynamic class? -->
        <form :class="{'hidden' : !showFormNewPost }" action="/posts" method="post">
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
<!--            comment: Let's do this asynchronously!-->
            <input type="submit" value="Eintrag anlegen"/>
            <a @click.prevent="abortEdit('body')" href="">Abbrechen </a>
        </form>

    </div>
</template>

<script>
export default {
    name: "ResponsiveFormNewPost",

    data: function () {
        return {
            showFormNewPost: false
        }
    },

    props: {
        csrfToken: {
            type: String
        },
    },

    methods: {

        // clear the content of given element and toggle showFormNewPost
        abortEdit(element) {
            //comment: Why not work with v-model?
            document.getElementById(element).value = '';
            this.showFormNewPost = !this.showFormNewPost;
        },
    },


}
</script>

<style scoped>

button, form, textarea, submit, input, a {
    all: revert;
}

.hidden {
    display: none;
}

</style>
