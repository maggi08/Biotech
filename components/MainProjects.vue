<template>
  <div
    if="technologies"
    class="py-14 container flex items-center justify-between"
  >
    <div
      calss="w-1/2 pr-3"
      :style="`
        max-width: 586.96px;
        max-height: 628.23px;
        width: 586.96px;
        height: 628.23px;`"
    >
      <img
        class="w-full h-full"
        src="../assets/img/Coronavirus-free-high-quality-png-image-no-3-1280x720 копия 1-projects.png"
        alt=""
      />
    </div>
    <div class="w-1/2">
      <UiTitle> Проекты </UiTitle>

      <UiTabs class="my-5" :tabs="tabs" @tabClicked="tabChanged" />

      <p class="font-medium">
        SYNTHETIQ™ - линейка экспресс-тестов с использованием синтетических
        нанотел на основе иммунохроматографического анализа (ИХА). Первым
        проектом данной линейки является антиген-тест на определение SARS-CoV-2
        для домашнего использования. <br />
        Кроме того, на сегодняшний день ведется разработка тестов на
        беременность, гепатитов B и C, ВИЧ инфекций.
      </p>
      <nuxt-link to="/projects">
        <UiButton class="mt-7"> Читать больше </UiButton>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tabs: ["SYNTHETIQ", "GAMOW", "ПРОЕКТ 3", "ПРОЕКТ 4"],
    tab: 0,
  }),
  methods: {
    tabChanged(value) {
      this.tab = value;
    },
  },
};
</script>

<style></style>
