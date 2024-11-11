import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import ApexChart from 'react-apexcharts'
import userData from '../data/userData.json';

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

    return baseColors.slice(0, count);
};

// Get expense data from browsing history
const nextExpenses = userData.aiPredictedExpenses.nextExpenses;
const expenseData = Object.entries(nextExpenses).map(([label, value]) => ({
    label,
    value: value as number
}));

// Mapping the data to be used in the donut chart
const data = {
    series: expenseData.map(item => item.value),
    options: {
        labels: expenseData.map(item => item.label),
        colors: generateChartColors(expenseData.length),
        tooltip: {
            enabled: true,
            theme: 'light',
            fillSeriesColor: false,
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: (val: number) => `£${val.toLocaleString()}`
            },
            custom: ({ series, seriesIndex, w }: any) => {
                return `<div class="custom-tooltip" style="
                    background: #1e3d6b;
                    padding: 8px;
                    color: white;
                    border-radius: 4px;
                ">
                    <span>${w.config.labels[seriesIndex]}: £${series[seriesIndex].toLocaleString()}</span>
                </div>`
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '12px',
                            color: '#333'
                        },
                        value: {
                            show: true,
                            fontSize: '12px',
                            color: '#333',
                            formatter: (val: number) => `£${val.toLocaleString()}`
                        }
                    }
                }
            }
        },
        chart: {
            type: 'donut' as const,
        },
        legend: {
            position: 'bottom' as const,
            fontSize: '12px',
            formatter: function(label: string, opts: any) {
                return `${label}: £${opts.w.globals.series[opts.seriesIndex].toLocaleString()}`
            }
        },
        dataLabels: {
            enabled: false
        },
    }
};

const ExpenseCalc = () => {
  const totalExpense = data.series.reduce((sum: number, value: number) => sum + value, 0);

  return (
    <Card>
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                p: 2
            }}
        >
            <Typography variant="subtitle1" color="primary" gutterBottom>
                Estimated Travel Expenses
            </Typography>
            
            <ApexChart 
                type="donut" 
                series={data.series} 
                options={data.options}
                height={280}
                width="100%"
            />
            
            <Box sx={{ textAlign: 'center', mt: 1 }}>
                <Typography 
                    variant="subtitle2" 
                    sx={{ 
                        display: 'block',
                        mb: 0.5,
                        fontWeight: 700,
                        color: '#0B2F5E',
                        letterSpacing: '0.5px'
                    }}
                >
                    AI PREDICTED EXPENSE
                </Typography>
                <Typography variant="subtitle1" color="primary">
                    Total: £{totalExpense.toLocaleString()}
                </Typography>
            </Box>
        </Box>
    </Card>
  )
}

export default ExpenseCalc