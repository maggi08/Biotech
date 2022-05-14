<template>
  <div if="technologies" class="py-14 container flex items-center">
    <div class="w-full pr-3">
      <h2 class="text-5xl font-bold">Технологии</h2>

      <p class="font-green-100 text-5xl font-bold">
        {{ tab }}
      </p>
      <UiTabs
        class="my-5"
        :tabs="['Нанотела', 'Машин. обучение', 'Технология 3', 'Технология 4']"
        @tabChanges="changeTab"
      />

      <p class="font-medium">
        Технологическая платформа компании ARLAN BIOTECH основана на создании
        синтетических нанотел. Нанотело является однодоменным антителом и
        представляет собой фрагмент антитела, состоящий из одного мономерного
        вариабельного домена антитела. Подобно целому антителу, оно способно
        избирательно связываться со специфическим антигеном. Читать больше
      </p>
    </div>
    <div
      :style="`
        width: 100%;
        max-width: 589.05px;
        height: 100%;
        max-height: 532.89px;`"
    >
      <img
        class="w-full h-full"
        src="../assets/img/Protein_PELI2_PDB_3EGA 1-technologies.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: 0,
  }),
  methods: {
    changeTab(value) {
      console.log(value);
    },
  },
};
</script>

<style></style>
