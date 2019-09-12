<template>
  <div class="main-container">
    <router-link to="/">
      <NavigationDot />
    </router-link>
    <h1 class="hero">Have a big problem that needs solving?</h1>
    <p>Let's <a href="mailto:info@tao.team?subject=Let's build something awesome" target="_blank">get started</a>.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavigationDot from '@/components/NavigationDot.vue';

@Component({
  components: {
    NavigationDot,
  },
})
export default class Contact extends Vue {
  created() {
    this.$store.commit('setAppBackgroundColor', '#ff4040');
  }

  beforeDestroy() {
    this.$store.commit('resetAppBackgroundColor');
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.hero,
p {
  font-weight: 800;
  width: 80%;
  margin: 10vh auto;
  font-size: calc(40px + (75 - 40) * ((100vw - 320px) / (1024 - 320)));
  line-height: 1.1em;
  text-align: left;
}

a {
  color: #151515;
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

.navigation-dot {
  background-color: #f9f9f9;
}
</style>