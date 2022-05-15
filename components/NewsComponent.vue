<template>
  <div class="grid grid-cols-3 items-start">
    <div
      v-for="(item, index) in news"
      :key="index"
      class="border-gray-100"
      :class="{
        'pr-7 border-r-2': (index + 1) % 3 === 1,
        'px-7 border-r-2': (index + 1) % 3 === 2,
        'pl-7': (index + 1) % 3 === 0,
      }"
    >
      <p class="text-gray-100 font-medium leading-5 cursor-pointer">
        {{ item.date }}
      </p>
      <nuxt-link :to="`/news/${item.title}`">
        <h3 class="mt-5 text-2xl hover:text-green-100 font-medium leading-8">
          {{ item.title }}
        </h3>
      </nuxt-link>
      <p class="mt-5 leading-7">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({}),
};
</script>

<style></style>
