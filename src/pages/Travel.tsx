import React, { useState, useEffect } from 'react'
import InputPopup from '../components/InputPopup'
import { Autocomplete, Box, Button, Card, Grid, IconButton, TextField, Typography } from '@mui/material';
import TravelCover from '../components/TravelCover';
import SendIcon from '@mui/icons-material/Send';
import OfferingsTabs from '../components/OfferingsTabs';
import ThirdPartyOfferings from '../components/ThirdPartyOfferings';


import ExpenseCalc from '../components/ExpenseCalc';
import CurrentAccount from '../components/CurrentAccount';
import browsingHistory from '../data/browsingHistory.json';
import ExpenseAnalysis from '../components/ExpenseAnalysis';
import { Update } from '@mui/icons-material';

const Travel = () => {
    const [selectedCountry, setSelectedCountry] = useState<string|null>(null);
    const [open, setOpen] = useState(selectedCountry === null);
    const [totalBudget, setTotalBudget] = useState<number>(0);
    const [analysisOpen, setAnalysisOpen] = useState(false);

    const mostVisitedLocations = browsingHistory.customer_financial_plan.browsing_history.browsing_summary.most_visited_locations;

    useEffect(() => {
        const nextExpenses = browsingHistory.customer_financial_plan.browsing_history.browsing_summary.next_expense;
        const total = Object.values(nextExpenses).reduce((sum, value) => sum + (value as number), 0);
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

                        <Card sx={{ p: 2, mt: 2 }} variant='outlined'>

                            <Typography variant="h6" sx={{
                                color: 'primary.main',
                                fontWeight: 600,
                                mb: 2
                            }}>
                                Update Your Preferences
                            </Typography>

                            <Box 
                                display='flex' 
                                flexDirection='row' 
                                justifyContent='center'
                                alignItems='center'
                                gap={2}
                            >

                                <Autocomplete
                                    options={mostVisitedLocations}
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

                                <Button
                                    size='large'
                                    variant="outlined"
                                    startIcon={<Update />}
                                >
                                    Update
                                </Button>
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

            <ExpenseAnalysis 
                open={analysisOpen}
                onClose={() => setAnalysisOpen(false)}
                currentExpense={totalBudget}
            />
        </div>
    )
}

export default Travel