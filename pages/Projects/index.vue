<template>
  <div class="container flex items-center relative py-28">
    <div class="pr-12 w-2/5 mr-10">
      <UiTitle> Проекты </UiTitle>

      <h2 class="font-semibold text-4xl leading-10 text-green-100 mt-3">
        Synthethiq
      </h2>

      <p class="font-medium font-xl leading-9 mt-3">
        SYNTHETIQ™ - линейка экспресс-тестов с использованием синтетических
        нанотел на основе иммунохроматографического анализа (ИХА). Первым
        проектом данной линейки является антиген-тест на определение SARS-CoV-2
        для домашнего использования.
        <br />
        Кроме того, на сегодняшний день ведется разработка тестов на
        беременность, гепатитов B и C, ВИЧ инфекций.
      </p>
    </div>
    <div
      class="w-3/5"
      :style="`
        width: 100%;
        max-width: 710px;
        height: 100%;
        max-height: 644px;`"
    >
      <img
        class="w-full h-full"
        src="@/assets/img/Coronavirus-free-high-quality-png-image-no-3-1280x720 копия 1-projects.png"
        alt=""
      />
    </div>

    <img
      class="h-2/3 absolute top-0 right-0"
      style="z-index: -1"
      src="@/assets/img/pattern.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
};
</script>

<style></style>
