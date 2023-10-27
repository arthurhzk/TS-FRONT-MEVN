<template>
  <div class="bg-slate-200 flex flex-col items-center justify-center gap-2 p-2">
    <h1 class="font-bold text-lg leading-22 uppercase text-gray-600">
      Cadastre-se
    </h1>

    <FormKit type="form" submit-label="Registrar">
      <FormKit
        class="form-kit"
        type="text"
        name="name"
        id="name"
        validation="required|length:5,15|alphanumeric"
        label="Nome"
        placeholder="“João da Silva”"
        autocomplete="off"
      />

      <FormKit
        type="select"
        label="Gênero"
        name="gender"
        id="gender"
        placeholder=""
        :options="['Masculino', 'Feminino', 'Outros']"
      />

      <FormKit
        type="email"
        name="email"
        id="email"
        validation="required|email"
        label="E-mail"
        placeholder="joaodasilva@email.com"
      />

      <FormKit
        type="password"
        name="password"
        label="Senha"
        validation="required"
        placeholder="No mínimo 6 caracteres"
      />

      <FormKit
        type="password"
        name="password_confirm"
        id="password_confirm"
        label="Confirmar senha"
        validation-label="Confirmação de senha"
      />

      <FormKit
        type="text"
        name="phone"
        label="Telefone"
        placeholder="(XX) XXXX-XXXX"
        :validation="[['required'], ['matches', /^\d{3}-\d{3}-\d{4}$/]]"
        :validation-messages="{
          matches: 'Phone number must be formatted: (XX) XXXX-XXXX',
        }"
      />
    </FormKit>
  </div>
</template>

<script lang="ts">
export default {
  name: "RegisterForm",
};
</script>

<style scoped>
.form-kit {
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  width: 80%;
  border: 1px solid #cbd5e0;
  outline: none;
}
</style>
