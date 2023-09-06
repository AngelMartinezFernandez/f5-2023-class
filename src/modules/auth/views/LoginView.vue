<script setup>
import Button from "@/modules/shared/components/Button.vue";
import router from "@/router";

// methods
const login = () => {
    router.push({name: 'products'})
}
</script>

<template>
    <div class="logo-side">Logo</div>
    <div>
        <h1>LoginView</h1>
        <label for="user">{{ $t('auth.username') }}</label>
        <input id="user" name="user" type="text">
        <label for="password">{{ $t('auth.password') }}</label>
        <input id="password" name="password" type="password">
        <Button
            :title="$t('auth.login')"
            :type="'action'"
            @click="login"
        />
    </div>
</template>

<style scoped>
.logo-side {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #2d2a4c;
}
</style>
