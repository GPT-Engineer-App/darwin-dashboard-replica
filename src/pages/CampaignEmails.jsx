import { Box, Text, VStack, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { generateEmails } from "../utils/emailGenerator";

const CampaignEmails = () => {
  const { campaignId } = useParams();
  const campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
  const campaign = campaigns[campaignId];
  const emailSequence = generateEmails(campaign);

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Email Sequence for {campaign.campaignName}</Text>
      {emailSequence.map((email, index) => (
        <Box key={index} mt={4} p={4} borderWidth={1} borderRadius="lg">
          <Text fontWeight="bold">Step {index + 1}</Text>
          <Text>Subject: {email.subject}</Text>
          <Textarea value={email.body} readOnly />
        </Box>
      ))}
    </Box>
  );
};

export default CampaignEmails;