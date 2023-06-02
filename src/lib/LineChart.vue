<template>
    <canvas ref="lineChart" id="lineChart" ></canvas>
</template>

<script>
export default {
    props:  ['propdata'],
    mounted(){
        const ctx = this.$refs.lineChart;
        const cfg = {
            type: 'line',
            data: {
                datasets: this.propdata,
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            options: {
                scales: {
                    'left-y-axis': {
                        type: 'linear',
                        position: 'left'
                    },
                    'right-y-axis': {
                        type: 'linear',
                        position: 'right'
                    }
                }
            }
        }
        new this.$customChart(ctx,cfg);
    }

}
</script>

<style>

</style>