<template>
    <div>
        {{example}}
        <post-counter name="Test1" initial-body="My Custom Body" :initial-counter="12"></post-counter>
        <post-counter name="Test2" initial-body="some other Body" :initial-counter="123"></post-counter>
        <post-counter initial-body="third Body" :initial-counter="25-3"></post-counter>
    </div>
</template>

<script>

import PostCounter from "@/Components/PostCounter";

export default {

    name: "TestPage",

    props: {
        example: {
            type: null
        }
    },

    components: {
        PostCounter
    }



}

</script>

<style scoped>

</style>
