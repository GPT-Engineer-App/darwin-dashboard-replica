import { Box, Text, VStack, Textarea, Button, HStack, IconButton, Input } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { generateEmails } from "../utils/emailGenerator";
import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

const CampaignEmails = () => {
  const { campaignId } = useParams();
  const campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
  const campaign = campaigns[campaignId];
  const [emailSequence, setEmailSequence] = useState(generateEmails(campaign));

  const handleDeleteEmail = (index) => {
    const updatedSequence = emailSequence.filter((_, i) => i !== index);
    setEmailSequence(updatedSequence);
  };

  const handleAddEmail = () => {
    const newEmail = {
      subject: "New Email Subject",
      body: "New email body content.",
    };
    setEmailSequence([...emailSequence, newEmail]);
  };

  const handleSubjectChange = (index, newSubject) => {
    const updatedSequence = emailSequence.map((email, i) => i === index ? { ...email, subject: newSubject } : email);
    setEmailSequence(updatedSequence);
  };

  const handleBodyChange = (index, newBody) => {
    const updatedSequence = emailSequence.map((email, i) => i === index ? { ...email, body: newBody } : email);
    setEmailSequence(updatedSequence);
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Email Sequence for {campaign.campaignName}</Text>
      {emailSequence.map((email, index) => (
        <Box key={index} mt={4} p={4} borderWidth={1} borderRadius="lg">
          <HStack justify="space-between">
            <Text fontWeight="bold">Step {index + 1}</Text>
            <IconButton icon={<FaTrash />} onClick={() => handleDeleteEmail(index)} />
          </HStack>
          <Text>Subject:</Text>
          <Input value={email.subject} onChange={(e) => handleSubjectChange(index, e.target.value)} />
          <Text mt={2}>Body:</Text>
          <Textarea value={email.body} onChange={(e) => handleBodyChange(index, e.target.value)} />
        </Box>
      ))}
      <Button mt={4} leftIcon={<FaPlus />} onClick={handleAddEmail}>Add Email Step</Button>
    </Box>
  );
};

export default CampaignEmails;