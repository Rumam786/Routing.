<template>
<div class="home">
    <p>
        <router-link to="user/1">ruman</router-link>
    </p>
    <p>
        <router-link to="user/2">usman</router-link>
    </p>
    <p>
        <router-link to="user/3">arslan</router-link>
    </p>
    <p>
        <router-link to="user/4">naeem</router-link>
    </p>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />

</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    }
}
</script>
