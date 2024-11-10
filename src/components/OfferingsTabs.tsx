import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import travelInsuranceIcon from '../assets/travel-insurance.avif';
import forexIcon from '../assets/forex.jpg';
import creditCardIcon from '../assets/card.avif';
import loanIcon from '../assets/loan.jpg';
import TravelInsurance from './Offerings/TravelInsurance';
import { creditCardData, forexData, loanData, travelInsuranceData } from '../data/offeringsData';
import Offerings from './Offerings/Offerings';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const OfferingsTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange}
          centered
        >
          <Tab 
            icon={
              <img 
                src={travelInsuranceIcon} 
                alt="Travel Insurance"
                style={{ 
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  marginBottom: '12px'
                }} 
              />
            }
            iconPosition="top"
            label="Travel Insurance"
            sx={{ minHeight: '120px' }}
          />
          <Tab
            icon={
              <img
                src={forexIcon}
                alt="Currency & Forex Services"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  marginBottom: '12px'
                }}
              />
            }
            iconPosition="top"
            label="Currency & Forex Services"
            sx={{ minHeight: '120px' }}
          />
          <Tab
            icon={
              <img
                src={creditCardIcon}
                alt="Credit Card Travel Benefits"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  marginBottom: '12px'
                }}
              />
            }
            iconPosition="top"
            label="Credit Card Travel Benefits"
            sx={{ minHeight: '120px' }}
          />
          <Tab
            icon={
              <img
                src={loanIcon}
                alt="Loan & Financial Options"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  marginBottom: '12px'
                }}
              />
            }
            iconPosition="top"
            label="Loan & Financial Options"
            sx={{ minHeight: '120px' }}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Offerings {...travelInsuranceData} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          <Offerings {...forexData} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          <Offerings {...creditCardData} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          <Offerings {...loanData} />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default OfferingsTabs;