import { Box, Typography, Container, Card } from '@mui/material';
import travelImage from '../assets/travel.jpg';

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
              variant="h3" 
              component="h1" 
              sx={{ 
                fontWeight: 600,
                mb: 2,
                color: '#00aeef',
              }}
            >
              Explore Europe with Barclays
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 400,
                mb: 2,
                maxWidth: '600px'
              }}
            >
              Discover the rich history, diverse cultures, and stunning landscapes of Europe.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '500px',
                opacity: 0.9,
              }}
            >
              From the romantic streets of Paris to the ancient ruins of Rome, 
              we'll help you navigate Europe with confidence. Enjoy secure payments with your Barclays card, 
              competitive exchange rates for the Euro, and comprehensive travel insurance across the EU.
            </Typography>
          </Box>
        </Container>
      </Box>
   
  );
};

export default TravelCover; 