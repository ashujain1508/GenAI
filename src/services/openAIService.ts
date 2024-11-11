import axios from 'axios';

const AZURE_OPENAI_ENDPOINT = 'https://code101.openai.azure.com';
const DEPLOYMENT_NAME = 'gpt-4';

interface UserDataResponse {
    userDetails: {
        firstName: string;
        lastName: string;
        accounts: Array<{
            id: number;
            accountType: string;
            accountNumber: string;
            availableBalance: number;
        }>;
        travel_investment: {
            investmentAmount: number;
            investmentType: string;
            currentValue: number;
            investmentGrowth: string;
        };
        credit: {
            creditCardType: string;
            creditLimit: number;
            availableCredit: number;
            interestRate: string;
        };
    };
    TravelInsuranceRecommendations: {
        personalized_message: string;
        recommendations: Array<{
            product_name: string;
            description: string;
            personalized_message: string;
            features: Array<{
                feature_name: string;
                description: string;
            }>;
        }>;
    };
    ForexAndExchangeRecommendations: {
        personalized_message: string;
        recommendations: Array<{
            product_name: string;
            description: string;
            personalized_message: string;
            features: Array<{
                feature_name: string;
                description: string;
            }>;
        }>;
    };
    financial_recommendations: {
        recommendations: Array<{
            expense_type: string;
            amount: string;
            funding_source?: string;
            funding_sources?: Array<{
                account_name: string;
                amount_used: string;
            }>;
            message: string;
        }>;
        additional_options: {
            travel_investment: {
                investment_type: string;
                investment_amount: string;
                remaining_expenses: string;
                suggested_use: string;
            };
            credit_card: {
                credit_card_name: string;
                available_credit: string;
                remaining_expenses: string;
                message: string;
            };
            future_financing: {
                option_name: string;
                message: string;
            };
        };
        summary: {
            total_expenses: string;
            total_available_funds: string;
            message: string;
        };
    };
}

export const getPersonalizedTravelData = async (
    userContext: {
        userId: string;
        selectedCountry: string;
        tripType: string;
        budget: number;
    }
): Promise<UserDataResponse> => {
    try {
        const prompt = `
            As a financial travel assistant, generate personalized travel recommendations for:
            
            User Profile:
            - User ID: ${userContext.userId}
            - Destination: ${userContext.selectedCountry}
            - Trip Type: ${userContext.tripType}
            - Budget: £${userContext.budget}
            
            Please provide detailed recommendations including:
            1. Travel Insurance options with personalized features
            2. Forex and Currency Exchange services specific to the destination
            3. Financial planning recommendations including:
               - Expense breakdown
               - Funding sources
               - Additional financial options
            
            Format the response exactly like this structure:
            {
                "userDetails": { ... },
                "TravelInsuranceRecommendations": {
                    "personalized_message": "...",
                    "recommendations": [
                        {
                            "product_name": "...",
                            "description": "...",
                            "personalized_message": "...",
                            "features": [...]
                        }
                    ]
                },
                "ForexAndExchangeRecommendations": {
                    "personalized_message": "...",
                    "recommendations": [...]
                },
                "financial_recommendations": {
                    "recommendations": [...],
                    "additional_options": {...},
                    "summary": {...}
                }
            }
            
            Ensure all recommendations are personalized and relevant to the destination and trip type.
        `;

        console.log(prompt, typeof prompt);

        const response = await axios.post(
            `${AZURE_OPENAI_ENDPOINT}/openai/deployments/${DEPLOYMENT_NAME}/chat/completions?api-version=2024-02-15-preview`,
            {
                messages: [

                    {
                        role: "user",
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 3000,
                top_p: 0.95,
                frequency_penalty: 0,
                presence_penalty: 0
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': process.env.REACT_APP_AZURE_OPENAI_KEY,
                }
            }
        );

        // Extract and parse the response
        const completion = response.data.choices[0].message.content;
        const parsedData: UserDataResponse = JSON.parse(completion);

        // Validate the response structure
        if (!parsedData.TravelInsuranceRecommendations ||
            !parsedData.ForexAndExchangeRecommendations ||
            !parsedData.financial_recommendations) {
            throw new Error('Invalid response structure from AI');
        }

        return parsedData;

    } catch (error) {
        console.error('Error fetching data from Azure OpenAI:', error);
        if (axios.isAxiosError(error)) {
            console.error('API Error details:', error.response?.data);
        }
        throw new Error('Failed to get personalized travel recommendations');
    }
};

// Usage example in a component: 