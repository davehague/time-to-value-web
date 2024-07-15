<!-- ClockSvg.vue -->
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="mx-auto mb-4">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop class="stop1" offset="0%" />
        <stop class="stop2" offset="100%" />
      </linearGradient>
    </defs>
    <!-- Clock face -->
    <circle cx="100" cy="100" r="90" fill="none" stroke="url(#grad1)" stroke-width="8" />
    <!-- Hour markers -->
    <g stroke="url(#grad1)" stroke-width="4" stroke-linecap="round">
      <line class="clock-marker" x1="100" y1="20" x2="100" y2="30" />
      <line class="clock-marker" x1="180" y1="100" x2="170" y2="100" />
      <line class="clock-marker" x1="100" y1="180" x2="100" y2="170" />
      <line class="clock-marker" x1="20" y1="100" x2="30" y2="100" />
    </g>
    <!-- Minute hand -->
    <line id="minuteHand" x1="100" y1="100" x2="100" y2="40" stroke="#333" stroke-width="8" stroke-linecap="round">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="90 100 100" to="330 100 100"
        dur="6s" fill="freeze" repeatCount="0" />
    </line>
    <!-- Hour hand -->
    <line x1="100" y1="100" x2="100" y2="40" stroke="#333" stroke-width="4" stroke-linecap="round">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="270 100 100" to="395 100 100"
        dur="6s" fill="freeze" repeatCount="0" />
    </line>
    <!-- T step -->
    <line  id="t-step" x1="100" y1="100" x2="100" y2="170" stroke="#333" stroke-width="8" stroke-linecap="round">
      <animate attributeName="visibility" from="visible" to="hidden" begin="2s" dur="0.5s" fill="freeze" />
    </line>
  </svg>
</template>

<script setup>
</script>

<style scoped>
.stop1 {
  stop-color: skyblue;
  stop-opacity: 1;
}

.stop2 {
  stop-color: salmon;
  stop-opacity: 1;
}

line {
  stroke: white;
  stroke-width: 8;
  stroke-linecap: round;
}

.clock-marker {
  stroke-width: 4;
}
</style>
