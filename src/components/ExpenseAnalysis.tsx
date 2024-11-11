import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  styled
} from '@mui/material';
import browsingHistory from '../data/browsingHistory.json';
import shortfall from '../data/shortfall.json';
import financialProducts from '../data/financialProducts.json';

interface ExpenseAnalysisProps {
  show: boolean;
  currentExpense: number;
}

const formatFundSource = (source: string) => {
  return source
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const ExpenseAnalysis: React.FC<ExpenseAnalysisProps> = ({ show, currentExpense }) => {
  if (!show) return null;

  const accounts = browsingHistory.customer_financial_plan.customer_details.accounts;
  const travelInvestment = browsingHistory.customer_financial_plan.customer_details.travel_investment;
  const recommendedPlan = browsingHistory.customer_financial_plan.recommended_financial_plan;
  
  const totalAvailableFunds = accounts.reduce((sum, account) => sum + account.availableBalance, 0) 
    + travelInvestment.currentValue;

  const isShortfall = currentExpense > totalAvailableFunds;
  
  return (
    <Box sx={{ 
      mt: 4, 
      mb: 4,
      width: '100%',
      px: 2
    }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: '16px',
          border: '2px solid #0B2F5E',
          p: 3,
          '&:hover': {
            border: '2px solid #0B2F5E',
            boxShadow: '0 0 0 1px #0B2F5E'
          }
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
              {financialProducts.financial_recommendations.recommendations.map((recommendation, index) => (
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
                {Object.entries(financialProducts.financial_recommendations.additional_options).map(([key, option]) => (
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
                      <Typography 
                        variant="h6" 
                        color="#0B2F5E" 
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {key === 'travel_investment' && option.investment_type}
                        {key === 'credit_card' && option.credit_card_name}
                        {key === 'future_financing' && option.option_name}
                      </Typography>
                      {key === 'travel_investment' && (
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          Available Amount: {option.investment_amount}
                        </Typography>
                      )}
                      {key === 'credit_card' && (
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          Available Credit: {option.available_credit}
                        </Typography>
                      )}
                      <Typography variant="body2" color="text.secondary">
                        {key === 'travel_investment' && option.suggested_use}
                        {key === 'credit_card' && option.message}
                        {key === 'future_financing' && option.message}
                      </Typography>
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
                {financialProducts.financial_recommendations.summary.message}
              </Typography>
            </Box>
          </>
        )}
      </Card>
    </Box>
  );
};

export default ExpenseAnalysis;