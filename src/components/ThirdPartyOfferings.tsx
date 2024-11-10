import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';
import thirdPartyData from '../data/thirdPartyOfferings.json';

const ScrollContainer = styled(Box)({
    display: 'flex',
    gap: '24px',
    padding: '16px 0',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
        height: '8px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '4px',
    },
});

const StyledCard = styled(Card)({
    width: '320px',
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    },
});

const StyledCardContent = styled(CardContent)({
    flex: 1,
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        width: '4px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '4px',
    },
});

// Assume you have user data available
const user = {
    name: "John Doe"
};

// Function to personalize description
const personalizeDescription = (description: string, userName: string) => {
    return description.replace("{{userName}}", userName);
};

const ThirdPartyOfferings: React.FC = () => {
    return (
        <Container maxWidth="xl" sx={{ py: 2 }}>
            <Typography
                variant="h3"
                component="h1"
                align="center"
                gutterBottom
                sx={{
                    color: '#000',
                    mb: 2,
                    fontWeight: 'bold'
                }}
            >
                Exclusive Travel & Lifestyle Offers
            </Typography>
            <ScrollContainer>
                {thirdPartyData?.customer_recommendations?.third_party_product_recommendations?.map((item: any, index: number) => (
                    <StyledCard key={index} elevation={3}>
                        <StyledCardContent>
                            <Typography
                                variant="h5"
                                component="h2"
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'primary.main'
                                }}
                            >
                                {item.product_type}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {personalizeDescription(item.description, user.name)}
                            </Typography>

                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 1,
                                    color: 'text.primary'
                                }}
                            >
                                Key Benefits:
                            </Typography>

                            <List dense sx={{ pt: 0 }}>
                                {item.benefits.map((benefit: string, idx: number) => (
                                    <ListItem key={idx} disableGutters>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <CircleIcon sx={{ color: 'primary.main', fontSize: 8 }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={benefit}
                                            primaryTypographyProps={{
                                                variant: 'body2',
                                                color: 'text.secondary'
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>

                            <Typography
                                variant="subtitle2"
                                sx={{
                                    mt: 2,
                                    color: 'primary.main',
                                    fontWeight: 'medium'
                                }}
                            >
                                Recommended: {item.recommended_product}
                            </Typography>
                        </StyledCardContent>

                        <CardActions sx={{ p: 2, pt: 0 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textTransform: 'none',
                                    borderRadius: 2,
                                    py: 1.5
                                }}
                            >
                                Learn More
                            </Button>
                        </CardActions>
                    </StyledCard>
                ))}
            </ScrollContainer>
        </Container>
    );
};

export default ThirdPartyOfferings;
