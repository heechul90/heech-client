<script setup lang="ts">
import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const email = ref("");
const password = ref("");
const name = ref("");

const router = useRouter();

const signup = function () {
  axios
      .post("/auth/signup", {
        email: email.value,
        password: password.value,
        name: name.value,
      })
      .then(() => {
        router.replace({name: "login"})
      });
};

</script>

<template>

  <div class="container">
    <p>회원가입</p>
    <el-input v-model="email" placeholder="이메일을 입력하세요."/>
    <el-input v-model="password" placeholder="비밀번호를 입력하세요."/>
    <el-input v-model="name" placeholder="이름을 입력하세요."/>

    <el-button type="primary" @click="signup()">가입하기</el-button>
    <span>또는 로그인으로 돌아가기</span>
  </div>

</template>

<style scoped lang="scss">



</style>