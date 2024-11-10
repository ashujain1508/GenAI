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
import { useNavigate } from 'react-router-dom';

export default function MultiProductCard() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Travel",
      description: "Discover Exclusive Travel Reward.Enjoy personalized offers, lounge access, and rewards with every trip. Your travel card is designed to make every journey smoother and more rewarding.",
      image: travelImage,
      link: "/travel"
    },
    {
      id: 2,
      title: "Mortgage",
      description: "Get loan offers customized to your needs, with flexible terms and faster approvals.",
      image: homeLoanImage,
      link: "https://www.barclays.co.uk/mortgages/"
    },
    {
      id: 3,
      title: "Credit Card",
      description: "Bank Cards That Match Your Lifestyle.Enjoy tailored rewards, exclusive benefits, and personalized spending limits designed just for you.",
      image: creditCardImage,
      link: "https://www.barclays.co.uk/credit-cards/"
    }
  ];

  const handleCardClick = (productId: number, link: string) => {
    if (productId === 1) {
      navigate(link);
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

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
          <CardActionArea onClick={() => handleCardClick(product.id, product.link)}>
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
              onClick={() => handleCardClick(product.id, product.link)}
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
