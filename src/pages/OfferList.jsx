import { Box, Text, Button, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const OfferList = () => {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOffers = JSON.parse(localStorage.getItem("offers")) || [];
    setOffers(savedOffers);
  }, []);

  const handleEdit = (offer) => {
    navigate("/create-offer", { state: { offer } });
  };
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Offers</Text>
      <VStack spacing={4} mt={4} align="start">
        <Button as={Link} to="/create-offer" colorScheme="blue">Create Offer</Button>
        {offers.map((offer, index) => (
          <Box key={index} borderWidth={1} borderRadius="lg" p={4} width="100%">
            <Text fontWeight="bold">{offer.offerName}</Text>
            <Text>{offer.company}</Text>
            <Button mt={2} colorScheme="blue" onClick={() => handleEdit(offer)}>Edit</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default OfferList;