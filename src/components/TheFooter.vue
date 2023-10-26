<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow"></main>
    <footer class="bg-slate-50 text-gray-500 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <p>© 2023 Kunz Shoes</p>
        <ul class="flex gap-4">
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "TheFooter",
  data() {
    return {
      links: [
        { text: "Termos de uso", url: "#" },
        { text: "Política de privacidade", url: "#" },
        { text: "Contato", url: "#" },
      ],
    };
  },
};
</script>
