import { useState, useEffect } from "react";
import { Box, Text, Input, Button, VStack, HStack, Textarea, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const CreateOffer = () => {
  const [offerName, setOfferName] = useState("Blank Name");
  const [company, setCompany] = useState("");
  const [buyerTitles, setBuyerTitles] = useState([{ title: "", painPoints: [""], goals: [""] }]);
  const [problemSolved, setProblemSolved] = useState("");
  const [currentSolution, setCurrentSolution] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddBuyerTitle = () => {
    setBuyerTitles([...buyerTitles, { title: "", painPoints: [""], goals: [""] }]);
  };

  const handleRemoveBuyerTitle = (index) => {
    const newBuyerTitles = [...buyerTitles];
    newBuyerTitles.splice(index, 1);
    setBuyerTitles(newBuyerTitles);
  };

  const handleBuyerTitleChange = (index, value) => {
    const newBuyerTitles = [...buyerTitles];
    newBuyerTitles[index].title = value;
    setBuyerTitles(newBuyerTitles);
  };

  const handleAddPainPoint = (index) => {
    const newBuyerTitles = [...buyerTitles];
    newBuyerTitles[index].painPoints.push("");
    setBuyerTitles(newBuyerTitles);
  };

  const handleRemovePainPoint = (index, painPointIndex) => {
    const newBuyerTitles = [...buyerTitles];
    newBuyerTitles[index].painPoints.splice(painPointIndex, 1);
    setBuyerTitles(newBuyerTitles);
  };

  const handlePainPointChange = (index, painPointIndex, value) => {
    const newBuyerTitles = [...buyerTitles];
    newBuyerTitles[index].painPoints[painPointIndex] = value;
    setBuyerTitles(newBuyerTitles);
  };

  const handleAddGoal = (index) => {
    const newBuyerTitles = [...buyerTitles];
    newBuyerTitles[index].goals.push("");
    setBuyerTitles(newBuyerTitles);
  };

  const handleRemoveGoal = (index, goalIndex) => {
    const newBuyerTitles = [...buyerTitles];
    newBuyerTitles[index].goals.splice(goalIndex, 1);
    setBuyerTitles(newBuyerTitles);
  };

  const handleGoalChange = (index, goalIndex, value) => {
    const newBuyerTitles = [...buyerTitles];
    newBuyerTitles[index].goals[goalIndex] = value;
    setBuyerTitles(newBuyerTitles);
  };

  useEffect(() => {
    if (location.state && location.state.offer) {
      const { offerName, company, buyerTitles, problemSolved, currentSolution } = location.state.offer;
      setOfferName(offerName);
      setCompany(company);
      setBuyerTitles(buyerTitles);
      setProblemSolved(problemSolved || "");
      setCurrentSolution(currentSolution || "");
    }
  }, [location.state]);

  const handleSave = () => {
    const offer = {
      offerName,
      company,
      buyerTitles,
      problemSolved,
      currentSolution,
    };
    const savedOffers = JSON.parse(localStorage.getItem("offers")) || [];
    const updatedOffers = [...savedOffers, offer];
    localStorage.setItem("offers", JSON.stringify(updatedOffers));
    navigate("/offers");
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Create Offer</Text>
      <VStack spacing={4} mt={4} align="start">
        <Box>
          <Text fontWeight="bold">Offer Name</Text>
          <Input value={offerName} onChange={(e) => setOfferName(e.target.value)} placeholder="Enter offer name" />
        </Box>
        <Box>
          <Text fontWeight="bold">Company</Text>
          <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter company name" />
        </Box>
        <Box>
          <Text fontWeight="bold">What problem does the company solve?</Text>
          <Textarea value={problemSolved} onChange={(e) => setProblemSolved(e.target.value)} placeholder="Describe the problem the company solves" />
        </Box>
        <Box>
          <Text fontWeight="bold">How are people solving the problem today?</Text>
          <Textarea value={currentSolution} onChange={(e) => setCurrentSolution(e.target.value)} placeholder="Describe how people are currently solving the problem" />
        </Box>
        {buyerTitles.map((buyer, index) => (
          <Box key={index} borderWidth={1} borderRadius="lg" p={4} width="100%">
            <HStack justify="space-between">
              <Text fontWeight="bold">Buyer Title {index + 1}</Text>
              <IconButton icon={<FaTrash />} onClick={() => handleRemoveBuyerTitle(index)} />
            </HStack>
            <Input mt={2} value={buyer.title} onChange={(e) => handleBuyerTitleChange(index, e.target.value)} placeholder="Enter buyer title" />
            <Text mt={4} fontWeight="bold">Pain Points</Text>
            {buyer.painPoints.map((painPoint, painPointIndex) => (
              <HStack key={painPointIndex} mt={2}>
                <Textarea value={painPoint} onChange={(e) => handlePainPointChange(index, painPointIndex, e.target.value)} placeholder="Enter pain point" />
                <IconButton icon={<FaTrash />} onClick={() => handleRemovePainPoint(index, painPointIndex)} />
              </HStack>
            ))}
            <Button mt={2} leftIcon={<FaPlus />} onClick={() => handleAddPainPoint(index)}>Add Pain Point</Button>
            <Text mt={4} fontWeight="bold">Goals</Text>
            {buyer.goals.map((goal, goalIndex) => (
              <HStack key={goalIndex} mt={2}>
                <Textarea value={goal} onChange={(e) => handleGoalChange(index, goalIndex, e.target.value)} placeholder="Enter goal" />
                <IconButton icon={<FaTrash />} onClick={() => handleRemoveGoal(index, goalIndex)} />
              </HStack>
            ))}
            <Button mt={2} leftIcon={<FaPlus />} onClick={() => handleAddGoal(index)}>Add Goal</Button>
          </Box>
        ))}
        <Button leftIcon={<FaPlus />} onClick={handleAddBuyerTitle}>Add Buyer Title</Button>
        <HStack spacing={4}>
          <Button colorScheme="blue" onClick={handleSave}>Save Offer</Button>
          <Button onClick={() => navigate("/offers")}>Back</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CreateOffer;