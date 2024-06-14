import { Box, Text, Input, Button, VStack, Select, Textarea } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateEmails } from "../utils/emailGenerator"; // Import the email generator utility

const CreateCampaign = () => {
  const [campaignName, setCampaignName] = useState("");
  const [selectedOffer, setSelectedOffer] = useState("");
  const [offers, setOffers] = useState([]);
  const [emailSequence, setEmailSequence] = useState([]);
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

    // Generate email sequence
    const generatedEmails = generateEmails(campaign);
    setEmailSequence(generatedEmails);

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
      {emailSequence.length > 0 && (
        <Box mt={8}>
          <Text fontSize="xl" fontWeight="bold">Generated Email Sequence</Text>
          {emailSequence.map((email, index) => (
            <Box key={index} mt={4} p={4} borderWidth={1} borderRadius="lg">
              <Text fontWeight="bold">Step {index + 1}</Text>
              <Text>Subject: {email.subject}</Text>
              <Textarea value={email.body} readOnly />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CreateCampaign;