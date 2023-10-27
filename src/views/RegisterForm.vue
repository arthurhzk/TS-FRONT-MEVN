<template>
  <div><h4 class="form-label">Sign up</h4></div>

  <FormKit type="form" submit-label="Registrar">
    <FormKit
      type="text"
      name="name"
      id="name"
      validation="required|not:Admin"
      label="Nome"
      placeholder="“João da Silva”"
    />

    <FormKit
      type="select"
      label="Gênero"
      name="gender"
      id="gender"
      placeholder="Digite seu gênero"
      :options="['Masculino', 'Feminino', 'Outros']"
    />
    <FormKit
      type="email"
      name="email"
      id="email"
      validation="required|email"
      label="E-mail"
      placeholder=""
    />
  </FormKit>
</template>
