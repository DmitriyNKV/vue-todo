<template>
  <div id="app" class="block">
    <h1>TODO APP</h1>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

.block {
  max-width: 500px;
  height: 900px;
  position: relative;
  left: 40%;
  margin: -125px 0 0 -125px;
}
</style>
