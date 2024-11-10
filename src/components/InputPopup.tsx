import { Autocomplete, Button, ButtonGroup, Chip, Stack } from '@mui/material'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import hpMediaTravel from '../assets/hp-media-travel.jpeg'
import browsingHistory from '../data/browsingHistory.json'

const InputPopup = ({setSelectedCountry, selectedCountry, onClose, dialogOpen}: {setSelectedCountry: (country: string) => void, selectedCountry: string|null, onClose: () => void, dialogOpen: boolean}) => {
    
    const mostVisitedLocations = browsingHistory.browsing_history.browsing_summary.most_visited_locations;
    const otherCountries = ["India", "China", "Japan", "Brazil", "South Africa"]
    
    const [otherSelected, setOtherSelected] = useState(false)
    
    const handleOther = () => {
        console.log("Other clicked")
        setOtherSelected(!otherSelected)
    }

  return (
    <div >
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
      <DialogContentText>
        Select a country:
      </DialogContentText>

      <div style={{ marginTop: '10px' }}>
          <Stack direction="row" spacing={1}>
              {mostVisitedLocations.map((country) => (
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

      <div style={{ marginTop: '30px' }} >
          {otherSelected && (
              <Autocomplete
                  options={otherCountries}
                  value={selectedCountry || null}
                  onChange={(event, newValue) => setSelectedCountry(newValue || '')}
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