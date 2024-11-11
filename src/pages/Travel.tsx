import { useState, useEffect } from 'react'
import InputPopup from '../components/InputPopup'
import { Autocomplete, Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import TravelCover from '../components/TravelCover';
import SendIcon from '@mui/icons-material/Send';
import OfferingsTabs from '../components/OfferingsTabs';
import ThirdPartyOfferings from '../components/ThirdPartyOfferings';


import ExpenseCalc from '../components/ExpenseCalc';
import CurrentAccount from '../components/CurrentAccount';
import ExpenseAnalysis from '../components/ExpenseAnalysis';
import userData from '../data/userData.json';
import { getPersonalizedTravelData } from '../services/openAIService';

// Add this type definition before the Travel component
interface UserDataResponse {
    recommendations: string[];
    expenses: Record<string, number>;
    // Add any other required properties from getPersonalizedTravelData
}

const Travel = () => {
    const tripTypes = userData.userDetails.browsing_summary.trip_types;
    const countries = userData.userDetails.browsing_summary.most_visited_locations;

    const [selectedCountry, setSelectedCountry] = useState<string|null>(null);
    const [selectedTripType, setSelectedTripType] = useState<string|null>(tripTypes[0]);
    const [open, setOpen] = useState(selectedCountry === null);
    const [totalBudget, setTotalBudget] = useState<number>(0);
    const [showAnalysis, setShowAnalysis] = useState(true);
    const [analysisExpense, setAnalysisExpense] = useState<number>(0);
    const [travelData, setTravelData] = useState<UserDataResponse | null>(null);

    useEffect(() => {
        setSelectedCountry(userData.travelCountryData.countryName);
        const nextExpenses = userData.aiPredictedExpenses.nextExpenses;
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

    const fetchPersonalizedData = async () => {
        try {
            const userContext = {
                userId: "user123", // Replace with actual user ID
                selectedCountry: selectedCountry || "",
                tripType: selectedTripType || "",
                budget: totalBudget
            };

            const personalizedData = await getPersonalizedTravelData(userContext);

            // Update your state with the received data
            // You might want to create new state variables to store this data
            // setTravelData(personalizedData);
            console.log(personalizedData);

        } catch (error) {
            console.error('Error fetching personalized data:', error);
            // Handle error appropriately
        }
    };

    const handleShowAnalysis = async () => {
        setAnalysisExpense(totalBudget);
        await fetchPersonalizedData();
    };

    return (
        <div>
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

                        <Card variant='outlined' sx={{
                            borderRadius: '16px',
                            border: '1px solid #00AEEF',
                            p: 3,
                            mt: 2,

                        }}>

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
                                <Button
                                    variant="outlined"
                                    onClick={handleShowAnalysis}
                                    sx={{
                                        color: '#0B2F5E',
                                        borderColor: '#0B2F5E',
                                        '&:hover': {
                                            borderColor: '#0B2F5E',
                                            backgroundColor: 'rgba(11, 47, 94, 0.1)'
                                        }
                                    }}
                                    endIcon={<SendIcon />}
                                >
                                    Analyze
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={12}>
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