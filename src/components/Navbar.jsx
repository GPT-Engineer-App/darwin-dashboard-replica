import { Box, Flex, Text, Avatar, IconButton } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="white" px={4} py={2} boxShadow="sm">
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Avatar size="md" name="Darwin" src="https://bit.ly/broken-link" />
          <Text ml={3} fontWeight="bold">Darwin</Text>
        </Flex>
        <Flex alignItems="center">
          <IconButton aria-label="Messages" icon={<FaEnvelope />} size="lg" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;