<template>
  <header class="fixed top-0 left-0 w-full bg-white-100 z-50">
    <div
      class="container w-full mx-auto flex items-center justify-between py-4"
    >
      <nxut-link to="/" class="block" :style="`width: 200px; height: 80px`">
        <img src="@/assets/img/logo.png" width="199" height="80" alt="logo" />
      </nxut-link>

      <div
        class="flex items-center justify-between pt-3 text-black-100 ml-auto"
      >
        <nav class="w-full max-w-full" style="max-width: 876px">
          <ul class="flex items-center justify-between">
            <li
              class="mx-1 pt-3 transition-all border-t border-black-100 w-32 hover:border-green-100 hover:text-green-100"
            >
              <nuxt-link to="/" class="font-medium text-lg leading-6">
                {{ $t("menu1") }}
              </nuxt-link>
            </li>
            <li
              class="mx-1 pt-3 transition-all border-t border-black-100 w-32 hover:border-green-100 hover:text-green-100"
            >
              <nuxt-link to="/" class="font-medium text-lg leading-6">
                {{ $t("menu2") }}
              </nuxt-link>
            </li>
            <li
              class="mx-1 pt-3 transition-all border-t border-black-100 w-32 hover:border-green-100 hover:text-green-100"
            >
              <nuxt-link to="/" class="font-medium text-lg leading-6">
                {{ $t("menu3") }}
              </nuxt-link>
            </li>
            <li
              class="mx-1 pt-3 transition-all border-t border-black-100 w-32 hover:border-green-100 hover:text-green-100"
            >
              <nuxt-link to="/" class="font-medium text-lg leading-6">
                {{ $t("menu4") }}
              </nuxt-link>
            </li>
            <li
              class="mx-1 pt-3 transition-all border-t border-black-100 w-32 hover:border-green-100 hover:text-green-100"
            >
              <nuxt-link to="/" class="font-medium text-lg leading-6">
                {{ $t("menu5") }}
              </nuxt-link>
            </li>
            <li
              class="mx-1 pt-3 transition-all border-t border-black-100 w-32 hover:border-green-100 hover:text-green-100"
            >
              <nuxt-link to="/" class="font-medium text-lg leading-6">
                {{ $t("menu6") }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="flex items-center ml-14 pl-1 cursor-pointer">
          <div
            v-if="$i18n.locale === 'ru'"
            class="mr-1 text-green-100"
            @click="setLocale('kz')"
          >
            KZ
          </div>
          <div
            v-if="$i18n.locale === 'kz'"
            class="mr-1 text-green-100"
            @click="setLocale('en')"
          >
            EN
          </div>
          <div
            v-if="$i18n.locale === 'en'"
            class="mr-1 text-green-100"
            @click="setLocale('ru')"
          >
            RU
          </div>

          <!-- prettier-ignore -->
          <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.73814 4.77322C4.88845 4.90339 5.11155 4.90339 5.26186 4.77322L9.38512 1.20237C9.66508 0.959918 9.49362 0.5 9.12326 0.5H0.876738C0.506384 0.5 0.334915 0.959918 0.614877 1.20237L4.73814 4.77322Z" fill="#0D927D"/>
        </svg>
        </div>
      </div>
    </div>
  </header>
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
  methods: {
    setLocale(lang) {
      this.$root.$i18n.locale = lang;
    },
  },
};
</script>

<style></style>
