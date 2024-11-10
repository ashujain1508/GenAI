import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const CurrencyAndForex: React.FC = () => {
    const benefits = [
        'Competitive exchange rates for over 80 currencies',
        'Online currency ordering and management',
        'International payments and transfers',
        'Foreign currency accounts',
        'Risk management solutions',
        'Expert forex advisory services',
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CurrencyExchangeIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                <Typography variant="h4" component="h2">
                    Currency & Forex Services
                </Typography>
            </Box>

            <Typography variant="body1" sx={{ mb: 3 }}>
                Access comprehensive currency exchange and forex solutions designed for both personal and business needs. Our expert team provides competitive rates and personalized service to help manage your international financial requirements.
            </Typography>

            <Typography variant="h6" sx={{ mb: 2 }}>
                Key Features & Benefits
            </Typography>

            <List>
                {benefits.map((benefit, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default CurrencyAndForex;
