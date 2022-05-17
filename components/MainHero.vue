<template>
  <section class="w-full h-screen relative py-28">
    <img
      class="h-full absolute top-0 right-0"
      style="z-index: -1"
      src="@/assets/img/hero.png"
      alt=""
    />
    <img
      class="h-2/3 absolute top-0 right-0"
      style="z-index: -1"
      src="@/assets/img/pattern.png"
      alt=""
    />
    <div class="container w-full h-full">
      <div
        class="w-full h-full my-auto flex flex-col justify-center"
        style="max-width: 588px"
      >
        <h1 class="text-5xl font-bold leading-snug">
          Новые технологии <br />
          в биогенетики
        </h1>
        <h2 class="text-xl leading-9 mt-5">
          Создаем наукоемкие и высокотехнологичные продукты на основе
          профессиональных знаний в областях синтетической биологии, диагностики
          и машинного обучения.
        </h2>
      </div>
    </div>
  </section>
</template>

<i18n>
  {
    "kz": {
      "menu1":"Биз туралы",
      "menu2":"Technologies",
      "menu3":"Projects",
      "menu4":"News",
      "menu5":"Clients",
      "menu6":"Contacts"
    },
    "en": {
      "menu1":"About",
      "menu2":"Technologies",
      "menu3":"Projects",
      "menu4":"News",
      "menu5":"Clients",
      "menu6":"Contacts"
    },
    "ru": {
      "menu1":"О компании",
      "menu2":"Технологии",
      "menu3":"Проекты",
      "menu4":"Новости",
      "menu5":"Клиенты",
      "menu6":"Контакты"
    }
  }
</i18n>

<script>
export default {
  methods: {},
};
</script>

<style></style>
