<template>
  <div>
    <h1>chart.js</h1>
    <line-chart></line-chart>
    <bar-chart></bar-chart>
  </div>
</template>

<script>
import LineChart from '@/lib/LineChart.vue';
import BarChart from '@/lib/BarChart.vue';

export default {
    components: {
        LineChart,
        BarChart
    }
}
</script>