<template>
  <div>
    <h1>chart.js</h1>
    <line-chart :propdata="chartDataSet"></line-chart>
    <bar-chart :propdata="chartBarData"></bar-chart>
  </div>
</template>

<script>
import LineChart from '@/lib/LineChart.vue';
import BarChart from '@/lib/BarChart.vue';

export default {
  data() {
    return {
      chartDataSet: [{
        data: [20, 50, 100, 75, 25, 0],
        label: 'Left dataset',

        // This binds the dataset to the left y axis
        yAxisID: 'left-y-axis'
      }, {
        data: [0.1, 0.5, 1.0, 2.0, 1.5, 0],
        label: 'Right dataset',

        // This binds the dataset to the right y axis
        yAxisID: 'right-y-axis'
      }],
      chartBarData: [{
        label: 'Net sales',
        data: this.barD,
        parsing: {
          yAxisKey: 'net'
        }
      }, {
        label: 'Cost of goods sold',
        data: this.barD,
        parsing: {
          yAxisKey: 'cogs'
        }
      }, {
        label: 'Gross margin',
        data: this.barD,
        parsing: {
          yAxisKey: 'gm'
        }
      }],
      barD: [{ x: 'Jan', net: 100, cogs: 50, gm: 50 }, { x: 'Feb', net: 120, cogs: 55, gm: 75 }]
    }
  },
  components: {
    LineChart,
    BarChart
  }
}
</script>