<template>
  <canvas ref="barChart" id="barChart"></canvas>
</template>

<script>
export default {
    props: ['propdata'],
    mounted(){
        // const ctx = document.getElementById('barChart');
        // const ctx = document.querySelector('#barChart');
        // const ctx = $("#barChart");
        // vue에서는 reference 로 접근 한다.
        const ctx = this.$refs.barChart;
        const cfg = {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb'],
                datasets: this.propdata
            },
        };
        new this.$customChart(ctx,cfg);
    }
}
</script>

<style>

</style>