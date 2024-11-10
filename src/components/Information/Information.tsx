import React from 'react';
import { Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import customerData from '../../data/customerData.json';
import hyperpersonalisationInfo from '../../data/hyperpersonalisationInfo.json';

import { Card, CardContent, Typography, Button } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';

interface CustomerData {
  customer: {
    personalInfo: {
      firstName: string;
    };
  };
}

interface HyperpersonalisationInfo {
  personalizedInfo: {
    description: string;
  };
}

const Information: React.FC = () => {
  const { firstName } = (customerData as CustomerData).customer.personalInfo;
  const { description } = (hyperpersonalisationInfo as HyperpersonalisationInfo).personalizedInfo;

  return (
    
      <Card 
        elevation={3}
        sx={{
          width: '100%',
          margin: '20px auto',
          marginTop: '90px',
          borderRadius: 2,
          background: 'linear-gradient(to right bottom, #ffffff, #f5f5f5)'
        }}
      >
        <CardContent 
          sx={{ 
            padding: 3,
            '&:last-child': { paddingBottom: 3 }
          }}
        >
          <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            gap={2} 
            mb={2}
            flexWrap="wrap"
          >
            <FlightIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h5" component="div" color="primary">
              Ready for Your Next Adventure?
            </Typography>
          </Box>
          
          <Typography variant="body1" sx={{ mb: 2 }}>
            Hi {firstName}! {description}.
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => console.log('Navigate to travel page')}
            sx={{
              mt: 2,
              textTransform: 'none',
              borderRadius: 2,
              padding: '8px 24px'
            }}
          >
            Explore Travel Options
          </Button>
        </CardContent>
      </Card>
   
  );
};

export default Information; 