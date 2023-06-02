<template>
  <canvas ref="barChart" id="barChart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted(){
        // const ctx = document.getElementById('barChart');
        // const ctx = document.querySelector('#barChart');
        // const ctx = $("#barChart");
        // vue에서는 reference 로 접근 한다.
        const ctx = this.$refs.barChart;
        const data = [{x: 'Jan', net: 100, cogs: 50, gm: 50}, {x: 'Feb', net: 120, cogs: 55, gm: 75}];
        const cfg = {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb'],
                datasets: [{
                label: 'Net sales',
                data: data,
                parsing: {
                    yAxisKey: 'net'
                }
                }, {
                label: 'Cost of goods sold',
                data: data,
                parsing: {
                    yAxisKey: 'cogs'
                }
                }, {
                label: 'Gross margin',
                data: data,
                parsing: {
                    yAxisKey: 'gm'
                }
                }]
            },
        };
        new Chart(ctx,cfg);
    }
}
</script>

<style>

</style>