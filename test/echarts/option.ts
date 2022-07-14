import { EChartsOption } from 'echarts';

const options: EChartsOption = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    dataset: {
        // dimensions: ['product', 'count'],
        source: [
            { product: '衬衫', count: 5 },
            { product: '羊毛衫', count: 20 },
            { product: '雪纺衫', count: 36 },
            { product: '裤子', count: 10 },
            { product: '高跟鞋', count: 10 },
            { product: '袜子', count: 20 }
        ]
    },
    legend: {
        data: ['销量']
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [
        {
            // dimensions: ['product', 'count'],
            name: '销量',
            type: 'bar',
            encode: {
                x: 'product',
                y: 'count'
            }
        }
    ]
};

export default options;
