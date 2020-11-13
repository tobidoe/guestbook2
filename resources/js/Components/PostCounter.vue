<template>
    <div class="m-4 bg-orange-300 rounded-md p-2 shadow-md">
        <div>
            {{name}} {{ counter }}
        </div>
        <div>
            Big {{name}} {{ bigCounter }}
        </div>


        <div v-if="editMode">
            <textarea  cols="30" rows="2" v-model="body"></textarea>
        </div>

        <div v-else class="my-2">
            {{body}}
        </div>

        <div class="p-2 bg-blue-300 rounded-md shadow-md" @click="editMode = !editMode">
            <span v-if="editMode">back</span>
            <span v-else>
                edit
            </span>
        </div>



        <div class="flex justify-between mt-2">

            <div class="p-2 bg-blue-300 rounded-md shadow-md" @click="increment">
                Increment
            </div>

            <div class="p-2 bg-blue-300 rounded-md shadow-md" @click="decrement">
                Decrement
            </div>


        </div>

    </div>
</template>

<script>

export default {

    name: "TestPage",

    props: {
        initialCounter: {
            type: Number,
        },

        initialBody: {
            type: String
        },

        name: {
            type: String,
            default: 'DefaultCounter'
        }
    },

    data() {
        return {
            counter: this.initialCounter,
            body: this.initialBody,
            editMode: false
        }
    },

    computed: {
        bigCounter() {
            return this.counter * 100 + 5;
        }
    },

    methods: {

        increment() {
            this.counter ++;
        },

        decrement() {
            this.counter--;
        }

    }







}

</script>

<style scoped>

</style>
