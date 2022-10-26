<script setup lang="ts">
import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const email = ref("");
const password = ref("");

const router = useRouter();

const login = function () {
  axios
      .post("/auth/login", {
        email: email.value,
        password: password.value
      })
      .then(() => {
        router.replace({name: "home"})
      });
};
</script>

<template>

  <div class="login">
    <h3>Login</h3>
    <el-input v-model="email" placeholder="이메일을 입력하세요."/>
    <el-input v-model="password" type="password" placeholder="비밀번호를 입력하세요."/>
    <el-button type="primary" @click="login()">로그인</el-button>
    <p>만약 계정이 없다면, <router-link to="/signup">회원가입</router-link>을 먼저 진행해주세요!</p>
  </div>

</template>

<style scoped lang="scss">

</style>