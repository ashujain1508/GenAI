import { Autocomplete, Button, ButtonGroup, Chip, Stack } from '@mui/material'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import hpMediaTravel from '../assets/hp-media-travel.jpeg'
import browsingHistory from '../data/browsingHistory.json'

interface InputPopupProps {
    setSelectedCountry: (country: string) => void;
    selectedCountry: string | null;
    onClose: () => void;
    dialogOpen: boolean;
}

const InputPopup: React.FC<InputPopupProps> = ({
    setSelectedCountry,
    selectedCountry,
    onClose,
    dialogOpen
}) => {
    const mostVisitedLocations = browsingHistory.customer_financial_plan.browsing_history.browsing_summary.most_visited_locations;
    const otherCountries = ["India", "China", "Japan", "Brazil", "South Africa"]
    
    const [otherSelected, setOtherSelected] = useState(false)
    
    const handleOther = () => {
        setOtherSelected(!otherSelected)
    }

    return (
        <div>
            <Dialog open={dialogOpen} slotProps={{
                backdrop: {
                    sx: {
                        backgroundImage: `url(${hpMediaTravel})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    },
                },
            }}>
                <DialogTitle>Hi John, choose your favorite travel destination</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Select a country:
                    </Typography>

                    <div style={{ marginTop: '10px' }}>
                        <Stack direction="row" spacing={1}>
                            {mostVisitedLocations.map((country: string) => (
                                <Chip 
                                    label={country} 
                                    color="primary" 
                                    key={country} 
                                    onClick={() => setSelectedCountry(country)} 
                                    variant={selectedCountry === country ? "filled" : "outlined"}
                                />
                            ))}
                            <Chip 
                                label="Other" 
                                color="primary" 
                                onClick={handleOther} 
                                variant={otherSelected ? "filled" : "outlined"} 
                            />
                        </Stack>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        {otherSelected && (
                            <Autocomplete
                                options={otherCountries}
                                value={selectedCountry}
                                onChange={(_, newValue) => {
                                    if (newValue) {
                                        setSelectedCountry(newValue);
                                    }
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} label="Select a Country" variant="outlined" />
                                )}
                                sx={{ width: 300 }}
                            />
                        )}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary" disabled={selectedCountry === null}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputPopup