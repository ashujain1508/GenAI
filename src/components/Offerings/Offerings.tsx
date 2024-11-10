import React from 'react';
import {
    Box,
    Typography,
    Button,
    Grid,
    Paper,
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
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
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
interface Recommendation {
    iconName: string;
    title: string;
    description: string;
    benefits: string[];
    recommendedPlan: string;
    link: string;
}

interface OfferingProps {
    title: string;
    description: string;
    imageUrl?: string;
    recommendations: Recommendation[];
    ctaText: string;
    primaryColor: string;
}

const Offerings: React.FC<OfferingProps> = ({
    title,
    description,
    imageUrl,
    recommendations,
    ctaText,
    primaryColor
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
        <Box sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" paragraph>
                    {description}
                </Typography>

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
                                height: 450, // Fixed height for all cards
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
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <DynamicIcon
                                            iconName={recommendation.iconName}
                                            props={{ sx: { mr: 2, color: primaryColor } }}
                                        />
                                        <Typography variant="h6" component="h3">
                                            {recommendation.title}
                                        </Typography>
                                    </Box>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {recommendation.description}
                                    </Typography>
                                </Box>

                                {/* Benefits List */}
                                <Box sx={{ flex: 1 }}>
                                    <List dense sx={{ py: 0 }}>
                                        {recommendation.benefits.map((benefit, idx) => (
                                            <ListItem key={idx} sx={{ px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <CheckCircle sx={{ color: primaryColor, fontSize: '1rem' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={benefit}
                                                    primaryTypographyProps={{
                                                        variant: 'body2',
                                                        sx: { lineHeight: 1.2 }
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>

                                {/* Button */}
                                <Box sx={{ mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={recommendation.link}
                                        target="_blank"
                                        fullWidth
                                    >
                                        {ctaText}
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