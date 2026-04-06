import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default function DonutChart({ data }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.title,
        datasets: [{
          data: data.value,
          backgroundColor: ['#dd0000','#ca2500','#b22100','#f20400','#aa1900','#b74000'],
        }]
      },
      options: {
        plugins: {
          legend: { display: false },
          datalabels: { color: '#fff', font: { weight: 'bold', size: 12 }, formatter: (val, ctx) => ctx.chart.data.labels[ctx.dataIndex] }
        },
        responsive: false
      },
      plugins: [ChartDataLabels]
    })

    return () => chart.destroy()
  }, [data])

  return <canvas ref={canvasRef} width={400} height={350}></canvas>
}