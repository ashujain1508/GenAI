import React from 'react';
import { Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Card, CardContent, Typography, Button } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import { useNavigate } from 'react-router-dom';
import travelingInformationBackground from '../../assets/travelinginformationbackground.jpeg';
import userData from '../../data/userData.json';



const Information: React.FC = () => {
  const navigate = useNavigate();
  const firstName = userData.userDetails.firstName
  const description = `Your dream ${userData.travelCountryData.countryName} escape is here – filled with tailored offers and experiences made just for you.`

  const handleExploreClick = () => {
    navigate('/travel');
  };

  return (
    <Card 
      elevation={3}
      sx={{
        width: '100%',
        margin: '20px auto',
        marginTop: '20px',
        borderRadius: 2,
        background: `url(${travelingInformationBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <CardContent 
        sx={{ 
          padding: 3,
          '&:last-child': { paddingBottom: 3 },
          position: 'relative',
          zIndex: 1
        }}
      >
        <Box 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          gap={2} 
          mb={2}
          flexWrap="wrap"
        >
          <FlightIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography 
            variant="h5" 
            component="div" 
            color="primary"
            sx={{ 
              fontWeight: 600,
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Ready for Your Next Adventure?
          </Typography>
        </Box>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 2,
            textAlign: 'center',
            color: '#333',
            textShadow: '1px 1px 1px rgba(255,255,255,0.5)'
          }}
        >
          Hi {firstName}! {description}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={handleExploreClick}
            sx={{
              mt: 2,
              textTransform: 'none',
              borderRadius: 2,
              padding: '8px 24px',
              backgroundColor: '#0B2F5E',
              '&:hover': {
                backgroundColor: '#153d6f'
              }
            }}
          >
            Explore Travel Options
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Information;