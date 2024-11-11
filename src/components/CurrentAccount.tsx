import { Box, Card, CardHeader, Divider, Stack, Typography, Slider } from "@mui/material";
import React, { useState } from "react";
import userData from '../data/userData.json';

interface CurrentAccountProps {
  onSliderChange: (total: number) => void;
}

const CurrentAccount: React.FC<CurrentAccountProps> = ({ onSliderChange }) => {
  const nextExpenses = userData.yourExpectedBudget.nextExpenses;
  const totalBudget = Object.values(nextExpenses).reduce((sum: number, value: number) => sum + value, 0);
  
  const [sliderValues, setSliderValues] = useState<Record<string, number>>(nextExpenses);

  const handleSliderChange = (category: string, newValue: number) => {
    const newSliderValues = {
      ...sliderValues,
      [category]: newValue
    };
    setSliderValues(newSliderValues);
    
    const newTotal = Object.values(newSliderValues).reduce((sum: number, value: number) => sum + value, 0);
    onSliderChange(newTotal);
  };

  return (
    <Card sx={{ boxShadow: 1, height: '100%', display: 'flex', flexDirection: 'column' }} >
      <CardHeader 
        title={
          <Typography variant="subtitle1" sx={{ 
            color: '#0B2F5E',
            fontWeight: 600,
          }}>
            Your Expected Budget
          </Typography>
        }
        sx={{ 
          // backgroundColor: 'rgba(11, 47, 94, 0.03)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          p: 2
        }} 
      />

      <Box sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
        <Stack spacing={1}>
          {Object.entries(nextExpenses).map(([category], index) => (
            <Box key={category}>
              <Stack 
                direction="row" 
                sx={{ 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  mb: 0.5
                }}
              >
                <Typography 
                  variant="caption" 
                  sx={{ 
                    textTransform: 'capitalize',
                    color: '#0B2F5E',
                    fontWeight: 500
                  }}
                >
                  {category}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#0B2F5E'
                  }}
                >
                  £{sliderValues[category].toLocaleString()}
                </Typography>
              </Stack>

              <Slider
                value={sliderValues[category]}
                onChange={(_, newValue) => handleSliderChange(category, newValue as number)}
                min={0}
                max={totalBudget}
                size="small"
                sx={{
                  color: '#0B2F5E',
                  height: 4,
                  padding: '6px 0',
                  '& .MuiSlider-thumb': {
                    width: 12,
                    height: 12,
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: '0 0 0 6px rgba(11, 47, 94, 0.16)'
                    }
                  },
                  '& .MuiSlider-track': {
                    height: 4,
                    borderRadius: 2
                  },
                  '& .MuiSlider-rail': {
                    height: 4,
                    borderRadius: 2,
                    backgroundColor: 'rgba(11, 47, 94, 0.1)'
                  }
                }}
              />

              {index < Object.entries(nextExpenses).length - 1 && (
                <Divider sx={{ my: 0.5 }} />
              )}
            </Box>
          ))}
        </Stack>
      </Box>
    </Card>
  );
};

export default CurrentAccount;