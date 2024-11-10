import React, { useState, useEffect } from 'react'
import InputPopup from '../components/InputPopup'
import { Autocomplete, Box, Card, Grid, IconButton, TextField } from '@mui/material';
import TravelCover from '../components/TravelCover';
import SendIcon from '@mui/icons-material/Send';
import OfferingsTabs from '../components/OfferingsTabs';
import ThirdPartyOfferings from '../components/ThirdPartyOfferings';


import ExpenseCalc from '../components/ExpenseCalc';
import CurrentAccount from '../components/CurrentAccount';
import browsingHistory from '../data/browsingHistory.json';

const Travel = () => {
    const [selectedCountry, setSelectedCountry] = useState<string|null>(null);
    const [open, setOpen] = useState(selectedCountry === null);
    const [totalBudget, setTotalBudget] = useState<number>(0);

    // Calculate initial total from browsing history
    useEffect(() => {
        const nextExpenses = browsingHistory.browsing_history.browsing_summary.next_expense;
        const total = Object.values(nextExpenses).reduce((sum, value) => sum + value, 0);
        setTotalBudget(total);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSliderChange = (newTotal: number) => {
        setTotalBudget(newTotal);
    };

    return (
        <div>
            {<InputPopup 
                setSelectedCountry={setSelectedCountry} 
                selectedCountry={selectedCountry} 
                onClose={handleClose} 
                dialogOpen={open}
            />} 

            {selectedCountry && 
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <TravelCover />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ExpenseCalc />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <CurrentAccount onSliderChange={handleSliderChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <Card sx={{ p: 2, mt: 2 }}>
                            <Box 
                                display='flex' 
                                flexDirection='row' 
                                justifyContent='center'
                                alignItems='center'
                                gap={2}
                            >
                                <Autocomplete
                                    options={["USA", "Canada", "Mexico", "UK", "Australia", "India", "China", "Japan", "Brazil", "South Africa"]}
                                    value={selectedCountry}
                                    onChange={(event, newValue) => setSelectedCountry(newValue)}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Change Country" variant="outlined" />
                                    )}
                                    sx={{ width: 300 }}
                                />
                                <TextField
                                    type="text"
                                    label="Total Budget"
                                    variant="outlined"
                                    value={`£${totalBudget.toLocaleString()}`}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ 
                                        width: 300,
                                        '& .MuiInputBase-input.Mui-readOnly': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.03)'
                                        }
                                    }}
                                />
                                <IconButton 
                                    sx={{ 
                                        transform: 'scale(1.2)',
                                        color: '#0B2F5E',
                                        backgroundColor: 'rgba(11, 47, 94, 0.05)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(11, 47, 94, 0.1)'
                                        }
                                    }}
                                >
                                    <SendIcon />
                                </IconButton>
                            </Box>
                        </Card>
                    </Grid>
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