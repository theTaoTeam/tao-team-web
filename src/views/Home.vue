<template>
  <div class="home-container">
    <img src="../assets/logo.png" alt="Tao Team Logo" />
    <p>
      We're in the process of making this site awesome. In the meantime you can always reach out to us at
      <a
        href="mailto:info@tao.team"
        target="_blank"
      >info@tao.team</a>.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
img {
  width: 80%;
  margin-bottom: 2vh;
}

p {
  font-size: 3vh;
  font-weight: bold;
  width: 80%;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: #ff5252;
}
</style>