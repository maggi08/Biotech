<template>
  <div class="w-full flex items-center">
    <div
      v-for="(item, index) in tabs"
      :key="index"
      class="h-16 w-full flex items-center justify-center font-medium text-lg leading-6 uppercase text-center transition-all cursor-pointer hover:text-green-100"
      :class="[
        tab === index
          ? 'text-green-100 border-green-100 border-b-4'
          : 'border-b-2 hover:border-b-4 border-green-200 hover:border-green-100',
      ]"
      @click="handleClick(index)"
    >
      {{ item }} {{ value }} {{ tab }}
    </div>
  </div>
</template>

<script>
export default {
  name: "UiTabs",
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    tab: 0,
  }),
  methods: {
    handleClick(index) {
      this.tab = index;
      this.$emit("tabChanges", index);
    },
  },
};
</script>

<style></style>
