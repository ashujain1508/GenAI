import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import ApexChart from 'react-apexcharts'

// Function to generate distinct colors based on array length
const generateChartColors = (count: number) => {
    const baseColors = [
        '#00AEEF', // Barclays Blue
        '#1E3D6B', // Dark Navy
        '#7AC7E6', // Light Blue
        '#4B9CD3', // Medium Blue
        '#163A59', // Deep Blue
        '#9BDAF3', // Sky Blue
        '#005587', // Ocean Blue
        '#002D47'  // Midnight Blue
    ];

    // If count is less than or equal to baseColors length, return only needed colors
    if (count <= baseColors.length) {
        return baseColors.slice(0, count);
    }

    // If we need more colors, generate them by interpolating between existing ones
    const colors = [...baseColors];
    while (colors.length < count) {
        const index = colors.length % baseColors.length;
        const baseColor = baseColors[index];
        // Create a slightly different shade
        const hslColor = `hsl(${195 + (colors.length * 20)}, 80%, ${40 + (colors.length * 5)}%)`;
        colors.push(hslColor);
    }

    return colors;
};

const expenseData = [
    { label: 'Flights', value: 1200 },
    { label: 'Accommodation', value: 1800 },
    { label: 'Food', value: 500 },
    { label: 'Transportation', value: 300 },
    { label: 'Entertainment', value: 700 },
];

// Mapping the data to be used in the donut chart
const data = {
    series: expenseData.map(item => item.value),
    options: {
        labels: expenseData.map(item => item.label),
        colors: generateChartColors(expenseData.length),
        tooltip: {
            enabled: true,
            theme: 'dark',
            fillSeriesColor: false,
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: (val: number) => `£${val}`,
            },
            custom: ({ series, seriesIndex, dataPointIndex, w }: any) => {
                return `<div class="custom-tooltip" style="
                    background: #1e3d6b;
                    padding: 8px;
                    color: white;
                    border-radius: 4px;
                ">
                    <span>${w.config.labels[seriesIndex]}: £${series[seriesIndex]}</span>
                </div>`
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            color: '#FFFFFF'
                        },
                        value: {
                            show: true,
                            color: '#FFFFFF'
                        },
                        total: {
                            show: true,
                            color: '#FFFFFF'
                        }
                    }
                }
            }
        },
        theme: {
            mode: 'light',
            palette: 'palette1',
            monochrome: {
                enabled: false,
            }
        },
        title: {
            align: 'center' as 'left' | 'right' | 'center', // Correctly typed align value
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
            },
        },
        legend: {
            position: 'bottom' as 'bottom', // Ensure the position is correctly typed
        },
        dataLabels: {
            enabled: false,
            formatter: (val: number) => `£${val}`, // Displaying the value in pounds
        },
    },
};

const ExpenseCalc = () => {
  return (
    <Card>
       
        
          <Box 
          
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', m: 1 }}
          >
            <ApexChart type="donut" series={data.series} options={data.options} />
              <Box sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">
                      Total Expense calculated by the AI: £{data.series.reduce((sum, value) => sum + value, 0)}
                  </Typography>
              </Box>
        </Box>
    </Card>
  )
}

export default ExpenseCalc