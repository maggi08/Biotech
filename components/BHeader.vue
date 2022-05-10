<template>
  <header class="container mx-auto flex items-center justify-between py-4">
    <img src="@/assets/img/logo.png" width="199" height="80" alt="logo" />

    <nav class="flex items-center">
      <ul class="flex items-center justify-between">
        <li class="mx-1">
          <nuxt-link to="/"> О компании </nuxt-link>
        </li>
        <li class="mx-1">
          <nuxt-link to="/"> Технологии </nuxt-link>
        </li>
        <li class="mx-1">
          <nuxt-link to="/"> Проекты </nuxt-link>
        </li>
        <li class="mx-1">
          <nuxt-link to="/"> Новости </nuxt-link>
        </li>
        <li class="mx-1">
          <nuxt-link to="/"> Клиенты </nuxt-link>
        </li>
        <li class="mx-1">
          <nuxt-link to="/"> Контакты </nuxt-link>
        </li>
        <li class="mx-1">
          <nuxt-link to="/"> Клиенты </nuxt-link>
        </li>
      </ul>
      <div class="flex">
        RU
        <!-- prettier-ignore -->
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.73814 4.77322C4.88845 4.90339 5.11155 4.90339 5.26186 4.77322L9.38512 1.20237C9.66508 0.959918 9.49362 0.5 9.12326 0.5H0.876738C0.506384 0.5 0.334915 0.959918 0.614877 1.20237L4.73814 4.77322Z" fill="#0D927D"/>
        </svg>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
