import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCampaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
    setCampaigns(savedCampaigns);
  }, []);

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Campaigns</Text>
      <VStack spacing={4} mt={4} align="start">
        {campaigns.map((campaign, index) => (
          <Box key={index} borderWidth={1} borderRadius="lg" p={4} width="100%">
            <Text fontWeight="bold">{campaign.campaignName}</Text>
            <Button mt={2} colorScheme="blue" onClick={() => navigate(`/campaign/${index}`)}>View Emails</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Campaigns;