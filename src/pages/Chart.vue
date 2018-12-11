<template>
    <v-content>
        <div class="chart">
            <line-chart :chartdata="chartData" :options="chartOptions" :styles="chartStyles"></line-chart>
        </div>
        
    </v-content>
</template>

<script>
import LineChart from '../components/LineChart.vue'
import chartData from '../chart-data.js';

export default {
    components: {
        LineChart
    },
    data() {
        return {
            chartData: this.$store.getters.jokesData,
            chartOptions: {
                responsive: true
            }
        }
    },
    mounted() {

    },
    computed: {
        chartStyles() {
            return {
                height: '300px',
                position: 'relative'
            }
        }
    }
}
</script>

<style scopped>
    .chart {
        margin: 0 auto;
        width: 600px;
    }
</style>