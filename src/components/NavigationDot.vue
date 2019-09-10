<template>
  <div class="navigation-dot bounce"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavigationDot extends Vue {}
</script>

<style lang="scss" scoped>
.navigation-dot {
  height: 5vw;
  width: 5vw;
  max-height: 30px;
  max-width: 30px;
  background-color: #ff4040;
  border-radius: 100%;
  animation-duration: 2s;
  animation-iteration-count: 5;
  animation-delay: 2s;
}

.bounce {
  animation-name: bounce;
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
}
@keyframes bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  30% {
    transform: scale(0.95, 1.05) translateY(-20px);
  }
  50% {
    transform: scale(1.05, 0.95) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-7px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
</style>