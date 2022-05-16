<template>
  <section class="bg-green-100">
    <div class="container flex items-center py-16">
      <div class="w-2/5 mr-2">
        <UiTitle class="text-white"> Контакты </UiTitle>
        <ContactItem class="mt-8">
          <template slot="icon">
            <img
              src="@/assets/img/location_map_marker_icon_131522 1.svg"
              alt=""
            />
          </template>
          Республика Казахстан, ул. Иманова 56, офис 501
        </ContactItem>

        <ContactItem>
          <template slot="icon">
            <img src="../assets/img/phone 1.svg" alt="" />
          </template>
          +7 770 770 77 77
        </ContactItem>

        <ContactItem>
          <template slot="icon">
            <img src="../assets/img/phone 1.svg" alt="" />
          </template>
          +7 770 770 77 77
        </ContactItem>
      </div>
      <div class="relative w-3/5 rounded-xl overflow-hidden h-96" style="">
        <iframe
          src="https://yandex.kz/map-widget/v1/-/CCUFrVwxkC"
          width="100%"
          height="100%"
          frameborder="1"
          allowfullscreen="true"
          style="position: relative"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
const ContactItem = {
  render(h) {
    return h(
      "div",
      {
        staticClass: "font-medium text-xl text-white mt-5 flex items-center",
      },
      [
        h("span", { staticClass: "w-6 h-6 mr-5" }, this.$slots.icon),
        h(
          "span",
          {
            staticClass: "",
          },
          this.$slots.default
        ),
      ]
    );
  },
};
export default {
  components: {
    ContactItem,
  },
};
</script>

<style></style>
