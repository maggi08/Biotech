<template>
  <footer class="pt-12 pb-7 bg-green-300">
    <div class="container flex justify-between">
      <img
        src="@/assets/img/logo white 1.png"
        alt=""
        style="width: 170px; height: 70px"
      />

      <nav class="w-44">
        <ul>
          <h2 class="text-green-100 font-bold text-lg">Меню</h2>
          <li
            class="transtion hover:text-green-100 cursor-pointer text-white text-lg font-medium leading-6 mt-4"
          >
            <nuxt-link to="/#about"> О компании </nuxt-link>
          </li>
          <li
            class="transtion hover:text-green-100 cursor-pointer text-white text-lg font-medium leading-6 mt-4"
          >
            <nuxt-link to="/#technologies"> Технологии </nuxt-link>
          </li>
          <li
            class="transtion hover:text-green-100 cursor-pointer text-white text-lg font-medium leading-6 mt-4"
          >
            <nuxt-link to="/#projects"> Проекты </nuxt-link>
          </li>
          <li
            class="transtion hover:text-green-100 cursor-pointer text-white text-lg font-medium leading-6 mt-4"
          >
            <nuxt-link to="/#news"> Новости </nuxt-link>
          </li>
          <li
            class="transtion hover:text-green-100 cursor-pointer text-white text-lg font-medium leading-6 mt-4"
          >
            <nuxt-link to="/#clients"> Клиенты </nuxt-link>
          </li>
          <li
            class="transtion hover:text-green-100 cursor-pointer text-white text-lg font-medium leading-6 mt-4"
          >
            <nuxt-link to="/#contacts"> Контакты </nuxt-link>
          </li>
        </ul>
      </nav>

      <div class="w-44">
        <ul>
          <h2 class="text-green-100 font-bold text-lg">Контакты</h2>
          <li
            class="transtion hover:text-green-100 cursor-pointer text-white text-lg font-medium leading-6 mt-4"
          >
            Республика Казахстан,ул. Иманова 56, офис 501
          </li>
          <li
            class="transtion hover:text-green-100 cursor-pointer text-white text-lg font-medium leading-6 mt-4"
          >
            +7 770 770 77 77
          </li>
          <li
            class="transtion hover:text-green-100 cursor-pointer text-white text-lg font-medium leading-6 mt-4"
          >
            +7 770 770 77 77
          </li>
        </ul>
      </div>

      <div class="w-44">
        <h2 class="text-green-100 font-bold text-lg">Социальные сети</h2>
        <div class="flex items-center nt-4">
          <div
            class="w-9 h-9 flex items-center justify-center border rounded-full mr-5 border-green-100 transition hover:bg-green-100 cursor-pointer"
          >
            <img
              src="../assets/img/FB_icon-icons.com_65484 1-facebook.svg"
              alt=""
            />
          </div>
          <div
            class="w-9 h-9 flex items-center justify-center border rounded-full mr-5 border-green-100 transition hover:bg-green-100 cursor-pointer"
          >
            <img
              src="../assets/img/LINKEDIN_icon-icons.com_65488 1-linkedin.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-11 mb-7 border-white border-t opacity-50"></div>
    <div class="container flex items-center justify-between text-white font-sm">
      <span> @ Все права защищены </span>
      <span> ТОО «ARLAN BIOTECH», 2022 год </span>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
