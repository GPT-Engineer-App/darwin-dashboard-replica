import { Box, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OfferList = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Offers</Text>
      <VStack spacing={4} mt={4} align="start">
        <Button as={Link} to="/create-offer" colorScheme="blue">Create Offer</Button>
        {/* Here you can add the logic to list existing offers */}
      </VStack>
    </Box>
  );
};

export default OfferList;