<script setup>
import Button from "@/modules/global/components/Button.vue";
import router from "@/router";
import {reactive} from "vue";
import {useAuthStore} from "@/modules/auth/store/authStore";
//STORE
const authStore = useAuthStore()
//DATA
const loginData = reactive({
    userName: null,
    password: null
})
// methods
const login = () => {
    authStore.login({...loginData})
        .then(() => {
            router.push({name: 'products'})
        })
        .catch(error => {
            console.log(error)
            // Aqui prodríamos gestionar los errores para que se muestren en los inputs
        })
/*
    console.log({loginData})
*/
/*
    router.push({name: 'products'})
*/
}
</script>

<template>
    <div class="view-content">
        <h1>LoginView</h1>
        <div class="row-container row-column">
            <label for="user">{{ $t('auth.username') }}</label>
            <input id="user" name="user" type="text" v-model="loginData.userName">
        </div>
<div class="row-container row-column">
    <label for="password">{{ $t('auth.password') }}</label>
    <input id="password" name="password" type="password" v-model="loginData.password">
</div>
<div class="row-container">
    <Button
        :title="$t('auth.login')"
        :type="'action'"
        @click="login"
    />
    <Button
        :title="$t('auth.register')"
        :type="'action'"
        @click="login"
    />
</div>

    </div>
</template>

<style scoped>
.row-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

.row-column {
    flex-direction: column;
}
</style>
