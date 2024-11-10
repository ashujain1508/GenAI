import { Grid } from '@mui/material';
import React from 'react';
import Information from '../components/Information/Information';
import AccountDetails from '../components/AccountDetails';
import MultiProductCard from '../components/Product/MultiProductCard';

const LandingPage: React.FC = () => {
    return(
        <Grid container>
            <Grid item xs={12} md={12}>
                <Information/>
            </Grid>
            <Grid item xs={12} md={12}>
                <AccountDetails/>
            </Grid>
            <Grid item xs={12} md={12}>
                <MultiProductCard/>
            </Grid>
        </Grid>
    )
};

export default LandingPage;