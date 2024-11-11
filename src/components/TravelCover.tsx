import { Box, Typography, Container, Card } from '@mui/material';
import travelImage from '../assets/travel.jpg';
import userData from '../data/userData.json';

const TravelCover = () => {
  return (
   
      <Box
        sx={{
          position: 'relative',
          height: '300px',
          width: '100%',
          backgroundImage: `url(${travelImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 51, 0.75)',
          }
        }}
      >
        <Container
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            color: 'white',
            textAlign: 'left',
            py: 4,
            maxWidth: '800px'
          }}
        >
          <Box
            sx={{
              pl: 2,
              ml: 2
            }}
          >
            <Typography 
            variant="h4"
            sx={{
              fontWeight: 500,
              mb: 1,
              color: '#00aeef',
            }}
          >
            Hi {userData.userDetails.firstName}!
          </Typography>
          <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                fontWeight: 600,
                mb: 2,
                color: '#00aeef',
              }}
            >
            {userData.travelCountryData.description.title}
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 400,
                mb: 2,
                maxWidth: '600px'
              }}
            >
            {userData.travelCountryData.description.subtitle}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '500px',
                opacity: 0.9,
              }}
            >
            {userData.travelCountryData.description.text}
            </Typography>
          </Box>
        </Container>
      </Box>
   
  );
};

export default TravelCover; 