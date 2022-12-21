<template>
  <v-footer height="270" class="d-flex align-start pt-6">
    <v-container>
      <v-card class="transparent" flat>
        <v-row class="text-sm-left text-center">
          <v-col cols="12" sm="6">
            <h1 class="text-h6">
              <span class="font-weight-regular">Made By </span>
              <span
                class="special_font"
                style="font-family: 'Barlow', sans-serif !important"
                >Mohammed Fawzey</span
              >
            </h1>
          </v-col>
          <v-col class="d-flex justify-sm-end justify-center">
            <div class="btn_group d-flex">
              <span v-for="(item, i) in items.socials.slice(1, 4)" :key="i">
                <v-hover v-slot="{ hover }">
                  <v-btn
                    target="_blank"
                    :href="item.link"
                    icon
                    :color="hover ? item.color : ''"
                  >
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-btn>
                </v-hover>
              </span>
            </div>
          </v-col>
        </v-row>
        <v-divider class="my-4"></v-divider>
        <div class="copy_righ text-center">
          <h1>{{ new Date().getFullYear() }}</h1>
        </div>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
import data from "@/db/data.json";
export default {
  data: () => ({
    items: data,
  }),
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap");
.special_font {
  font-family: "Barlow", sans-serif !important;
}
</style>
