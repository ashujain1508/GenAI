import React from 'react';
import { 
  Box, 
  Typography, 
  Card,
  CardContent,
  Divider,
  Button 
} from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FlightIcon from '@mui/icons-material/Flight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './AccountDetails.css';

const AccountDetails = () => {
  const accounts = [
    {
      id: 1,
      accountType: "THE BARCLAYS BANK ACCOUNT",
      accountNumber: "****4789",
      availableBalance: 2547.82
    },
    {
      id: 2,
      accountType: "BARCLAYS BASIC CURRENT ACCOUNT",
      accountNumber: "****6234",
      availableBalance: 15780.45
    },
    {
      id: 3,
      accountType: "BARCLAYS BASIC SAVINGS ACCOUNT",
      accountNumber: "****9012",
      availableBalance: 3765.44
    }
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Card elevation={3} sx={{ width: '100%', mt: 3 }}>
        <CardContent sx={{ padding: 3 }}>
          {accounts.map((account, index) => (
            <React.Fragment key={account.id}>
              <Box className="account-header" sx={{ padding: '16px 0' }}>
                <Typography variant="h6" className="account-type">
                  {account.accountType}
                </Typography>
                <Box className="right-section">
                  <Typography variant="h6" className="balance-amount">
                    £{account.availableBalance.toLocaleString('en-GB', { minimumFractionDigits: 2 })}
                  </Typography>
                  <Box className="action-buttons">
                    <Box className="action-button">
                      <PaymentsIcon />
                      <Typography variant="caption">Pay</Typography>
                    </Box>
                    <Box className="action-button">
                      <SwapHorizIcon />
                      <Typography variant="caption">Transfer</Typography>
                    </Box>
                    <Box className="action-button">
                      <MoreHorizIcon />
                      <Typography variant="caption">More</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {index < accounts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AccountDetails; 