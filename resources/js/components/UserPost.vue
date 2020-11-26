<template>
    <div class="user-post">
        <p class="user-post-header" style="overflow: hidden">
            <span style = "float: left">{{ post.user.name }}</span>
            <span style = "float: right">{{ post.created_at}}</span>

            <!--           includes "edited on" date if post is edited-->
            <template v-if="post.updated_at != post.created_at">
                , geändert am {{post.updated_at}}
            </template>
        </p>
        <p>{{ post.body }}</p>

        <user-comment v-for="comment in post.comments"
                     v-bind:comment="comment"
                     :key="comment.id"
        />
    </div>
</template>




<script>

import UserComment from "@/components/UserComment"

export default {
    name: "UserPost",

    data: function () {
        return {
        }
    },

    props: {
        post: {
            type: null
        },
    },
    components: {UserComment}
}
</script>

<style scoped>

.user-post {
    background-color: #a2b6d6;
    padding: 1px 10px 1px 10px;
    border-radius: 5px;
    margin: 20px 10px 20px 10px;
}

.user-post-header {
    font-size: 70%;
}


</style>
