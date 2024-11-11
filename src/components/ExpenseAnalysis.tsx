import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  styled
} from '@mui/material';

import shortfall from '../data/shortfall.json';
// import financialProducts from '../data/financialProducts.json';
import userData from '../data/userData.json';

interface ExpenseAnalysisProps {
  show: boolean;
  currentExpense: number;
}

interface FundingSource {
  account_name: string;
  amount_used: string;
}

interface Recommendation {
  expense_type: string;
  amount: string;
  funding_source?: string;
  funding_sources?: FundingSource[];
  message: string;
}

interface TravelInvestment {
  investment_type: string;
  investment_amount: string;
  remaining_expenses: string;
  suggested_use: string;
}

interface CreditCard {
  credit_card_name: string;
  available_credit: string;
  remaining_expenses: string;
  message: string;
}

interface FutureFinancing {
  option_name: string;
  message: string;
}

interface AdditionalOptions {
  travel_investment: TravelInvestment;
  credit_card: CreditCard;
  future_financing: FutureFinancing;
}

interface FinancialRecommendations {
  recommendations: Recommendation[];
  additional_options: AdditionalOptions;
  summary: {
    total_expenses: string;
    total_available_funds: string;
    message: string;
  };
}

const formatFundSource = (source: string) => {
  return source
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const ExpenseAnalysis: React.FC<ExpenseAnalysisProps> = ({ show, currentExpense }) => {
  if (!show) return null;

  const accounts = userData.userDetails.accounts;
  const travelInvestment = userData.userDetails.travel_investment;
  const financialProducts = userData.financial_recommendations;
  // const recommendedPlan = userData.userDetails.recommended_financial_plan;
  
  const totalAvailableFunds = accounts.reduce((sum, account) => sum + account.availableBalance, 0) 
    + travelInvestment.currentValue;

  const isShortfall = currentExpense > totalAvailableFunds;
  
  const renderOptionContent = (key: string, option: TravelInvestment | CreditCard | FutureFinancing) => {
    if (key === 'travel_investment') {
      const travelOption = option as TravelInvestment;
      return (
        <>
          <Typography variant="h6" color="#0B2F5E" gutterBottom sx={{ fontWeight: 600 }}>
            {travelOption.investment_type}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Available Amount: {travelOption.investment_amount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {travelOption.suggested_use}
          </Typography>
        </>
      );
    }

    if (key === 'credit_card') {
      const creditOption = option as CreditCard;
      return (
        <>
          <Typography variant="h6" color="#0B2F5E" gutterBottom sx={{ fontWeight: 600 }}>
            {creditOption.credit_card_name}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Available Credit: {creditOption.available_credit}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {creditOption.message}
          </Typography>
        </>
      );
    }

    if (key === 'future_financing') {
      const financeOption = option as FutureFinancing;
      return (
        <>
          <Typography variant="h6" color="#0B2F5E" gutterBottom sx={{ fontWeight: 600 }}>
            {financeOption.option_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {financeOption.message}
          </Typography>
        </>
      );
    }

    return null;
  };

  return (
    <Box sx={{ 
      mt: 4, 
      mb: 4,
      width: '100%',

    }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: '16px',
          border: '1px solid #00AEEF',
          p: 3,

        }}
      >
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

            <Grid container spacing={2} sx={{ mb: 4 }}>
              {Object.entries(shortfall.financial_shortfall.suggested_solution).map(([step, solution], index) => (
                <Grid item xs={12} md={4} key={step}>
                  <Card 
                    variant="outlined"
                    sx={{ 
                      borderRadius: '16px',
                      height: '100%',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      border: '1px solid #0B2F5E',
                      '&:hover': {
                        transform: 'scale(1.01)',
                        boxShadow: '0 8px 16px rgba(11, 47, 94, 0.2)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{
                        backgroundColor: '#0B2F5E',
                        color: 'white',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        mb: 2
                      }}>
                        {index + 1}
                      </Box>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#0B2F5E',
                          fontWeight: 500,
                          mb: 1
                        }}
                      >
                        {solution.suggestion}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary'
                        }}
                      >
                        {solution.details}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              backgroundColor: 'rgba(11, 47, 94, 0.03)',
              padding: 3,
              borderRadius: 2
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#0B2F5E',
                  fontWeight: 600,
                  textAlign: 'center',
                  mb: 2
                }}
              >
                Personalized Recommended Products
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  textAlign: 'center'
                }}
              >
                {shortfall.financial_shortfall.summary.message}
              </Typography>
            </Box>
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

            <Grid container spacing={2} sx={{ mb: 4 }}>
                {financialProducts.recommendations.map((recommendation, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <Card 
                    variant="outlined"
                    sx={{ 
                      borderRadius: '16px',
                      height: '100%',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      border: '1px solid #0B2F5E',
                      '&:hover': {
                        transform: 'scale(1.01)',
                        boxShadow: '0 8px 16px rgba(11, 47, 94, 0.2)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Typography 
                        variant="subtitle1"
                        sx={{ 
                          color: '#0B2F5E',
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        {recommendation.expense_type}
                      </Typography>
                      <Typography 
                        variant="h6"
                        sx={{ 
                          color: '#0B2F5E',
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        {recommendation.amount}
                      </Typography>
                      <Typography 
                        variant="body2"
                        sx={{ 
                          color: '#0B2F5E',
                          mb: 1
                        }}
                      >
                        {recommendation.funding_sources ? (
                          <>
                            Funded by:
                            {recommendation.funding_sources.map((source, idx) => (
                              <Box key={idx} sx={{ ml: 1, mt: 0.5 }}>
                                <Typography variant="body2" color="text.secondary">
                                  {source.account_name}: {source.amount_used}
                                </Typography>
                              </Box>
                            ))}
                          </>
                        ) : (
                          <>Funded by: {recommendation.funding_source}</>
                        )}
                      </Typography>
                      <Typography 
                        variant="body2"
                        sx={{ 
                          color: 'text.secondary',
                          mt: 1
                        }}
                      >
                        {recommendation.message}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              backgroundColor: 'rgba(11, 47, 94, 0.03)',
              padding: 2,
              borderRadius: 2
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#0B2F5E',
                  fontWeight: 600,
                  textAlign: 'center',
                  mb: 3
                }}
              >
                Additional Options Available
              </Typography>
              <Box sx={{ 
                display: 'flex',
                gap: 2,
                mb: 3
              }}>
                  {Object.entries(financialProducts.additional_options).map(([key, option]) => (
                  <Card 
                    key={key}
                    variant="outlined" 
                    sx={{ 
                      flex: 1,
                      minWidth: 0,
                      borderRadius: '16px',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      border: '1px solid #0B2F5E',
                      '&:hover': {
                        transform: 'scale(1.01)',
                        boxShadow: '0 8px 16px rgba(11, 47, 94, 0.2)'
                      }
                    }}
                  >
                    <CardContent>
                        {renderOptionContent(key, option)}
                    </CardContent>
                  </Card>
                ))}
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  textAlign: 'center'
                }}
              >
                  {financialProducts.summary.message}
              </Typography>
            </Box>
          </>
        )}
      </Card>
    </Box>
  );
};

export default ExpenseAnalysis;