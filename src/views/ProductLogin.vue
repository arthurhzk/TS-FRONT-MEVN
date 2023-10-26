<template>
  <div class="bg-slate-200 flex flex-col items-center justify-center gap-2 p-2">
    <h1 class="font-bold text-lg leading-22 uppercase text-gray-600">Login</h1>
    <p>
      Novo no site?
      <router-link to="/sign"
        ><span class="border-b-2 border-gray-500"
          >Registre-se</span
        ></router-link
      >
    </p>
  </div>
  <div class="flex items-center justify-center bg-slate-200 pb-8">
    <form class="flex flex-col gap-5 pt-7">
      <div>
        <input
          class="rounded-md px-3 py-2 w-80 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="login"
          placeholder="Login ou E-mail"
        />
      </div>
      <div>
        <input
          class="rounded-md px-3 py-2 w-80 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          name="password"
          placeholder="Senha"
        />
      </div>
      <the-button class="font-bold py-2 px-4 rounded"> Acessar </the-button>
    </form>
  </div>
</template>

<script lang="ts">
import TheButton from "@/components/atoms/TheButton.vue";
export default {
  name: "ProductLogin",
  components: {
    TheButton,
  },
};
</script>
