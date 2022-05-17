<template>
  <div class="flex items-center space-x-3">
    <div class="page" :disabled="!hasPrevPage" @click="onPrevPage">Prev</div>
    <div class="pages flex items-center space-x-3">
      <div
        v-for="item in pages"
        :key="item"
        class="page"
        @click="pageClick(item)"
      >
        {{ item }}
      </div>
    </div>

    <div class="page" :disabled="!hasNextPage" @click="onNextPage">Next</div>
    {{ page }} {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      default: 1,
    },
    value: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    page: 1,
  }),
  computed: {
    hasPrevPage() {
      return this.page > 1;
    },
    hasNextPage() {
      return this.page < this.pages;
    },
  },
  created() {
    this.page = this.value;
  },
  methods: {
    onPrevPage() {
      if (this.page <= 1) return;
      this.page -= 1;
    },
    onNextPage() {
      if (this.page + 1 > this.pages) return;
      this.page += 1;
    },
    pageClick(page) {
      console.log(page);
      this.page = page;
      // this.$emit();
    },
  },
};
</script>

<style lang="postcss">
.page {
  @apply cursor-pointer transition
  font-medium leading-4 text-black-100 
  hover:text-white active:text-white disabled:text-gray-100
  border border-gray-100 hover:border-green-100 
  bg-white hover:bg-green-100 
  flex items-center justify-center;

  padding-left: 14px;
  padding-right: 14px;
  min-width: 40px;
  height: 40px;
}
</style>
