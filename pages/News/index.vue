<template>
  <div class="container flex py-7 space-x-36">
    <div class="w-4/6">
      <h2
        class="font-semibold text-3xl leading-10 py-5 pb-8 border-b border-gray-100"
      >
        Новости
      </h2>

      <div class="">
        <div
          v-for="(item, index) in news"
          :key="index"
          class="flex border-b border-gray-100 py-7"
        >
          <img
            class="w-full object-cover"
            src="@/assets/img/фото-news-1.png"
            alt=""
            style="max-width: 405px; height: 280px"
          />
          <div class="pl-5">
            <nuxt-link :to="`/news/${index}`">
              <p
                class="text-xl leading-8 font-medium hover:text-green-100 transtition"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                scelerisque cras ornare tortor, vitae, id.
              </p>
            </nuxt-link>
            <p class="mt-4 font-medium text-gray-100 leading-5">
              08 октября 2021, 11:31
            </p>
            <p class="mt-4 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              in amet a sit nisl. Turpis etiam amet lectus mattis adipiscing
              mauris pharetra morbi. Felis viverra aenean montes, velit...
            </p>
          </div>
        </div>

        <!-- <div class="">Пред.</div>
          <div class="">След.</div> -->
        {{ page }}
        <UiPagination v-model="page" :pages="pages" />
      </div>
    </div>
    <div class="w-2/6">
      <h2
        class="font-semibold text-3xl leading-10 py-5 pb-8 border-b border-gray-100"
      >
        Популярное
      </h2>

      <div class="">
        <div
          v-for="(item, index) in news"
          :key="index"
          class="flex border-b border-gray-100 py-7"
        >
          <img
            class="w-full object-cover"
            src="@/assets/img/фото-news-1.png"
            alt=""
            style="max-width: 225px; height: 160px"
          />
          <div class="pl-5 flex flex-col justify-between">
            <nuxt-link :to="`/news/${index}`">
              <p class="font-medium leading-6 hover:text-green-100 transtition">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                scelerisque cras ornare tortor, vitae, id.
              </p>
            </nuxt-link>
            <p class="text-gray-100 text-sm leading-5">
              08 октября 2021, 11:31
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    news: [{}, {}, {}],
    page: 1,
    pages: 10,
  }),
};
</script>

<style></style>
