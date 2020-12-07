<template>
    <div class="user-comment">

        <p class="user-comment-header" style="overflow: hidden">
            <a :href="'/user/'+comment.user.id" style="float: left">{{ comment.user.name }}</a>
            <span style = "float: right">{{ comment.created_at}}</span>

<!--           includes "edited on" date if post is edited-->
            <template v-if="comment.updated_at != comment.created_at">
            , geändert am {{comment.updated_at}}
            </template>
        </p>
        <p>{{ comment.body }}</p>
    </div>

</template>

<script>
export default {
    name: "UserComment",

    props: {
        comment: {
            type: null
        },
    },
}
</script>

<style scoped>

.user-comment {
    margin: 40px
}

a {
    all:revert;
}

.user-comment-header {
    font-size: 70%;
}
</style>









