import * as React from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import travelImage from '../../assets/travel.jpg';
import homeLoanImage from '../../assets/HomeLoan.jpg';
import creditCardImage from '../../assets/creditcard.jpg';

export default function MultiProductCard() {
  const products = [
    {
      id: 1,
      title: "Travel Solutions",
      description: "Plan your dream vacation with our exclusive travel packages and personalized itineraries.",
      image: travelImage,
      link: "#"
    },
    {
      id: 2,
      title: "Home Loan",
      description: "Make your dream home a reality with our competitive home loan options and flexible repayment plans.",
      image: homeLoanImage,
      link: "https://www.barclays.co.uk/mortgages/"
    },
    {
      id: 3,
      title: "Credit Card",
      description: "Enjoy exclusive benefits, rewards, and secure transactions with our premium credit cards.",
      image: creditCardImage,
      link: "https://www.barclays.co.uk/credit-cards/"
    }
  ];

  return (
    <Box 
      sx={{ 
        width: '100%', 
        marginTop: '40px',
        display: 'flex',
        gap: 3,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {products.map((product) => (
        <Card 
          key={product.id} 
          sx={{ 
            maxWidth: 345,
            flex: '1 1 300px',
            borderRadius: '16px',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'flex',
            flexDirection: 'column',
            '&:hover': {
              transform: 'scale(1.02)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
            }
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.title}
              sx={{ borderRadius: '16px 16px 0 0' }}
            />
            <CardContent sx={{ flexGrow: 1, minHeight: '150px' }}>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ padding: '16px', justifyContent: 'flex-start' }}>
            <Button 
              size="small" 
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                backgroundColor: '#0B2F5E',
                color: 'white',
                padding: '8px 16px',
                '&:hover': {
                  backgroundColor: '#153d6f'
                }
              }}
            >
              See What's Next
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
