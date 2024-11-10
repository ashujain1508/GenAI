import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import travelInsuranceIcon from '../assets/travel-insurance.avif';

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
          sx={{
            backgroundColor: '#00395D',
            '& .MuiTabs-flexContainer': {
              justifyContent: 'center',
              height: '160px',
            },
            '& .MuiTab-root': {
              color: '#FFFFFF',
              fontSize: '18px',
              textTransform: 'none',
              height: '160px',
              padding: '20px',
              '&.Mui-selected': {
                color: '#00B7FF',
                fontWeight: 'bold',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#00B7FF',
              height: 4,
            }
          }}
          aria-label="financial services tabs"
        >
          <Tab 
            icon={
              <img 
                src={travelInsuranceIcon} 
                alt="Travel Insurance"
                style={{ 
                  height: '72px',
                  marginBottom: '16px'
                }} 
              />
            }
            iconPosition="top"
            label="Travel Insurance"
          />
          <Tab label="Currency & Forex Services" />
          <Tab label="Credit Card Travel Benefits" />
          <Tab label="Loan & Financial Options" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        Content for Travel Insurance
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Currency & Forex Services
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content for Credit Card Travel Benefits
      </TabPanel>
      <TabPanel value={value} index={3}>
        Content for Loan & Financial Options
      </TabPanel>
    </Box>
  );
};

export default OfferingsTabs;