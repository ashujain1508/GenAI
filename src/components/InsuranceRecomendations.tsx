// import { useEffect, useState } from 'react';
// import insuranceData from '../data/insuranceRecomendations.json';
// import styled from 'styled-components';




// const AIMessage = styled.div`
//   background: linear-gradient(135deg, #00395D, #00AEEF);
//   color: white;
//   padding: 1.5rem;
//   border-radius: 1rem;
//   margin-bottom: 0rem;
//   font-size: 1.1rem;
//   line-height: 1.6;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const CardScroller = styled.div`
//   display: flex;
//   overflow-x: auto;
//   gap: 1.5rem;
//   padding: 1rem 0.5rem;
//   -webkit-overflow-scrolling: touch;
  
//   &::-webkit-scrollbar {
//     height: 8px;
//   }
  
//   &::-webkit-scrollbar-track {
//     background: #f1f1f1;
//     border-radius: 4px;
//   }
  
//   &::-webkit-scrollbar-thumb {
//     background: #888;
//     border-radius: 4px;
//   }
// `;

// const Card = styled.div`
//   min-width: 300px;
//   background: white;
//   border-radius: 1rem;
//   padding: 1.5rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s;
  
//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const InsuranceTitle = styled.h3`
//   font-size: 1.5rem;
//   color: #1f2937;
//   margin-bottom: 1rem;
// `;

// const Coverage = styled.p`
//   font-size: 1.1rem;
//   color: #4b5563;
//   margin-bottom: 0.5rem;
// `;

// const Benefits = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   margin: 1rem 0;
// `;

// const Benefit = styled.li`
//   color: #4b5563;
//   margin-bottom: 0.5rem;
//   &:before {
//     content: "✓";
//     color: #059669;
//     margin-right: 0.5rem;
//   }
// `;

// const Link = styled.a`
//   display: inline-block;
//   color: #00aeef;
 
//   text-decoration: none;
//   margin-top: 1rem;
  
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const InsuranceRecommendations = () => {
//   const [aiMessage, setAiMessage] = useState('');

//   useEffect(() => {
//     // Simulate AI personalized message
//     const messages = [
//       "Based on your extensive travel profile and adventurous lifestyle, I've carefully curated these premium insurance plans that provide comprehensive coverage tailored specifically to your unique needs and travel patterns. These plans offer exceptional protection for all your journeys.",
//       "Given your family history, current circumstances, and the destinations you frequently visit, these specialized insurance options offer the most robust and complete protection available for you and your loved ones. They're designed to give you peace of mind wherever you go.",
//       "Considering your successful career, valuable assets, and international travel requirements, I strongly recommend these carefully selected insurance plans to ensure you have maximum protection against all potential risks. These plans are trusted by experienced travelers worldwide.",
//       "After analyzing your travel preferences and risk profile, I've identified these top-tier insurance plans that perfectly align with your needs. They provide industry-leading coverage and outstanding benefits for discerning travelers like yourself."
//     ];
//     setAiMessage(messages[Math.floor(Math.random() * messages.length)]);
//   }, []);

//   return (
//    <>
//       <AIMessage>
//         {aiMessage}
//       </AIMessage>
      
//       <CardScroller>
//         {insuranceData.insurance_recommendations.map((insurance, index) => (
//           <Card key={index}>
//             <InsuranceTitle>{insurance.insurance_type}</InsuranceTitle>
//             <Coverage>{insurance.description}</Coverage>
//             <Benefits>
//               {insurance.benefits.map((benefit, idx) => (
//                 <Benefit key={idx}>{benefit}</Benefit>
//               ))}
//             </Benefits>
//             <Link href={insurance.link} target="_blank" rel="noopener noreferrer">
//               Learn More
//             </Link>
//           </Card>
//         ))}
//       </CardScroller>
//     </>
//   );
// };

// export default InsuranceRecommendations;
