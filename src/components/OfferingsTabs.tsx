import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import travelInsuranceIcon from '../assets/travel-insurance.avif';
import forex from '../assets/forex.jpeg';
import cc from '../assets/cc.jpeg';
import loanIcon from '../assets/loan.jpg';
import { creditCardData, forexData, loanData } from '../data/offeringsData';
import Offerings from './Offerings/Offerings';
import userData from '../data/userData.json';

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
          {children}
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

  // Transform the recommendations data to match Offerings component format
  const travelInsuranceOfferings = {
    title: "Travel Insurance Recommendations",
    description: userData.TravelInsuranceRecommendations.personalized_message,
    items: userData.TravelInsuranceRecommendations.recommendations.map(rec => ({
      title: rec.product_name,
      description: rec.description,
      features: rec.features.map(feature => ({
        name: feature.feature_name,
        description: feature.description
      }))
    }))
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
                src={forex}
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
                src={cc}
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
          <Offerings {...userData.TravelInsuranceRecommendations} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Offerings {...userData.ForexAndExchangeRecommendations} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Offerings {...userData.CreditCardAndTravelBenefitsRecommendations} />
        </Box>
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Offerings {...loanData} />
        </Box>
      </TabPanel> */}
    </Box>
  );
};

export default OfferingsTabs;