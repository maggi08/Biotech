<template>
  <div class="container flex items-center relative py-28">
    <div class="pr-12 w-2/5 mr-10">
      <UiTitle> Технологии </UiTitle>

      <h2 class="font-semibold text-4xl leading-10 text-green-100 mt-3">
        Нанотела
      </h2>

      <p class="font-medium font-xl leading-9 mt-3">
        Технологическая платформа компании ARLAN BIOTECH основана на создании
        синтетических нанотел. Нанотело является однодоменным антителом и
        представляет собой фрагмент антитела, состоящий из одного мономерного
        вариабельного домена антитела. Подобно целому антителу, оно способно
        избирательно связываться со специфическим антигеном. Имея молекулярную
        массу всего 12–15 кДа, однодоменные антитела намного меньше, чем обычные
        антитела (150–160 кДа).

        <br />
        Первые однодоменные антитела были сконструированы из антител с тяжелой
        цепью, обнаруженных у верблюдовых. Было показано, что нанотела
        верблюдовых так же специфичны, как и антитела, а в некоторых случаях они
        более устойчивы. Меньший размер и один домен облегчают экспрессию
        нанотел в бактериальных клетках для массового производства.
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
        src="@/assets/img/Protein_PELI2_PDB_3EGA 1-technologies.png"
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
