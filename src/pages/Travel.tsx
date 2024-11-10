import React, { useState } from 'react'
import InputPopup from '../components/InputPopup'
import { Autocomplete, Box, Button, Card, CardContent, Grid, Grid2, IconButton, TextField, Typography } from '@mui/material';
import hpMediaTravel from '../assets/hp-media-travel.jpeg'
import usa from '../assets/usa.avif'
import usa2 from '../assets/usa2.jpg'
import ExpenseCalc from '../components/ExpenseCalc';
import CurrentAccount from '../components/CurrentAccount';
import TravelCover from '../components/TravelCover';
import SendIcon from '@mui/icons-material/Send';
import InsuranceRecommendations from '../components/InsuranceRecomendations';
import OfferingsTabs from '../components/OfferingsTabs';
import ThirdPartyOfferings from '../components/ThirdPartyOfferings';



const Travel = () => {
    
    const [selectedCountry, setSelectedCountry] = useState<string|null>(null)
    const [open, setOpen] = useState(selectedCountry === null);

    const handleClose = () => {
        setOpen(false);
    };


  return (
    <div>
        
       {
            <InputPopup setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry} onClose={handleClose} dialogOpen={open}/> 
       } 

        {selectedCountry && 
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                      
                          <TravelCover />

                          <Box display='flex' flexDirection='row' justifyContent='flex-end'>
                              <Autocomplete
                                  options={["USA", "Canada", "Mexico", "UK", "Australia", "India", "China", "Japan", "Brazil", "South Africa"]}
                                  value={selectedCountry}
                                  onChange={(event, newValue) => setSelectedCountry(newValue)}
                                  renderInput={(params) => (
                                      <TextField {...params} label="Change Country" variant="outlined" />
                                  )}
                                  sx={{ width: 300, mt: 2 }}
                              />
                              <TextField
                                  type="number"
                                  label="Enter Budget"
                                  variant="outlined"
                                  sx={{ width: 300, mt: 2, ml: 2 }}
                                  InputProps={{
                                      startAdornment: '£'
                                  }}
                              />
                            <IconButton 
                                sx={{ 
                                    mt: 2,
                                    ml: 2,
                                    transform: 'scale(1.2)',  // makes the button 20% bigger
                                    alignSelf: 'center',       // centers vertically within the flex container
                                    color: 'primary.main'     // uses the theme's primary color
                                }}
                            >
                                <SendIcon />    
                            </IconButton>
                          </Box>
                          
                      
                    
                    
                </Grid>
                <Grid item xs={12} md={4}>
                    <ExpenseCalc />
                </Grid>
                <Grid item xs={12} md={8}>
                    <CurrentAccount />
                </Grid>
                  {/* <Grid item xs={12} md={12}>
                    <InsuranceRecommendations />
                </Grid> */}
                <Grid item xs={12} md={12}>
                    <OfferingsTabs />
                </Grid>
                  <Grid item xs={12} md={12}>
                      <ThirdPartyOfferings />
                  </Grid>
                
            </Grid>

        }

    </div>
  )
}

export default Travel