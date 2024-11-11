import React from 'react';
import {
    Box,
    Typography,
    Button,

    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Card,
    CardContent,
    IconButton
} from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as MuiIcons from '@mui/icons-material';
import { SvgIconProps } from '@mui/material';
import { NavigateBefore, NavigateNext, TipsAndUpdates, AutoAwesome } from '@mui/icons-material';
import { useRef } from 'react';

// Type for the dynamic icon component
type DynamicIconProps = {
    iconName: string;
    props?: SvgIconProps;
};

// Dynamic icon component
const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, props }) => {
    const IconComponent = (MuiIcons as any)[iconName];
    return IconComponent ? <IconComponent {...props} /> : null;
};

// Types for our data structure
interface Feature {
    feature_name: string;
    description: string;
}

interface Recommendation {
    product_name: string;
    description: string;
    features: Feature[];
    iconName?: string;
    link?: string;
}

interface OfferingProps {
    personalized_message: string;
    recommendations: Recommendation[];
    primaryColor?: string;
}

const Offerings: React.FC<OfferingProps> = ({
    personalized_message,
    recommendations,
    primaryColor = '#1976d2'
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Adjust scroll amount as needed
            const newScrollPosition = scrollContainerRef.current.scrollLeft +
                (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box sx={{ py: 2 }}>
            <Container maxWidth="lg">



                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 3,
                        p: 3,
                        backgroundColor: 'rgba(0, 174, 239, 0.05)',
                        borderRadius: 2,
                        border: '1px solid rgba(0, 174, 239, 0.2)'
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            backgroundColor: '#00aeef',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <TipsAndUpdates sx={{ color: 'white', fontSize: '1.5rem' }} />
                        <AutoAwesome
                            sx={{
                                position: 'absolute',
                                top: -8,
                                right: -8,
                                color: '#FFD700',
                                fontSize: '1.2rem'
                            }}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                animation: 'fadeIn 0.5s ease-in',
                                '@keyframes fadeIn': {
                                    '0%': { opacity: 0 },
                                    '100%': { opacity: 1 }
                                },
                                fontWeight: 500,
                                lineHeight: 1.4
                            }}
                        >
                            {personalized_message}
                        </Typography>
                    </Box>
                </Box>


                {/* Scroll Controls */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <IconButton onClick={() => scroll('left')} sx={{ mr: 1 }}>
                        <NavigateBefore />
                    </IconButton>
                    <IconButton onClick={() => scroll('right')}>
                        <NavigateNext />
                    </IconButton>
                </Box>

                {/* Scrollable Cards Container */}
                <Box
                    ref={scrollContainerRef}
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: 2,
                        pb: 2,
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        },
                        '-ms-overflow-style': 'none',
                        scrollBehavior: 'smooth'
                    }}
                >
                    {recommendations.map((recommendation, index) => (
                        <Card
                            key={index}
                            sx={{
                                minWidth: 300,
                                maxWidth: 300,
                                flex: '0 0 auto',
                                height: 'auto', // Changed to auto
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <CardContent sx={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                p: 3
                            }}>
                                {/* Header */}
                                <Box>
                                    <Typography variant="h6" component="h3">
                                        {recommendation.product_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {recommendation.description}
                                    </Typography>
                                </Box>

                                {/* Benefits List */}
                                <Box sx={{ flex: 1 }}>
                                    <List dense sx={{ py: 0 }}>
                                        {recommendation.features.map((feature, idx) => (
                                            <ListItem key={idx} sx={{ px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <CheckCircle sx={{ color: primaryColor, fontSize: '1rem' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={feature.feature_name}
                                                    secondary={feature.description}
                                                    primaryTypographyProps={{
                                                        variant: 'body2',
                                                        sx: { lineHeight: 1.2 }
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>

                                {/* Recommended Plan Button */}
                                <Box sx={{ mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        endIcon={<ArrowForwardIcon />}
                                    >
                                        Learn More
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Offerings; 