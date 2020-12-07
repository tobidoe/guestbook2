<template>
    <div class="user-post" style="overflow: hidden">

        <!--        Header with username, create date and update date-->
        <p class="user-post-header" style="overflow: hidden">
            <a :href="'/user/'+post.user.id" style="float: left">{{ post.user.name }}</a>
            <span style="float: right">{{ post.created_at }}</span>

            <!--           includes "edited on" date if post is edited-->
            <template v-if="post.updated_at != post.created_at">
                , geändert am {{ post.updated_at }}
            </template>
        </p>


        <!--        Content/body of post with links for delete and edit functionality if user is post owner-->
        <div v-if="!showFormEditPost">
            <p>{{ post.body }}</p>

            <div v-if="authUser && post.user.id==authUser.id" style="text-align:right; font-size: 75%">
                <a href="#" @click.prevent="
                    showFormEditPost = !showFormEditPost;
                    showButtonComment = !showButtonComment;
                ">Ändern</a>

                <!--                todo: is there a better way (form used for sending a DELETE-request)?-->
                <form :action="'/posts/'+post.id" method="post" ref="form" style="display:inline">
                    <input type="hidden" name="_token" :value="csrfToken">
                    <input type="hidden" name="_method" value="DELETE">
                    <a href="#" @click="submit()">Löschen</a>
                </form>
            </div>
        </div>

        <!--        edit post form-->
        <div v-else>
            <form :action="'/posts/'+post.id" method="post">
                <input type="hidden" name="_token" :value="csrfToken">
                <input type="hidden" name="_method" value="PATCH">
                <!--                todo: Is there a way to style this code without whitespace?-->
                <textarea id="body" name="body"
                          placeholder="Bis zu 2000 Zeichen"
                          rows="10" cols="50"
                          required
                          minlength="5"
                          maxlength="2000"
                          aria-label="Ändere deinen Eintrag">{{ post.body }}</textarea>
                <br>
                <input type="submit" value="Eintrag ändern"/>
                <a @click.prevent="clearFormPost('body')" href="">Abbrechen </a>
            </form>
        </div>

        <!--        all comments for this post-->
        <user-comment v-for="comment in post.comments"
                      v-bind:comment="comment"
                      :key="comment.id"
        />


        <!--        Footer with comment button (or login disclaimer) or new comment form-->
        <div class="user-post-footer">

            <button v-if="authUser"
                    :class="{'hidden' : !showButtonComment }"
                    @click="
                    showFormNewComment = !showFormNewComment;
                    showButtonComment = !showButtonComment
                ">
                Kommentieren
            </button>

            <DisclaimerLogin v-else/>


            <form :class="{'hidden' : showFormNewComment }" action="/comments" method="post">
                <input type="hidden" name="_token" :value="csrfToken">
                <input type="hidden" name="post_id" :value="post.id">
                <br>
                <textarea :id="'comment_body'+post.id" name="body"
                          placeholder="Bis zu 800 Zeichen"
                          rows="5" cols="50"
                          required
                          minlength="5"
                          maxlength="800"
                          aria-label="Hinterlasse einen Kommentar">

                </textarea>
                <br>
                <input type="submit" value="Kommentar absenden"/>
                <a @click.prevent="clearFormComment('comment_body'+post.id)" href="">Abbrechen </a>
            </form>

        </div>

    </div>
</template>


<script>

import UserComment from "@/components/UserComment"
import DisclaimerLogin from "@/components/DisclaimerLogin";

export default {
    name: "UserPost",

    data: function () {
        return {
            showFormNewComment: true,
            showButtonComment: true,
            showFormEditPost: false,
        }
    },

    props: {
        post: {
            type: null
        },
        authUser: {
            type: null
        },
        csrfToken: {
            type: String
        }
    },

    components: {DisclaimerLogin, UserComment},

    methods:
        {
            clearFormComment(element) {
                document.getElementById(element).value = '';
                this.showFormNewComment = !this.showFormNewComment;
                this.showButtonComment = !this.showButtonComment;
            },

            clearFormPost(element) {
                document.getElementById(element).value = '';
                this.showFormEditPost = !this.showFormEditPost;
                this.showButtonComment = !this.showButtonComment;
            },

            submit() {
                if (confirm("Achtung: " +
                    "Dies löscht deinen Post INKLUSIVE ALLEN KOMMENTAREN zu diesem Post! " +
                    "Willst du das wirklich machen?")) {
                    this.$refs.form.submit();
                }
            }
        }

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

.user-post {
    background-color: #a2b6d6;
    padding: 1px 10px 1px 10px;
    border-radius: 5px;
    margin: 20px 10px 20px 10px;
}

.user-post-header, .user-post-footer {
    font-size: 70%;
}

button, input {
    font-size: 95%;
}

textarea {
    width: 90%;
    max-width: 350px;
}


</style>
