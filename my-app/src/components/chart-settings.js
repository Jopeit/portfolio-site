export function donutSettings(id,massive){
    const ctx = document.getElementById(id).getContext('2d');
    const data = {
        labels: massive.title,
        datasets: [{
        data: massive.value,
        backgroundColor: ['rgb(221, 0, 0)', 'rgb(202, 37, 0)','#b22100','#f20400','#aa1900','#b74000',], 
        hoverOffset: 4
        }]
        };
    const config = {
    type: 'doughnut',
    data: data,
    options: {
    responsive: false,
    plugins: {
        legend: {
            display: false
        },
        datalabels: {
            color: '#fff',
            formatter: (value, context) => {
                return context.chart.data.labels[context.dataIndex];
            },
            font: {
                weight: 'bold',
                size: 12
            }
        }
    }
},
plugins: [ChartDataLabels]
    };
    new Chart(ctx, config);
}
