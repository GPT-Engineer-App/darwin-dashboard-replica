import { Box, Text, VStack, Textarea, Button, HStack, IconButton, Input, Select } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { generateEmails } from "../utils/emailGenerator";
import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

const CampaignEmails = () => {
  const { campaignId } = useParams();
  const campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
  const campaign = campaigns[campaignId];
  const [steps, setSteps] = useState(generateEmails(campaign));

  const handleDeleteStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  const handleAddStep = (type) => {
    const newStep = {
      type,
      subject: type === "email" ? "New Email Subject" : "",
      body: type === "email" ? "New email body content." : "",
      message: type === "linkedin" ? "New LinkedIn message content." : "",
      days: 0,
    };
    setSteps([...steps, newStep]);
  };

  const handleChange = (index, field, value) => {
    const updatedSteps = steps.map((step, i) => i === index ? { ...step, [field]: value } : step);
    setSteps(updatedSteps);
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Sequence for {campaign.campaignName}</Text>
      {steps.map((step, index) => (
        <Box key={index} mt={4} p={4} borderWidth={1} borderRadius="lg">
          <HStack justify="space-between">
            <Text fontWeight="bold">Step {index + 1}</Text>
            <IconButton icon={<FaTrash />} onClick={() => handleDeleteStep(index)} />
          </HStack>
          <Select value={step.type} onChange={(e) => handleChange(index, "type", e.target.value)}>
            <option value="email">Email</option>
            <option value="linkedin">LinkedIn</option>
            <option value="sms">SMS</option>
            <option value="phone">Phone Call</option>
          </Select>
          {step.type === "email" && (
            <>
              <Text>Subject:</Text>
              <Input value={step.subject} onChange={(e) => handleChange(index, "subject", e.target.value)} />
              <Text mt={2}>Body:</Text>
              <Textarea value={step.body} onChange={(e) => handleChange(index, "body", e.target.value)} />
            </>
          )}
          {step.type === "linkedin" && (
            <>
              <Text mt={2}>Message:</Text>
              <Textarea value={step.message} onChange={(e) => handleChange(index, "message", e.target.value)} />
            </>
          )}
          <Text mt={2}>Send after:</Text>
          <Input type="number" value={step.days} onChange={(e) => handleChange(index, "days", e.target.value)} />
        </Box>
      ))}
      <Button mt={4} leftIcon={<FaPlus />} onClick={() => handleAddStep("email")}>Add Email Step</Button>
      <Button mt={4} leftIcon={<FaPlus />} onClick={() => handleAddStep("linkedin")}>Add LinkedIn Step</Button>
      <Button mt={4} leftIcon={<FaPlus />} onClick={() => handleAddStep("sms")}>Add SMS Step</Button>
      <Button mt={4} leftIcon={<FaPlus />} onClick={() => handleAddStep("phone")}>Add Phone Call Step</Button>
    </Box>
  );
};

export default CampaignEmails;