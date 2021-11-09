<template>
    <div>
        <h1>usercomponent</h1>
        <h2>user id is {{userid}}</h2>
    </div>
</template>

<script>
    export default {
        name:'user',
        data() {
            return {
                userid: this.$route.params.id
            }
        },
    }
</script>