<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr />
    <h1>User No.{{ $route.params.id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザー</router-link>
     <router-link :to="{name:'users-id-profile',params:{id:(Number(id) + 1)}}">次のユーザー</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  watch: {},
};
</script>
