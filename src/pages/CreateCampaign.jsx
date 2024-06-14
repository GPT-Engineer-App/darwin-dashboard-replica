import { Box, Text, Input, Button, VStack, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {
  const [campaignName, setCampaignName] = useState("");
  const [selectedOffer, setSelectedOffer] = useState("");
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOffers = JSON.parse(localStorage.getItem("offers")) || [];
    setOffers(savedOffers);
  }, []);

  const handleSave = () => {
    const selectedOfferData = offers.find(offer => offer.offerName === selectedOffer);
    const campaign = {
      campaignName,
      selectedOffer: selectedOfferData,
    };
    const savedCampaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
    const updatedCampaigns = [...savedCampaigns, campaign];
    localStorage.setItem("campaigns", JSON.stringify(updatedCampaigns));
    navigate("/dashboard");
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Create Campaign</Text>
      <VStack spacing={4} mt={4} align="start">
        <Box>
          <Text fontWeight="bold">Campaign Name</Text>
          <Input value={campaignName} onChange={(e) => setCampaignName(e.target.value)} placeholder="Enter campaign name" />
        </Box>
        <Box>
          <Text fontWeight="bold">Select Offer</Text>
          <Select placeholder="Select offer" value={selectedOffer} onChange={(e) => setSelectedOffer(e.target.value)}>
            {offers.map((offer, index) => (
              <option key={index} value={offer.offerName}>{offer.offerName}</option>
            ))}
          </Select>
        </Box>
        <Button colorScheme="blue" onClick={handleSave}>Save Campaign</Button>
      </VStack>
    </Box>
  );
};

export default CreateCampaign;