import React from 'react';
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import browsingHistory from '../data/browsingHistory.json';
import shortfall from '../data/shortfall.json';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: '#0B2F5E',
    color: 'white',
    fontSize: 14,
    fontWeight: 500,
    padding: '12px 16px'
  },
  '&.MuiTableCell-body': {
    fontSize: 14,
    padding: '16px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(11, 47, 94, 0.03)',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface ExpenseAnalysisProps {
  open: boolean;
  onClose: () => void;
  currentExpense: number;
}

const formatFundSource = (source: string) => {
  return source
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const ExpenseAnalysis: React.FC<ExpenseAnalysisProps> = ({ open, onClose, currentExpense }) => {
  const accounts = browsingHistory.customer_financial_plan.customer_details.accounts;
  const travelInvestment = browsingHistory.customer_financial_plan.customer_details.travel_investment;
  const recommendedPlan = browsingHistory.customer_financial_plan.recommended_financial_plan;
  
  const totalAvailableFunds = accounts.reduce((sum, account) => sum + account.availableBalance, 0) 
    + travelInvestment.currentValue;

  const isShortfall = currentExpense > totalAvailableFunds;
  
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-end',
        padding: '16px 24px 0 24px',
        position: 'relative'
      }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#0B2F5E'
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ pt: 3 }}>
        {isShortfall ? (
          <>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#0B2F5E', 
                mb: 3, 
                fontWeight: 600,
                textAlign: 'center',
                px: 3
              }}
            >
              It seems you have a shortfall. We recommend these financial products:
            </Typography>
            
            <TableContainer component={Paper} sx={{ mb: 4, borderRadius: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Step</StyledTableCell>
                    <StyledTableCell>Suggestion</StyledTableCell>
                    <StyledTableCell>Details</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(shortfall.financial_shortfall.suggested_solution).map(([step, solution], index) => (
                    <StyledTableRow key={step}>
                      <StyledTableCell sx={{ width: '10%', fontWeight: 500 }}>
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell sx={{ width: '45%' }}>
                        {solution.suggestion}
                      </StyledTableCell>
                      <StyledTableCell sx={{ width: '45%', color: 'text.secondary' }}>
                        {solution.details}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#0B2F5E', 
                mb: 3, 
                fontWeight: 600,
                textAlign: 'center',
                px: 3
              }}
            >
              Congratulations! You can avail below financial funds for your upcoming trips
            </Typography>
            
            <TableContainer component={Paper} sx={{ mb: 4, borderRadius: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Expense Type</StyledTableCell>
                    <StyledTableCell>Amount</StyledTableCell>
                    <StyledTableCell>Fund Source</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(recommendedPlan).map(([expense, details]) => {
                    if (expense !== 'summary' && expense !== 'total_funded' && expense !== 'total_available') {
                      return (
                        <StyledTableRow key={expense}>
                          <StyledTableCell sx={{ fontWeight: 500 }}>
                            {formatFundSource(expense.replace('_expense', ''))}
                          </StyledTableCell>
                          <StyledTableCell>
                            £{(details as any).amount.toLocaleString()}
                          </StyledTableCell>
                          <StyledTableCell sx={{ color: 'text.secondary' }}>
                            {Array.isArray((details as any).fund_source) 
                              ? (details as any).fund_source.map((source: string) => formatFundSource(source)).join(', ')
                              : formatFundSource((details as any).fund_source)}
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    }
                    return null;
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExpenseAnalysis;