<template>
  <div class="home-container">
    <LogoLight class="logo" />
    <div class="main-container">
      <h1 class="hero">Creative technology is kind of our jam<span class="highlight">.</span></h1>
      <router-link to="/contact">
        <NavigationDot />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LogoLight from '@/components/LogoLight.vue';
import NavigationDot from '@/components/NavigationDot.vue';

@Component({
  components: {
    LogoLight,
    NavigationDot,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100vh;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
}

.hero {
  font-weight: 800;
  width: 80%;
  margin: 10vh auto;
  font-size: calc(40px + (75 - 40) * ((100vw - 320px) / (1024 - 320)));
  line-height: 1.1em;
  text-align: left;
}

.logo {
  width: 15%;
  min-width: 50px;
  max-width: 110px;
  display: block;
  margin: 0 auto 0 0;
}

.highlight {
  color: #ff4040;
}
</style>