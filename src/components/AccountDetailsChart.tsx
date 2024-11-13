import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Chart from 'react-apexcharts';
import userData from '../data/userData.json';

const AccountAndInvestmentDetails = () => {
    // Calculate total balance for percentage calculation
    const totalBalance = userData.userDetails.accounts.reduce(
        (sum, account) => sum + account.availableBalance,
        0
    );

    // Prepare data for the donut chart
    const chartData = {
        series: userData.userDetails.accounts.map(
            account => account.availableBalance
        ),
        options: {
            chart: {
                type: 'donut',
            },
            labels: userData.userDetails.accounts.map(account => account.accountType),
            colors: userData.userDetails.accounts.map((_, index) => {
                const baseBlue = '#0B2F5E';
                const opacity = 1 - (index * 0.2); // Decreases opacity for each item
                return `${baseBlue}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
            }),
            legend: {
                position: 'bottom',
                fontSize: '10px',
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: 'Total Balance',
                                formatter: () => `£${totalBalance.toLocaleString()}`
                            }
                        }
                    }
                }
            },
            dataLabels: {
                enabled: true,
                formatter: (val: number) => `${val.toFixed(1)}%`
            },
            tooltip: {
                y: {
                    formatter: (val: number) => `£${val.toLocaleString()}`
                },
                custom: function ({ series, seriesIndex, w }: {
                    series: number[],
                    seriesIndex: number,
                    w: any
                }) {
                    const balance = series[seriesIndex];
                    return `<div class="custom-tooltip">
                        <span>£${balance.toLocaleString()}</span>
                    </div>`;
                }
            }
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            gap: 3,
            flexWrap: { xs: 'wrap', md: 'nowrap' }
        }}>
            {/* Account Balance Card */}
            <Card sx={{
                flex: 1,
                minWidth: { xs: '100%', md: '33%' },
                borderRadius: '16px',
                border: '1px solid #00AEEF'
            }}>
                <CardContent>
                    <Typography variant="h6" sx={{ mb: 2, color: '#0B2F5E', fontWeight: 600 }}>
                        Account Balances
                    </Typography>
                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="donut"
                        height={250}
                    />
                </CardContent>
            </Card>
        </Box>
    );
};

export default AccountAndInvestmentDetails;
