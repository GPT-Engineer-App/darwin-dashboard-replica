import { Box, VStack, Link, Text } from "@chakra-ui/react";
import { FaChartLine, FaBullhorn, FaGift } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box bg="gray.800" color="white" minH="100vh" p={4} width="250px">
      <VStack align="start" spacing={4}>
        <NavLink to="/dashboard" style={{ width: "100%" }}>
          <Box display="flex" alignItems="center">
            <FaChartLine />
            <Text ml={2}>Worker Output</Text>
          </Box>
        </NavLink>
        <NavLink to="/create-campaign" style={{ width: "100%" }}>
          <Box display="flex" alignItems="center">
            <FaBullhorn />
            <Text ml={2}>Create Campaign</Text>
          </Box>
        </NavLink>
        <NavLink to="/create-offer" style={{ width: "100%" }}>
          <Box display="flex" alignItems="center">
            <FaGift />
            <Text ml={2}>Create Offer</Text>
          </Box>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;