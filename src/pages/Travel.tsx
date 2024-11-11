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
import ExpenseAnalysis from '../components/ExpenseAnalysis';

const Travel = () => {
    const tripTypes = browsingHistory.customer_financial_plan.browsing_history.browsing_summary.trip_types;
    const countries = browsingHistory.customer_financial_plan.browsing_history.browsing_summary.most_visited_locations;

    const [selectedCountry, setSelectedCountry] = useState<string|null>(null);
    const [selectedTripType, setSelectedTripType] = useState<string|null>(tripTypes[0]);
    const [open, setOpen] = useState(selectedCountry === null);
    const [totalBudget, setTotalBudget] = useState<number>(0);
    const [showAnalysis, setShowAnalysis] = useState(true);
    const [analysisExpense, setAnalysisExpense] = useState<number>(0);

    useEffect(() => {
        const nextExpenses = browsingHistory.customer_financial_plan.browsing_history.browsing_summary.next_expense;
        const total = Object.values(nextExpenses).reduce((sum, value) => sum + (value as number), 0);
        setTotalBudget(total);
        setAnalysisExpense(total);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSliderChange = (newTotal: number) => {
        setTotalBudget(newTotal);
    };

    const handleShowAnalysis = () => {
        setAnalysisExpense(totalBudget);
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
                                    freeSolo
                                    options={tripTypes}
                                    value={selectedTripType}
                                    onChange={(_, newValue) => setSelectedTripType(newValue)}
                                    renderInput={(params) => (
                                        <TextField 
                                            {...params} 
                                            label="Trip Type" 
                                            variant="outlined"
                                            placeholder="Enter trip type"
                                        />
                                    )}
                                    sx={{ width: 300 }}
                                />
                                <Autocomplete
                                    freeSolo
                                    options={countries}
                                    value={selectedCountry}
                                    onChange={(_, newValue) => setSelectedCountry(newValue)}
                                    renderInput={(params) => (
                                        <TextField 
                                            {...params} 
                                            label="Change Country" 
                                            variant="outlined"
                                            placeholder="Enter country"
                                        />
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
                                    onClick={handleShowAnalysis}
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
                    <Grid item xs={12}>
                        <ExpenseAnalysis 
                            show={showAnalysis}
                            currentExpense={analysisExpense}
                        />
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