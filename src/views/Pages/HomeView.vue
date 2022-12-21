<template>
  <div class="home_view py-4">
    <PortfolioHome v-if="true" />
    <!-- <HomeComp v-if="false" /> -->
  </div>
</template>

<script>
import PortfolioHome from "@/components/Portfolio/PortfolioHomeC";
export default {
  name: "HomeView",

  components: {
    PortfolioHome,
  },
};
</script>
<style lang="scss">
// $main: #090e1c;
$main: #fff;
$second: #a8a1ea;
.main_color {
  color: $main;
}
.second_color {
  color: $second;
}
.main_back {
  background: $main;
}
.second_back {
  background: $second;
}
</style>
