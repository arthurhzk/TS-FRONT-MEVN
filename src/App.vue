<template>
  <the-nav></the-nav>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script lang="ts">
import TheNav from "@/components/TheNav.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheNav,
    TheFooter,
  },
};
</script>
