// import {
//     Box,
//     Typography,
//     Button,
//     Grid,
//     Paper
// } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
// import FlightIcon from '@mui/icons-material/Flight';
// import LuggageIcon from '@mui/icons-material/Luggage';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import SecurityIcon from '@mui/icons-material/Security';
// import travelInsuranceIcon from '../../assets/travel-insurance.avif';

// const benefits = [
//     {
//         icon: <MedicalServicesIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
//         title: "Medical Coverage",
//         description: "Up to €500,000 coverage including COVID-19 related expenses, emergency medical evacuation, and hospital stays."
//     },
//     {
//         icon: <FlightIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
//         title: "Trip Cancellation",
//         description: "Get reimbursed for non-refundable expenses if you need to cancel your trip due to covered reasons."
//     },
//     {
//         icon: <LuggageIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
//         title: "Baggage Protection",
//         description: "Coverage up to €2,000 for lost, stolen, or damaged baggage during your European journey."
//     },
//     {
//         icon: <AccountBalanceWalletIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
//         title: "Emergency Cash",
//         description: "Quick access to emergency funds when you need them most, with worldwide assistance."
//     },
//     {
//         icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
//         title: "24/7 Assistance",
//         description: "Round-the-clock multilingual support for emergencies, travel advice, and claims assistance."
//     },
//     {
//         icon: <SecurityIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
//         title: "Schengen Visa",
//         description: "Fully compliant with Schengen visa requirements, ensuring smooth entry into European countries."
//     }
// ];

// const TravelInsurance = () => {
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 textAlign: 'center',
//                 maxWidth: '1200px',
//                 margin: '0 auto',
//                 padding: '24px'
//             }}
//         >
//             <img
//                 src={travelInsuranceIcon}
//                 alt="Travel Insurance"
//                 style={{
//                     maxWidth: '200px',
//                     height: 'auto',
//                     marginBottom: '32px'
//                 }}
//             />

//             <Typography variant="h4" gutterBottom sx={{ color: '#1976d2' }}>
//                 Travel Insurance for Europe
//             </Typography>

//             <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px' }}>
//                 Secure your European journey with our comprehensive travel insurance. Get complete coverage for medical emergencies, trip cancellations, and more.
//             </Typography>

//             <Grid
//                 container
//                 sx={{
//                     mb: 4,
//                     flexWrap: 'nowrap',
//                     overflowX: 'auto',
//                     overflowY: 'hidden',
//                     pb: 2,
//                     height: '220px',
//                     '::-webkit-scrollbar': {
//                         height: 8,
//                     },
//                     '::-webkit-scrollbar-track': {
//                         background: '#f1f1f1',
//                         borderRadius: 4,
//                     },
//                     '::-webkit-scrollbar-thumb': {
//                         background: '#888',
//                         borderRadius: 4,
//                     },
//                     '::-webkit-scrollbar-thumb:hover': {
//                         background: '#555',
//                     },
//                 }}
//             >
//                 {benefits.map((benefit, index) => (
//                     <Grid
//                         item
//                         sx={{
//                             minWidth: {
//                                 xs: '85%',
//                                 sm: '300px',
//                             },
//                             px: 1.5,
//                             height: '200px',
//                         }}
//                         key={index}
//                     >
//                         <Paper
//                             elevation={2}
//                             sx={{
//                                 p: 1.5,
//                                 height: '100%',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 alignItems: 'center',
//                                 borderRadius: '12px',
//                                 transition: 'transform 0.2s',
//                                 '&:hover': {
//                                     transform: 'translateY(-4px)',
//                                     boxShadow: 4
//                                 }
//                             }}
//                         >
//                             {benefit.icon}
//                             <Typography variant="h6" sx={{ my: 0.5, color: '#1976d2', fontSize: '1rem' }}>
//                                 {benefit.title}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
//                                 {benefit.description}
//                             </Typography>
//                         </Paper>
//                     </Grid>
//                 ))}
//             </Grid>

//             <Button
//                 variant="contained"
//                 size="large"
//                 endIcon={<ArrowForwardIcon />}
//                 sx={{
//                     minWidth: '200px',
//                     borderRadius: '28px',
//                     textTransform: 'none',
//                     fontSize: '1.1rem',
//                     py: 1.5,
//                     px: 4,
//                     boxShadow: 2,
//                     '&:hover': {
//                         boxShadow: 4
//                     }
//                 }}
//             >
//                 Know More
//             </Button>
//         </Box>
//     );
// };

// export default TravelInsurance;
