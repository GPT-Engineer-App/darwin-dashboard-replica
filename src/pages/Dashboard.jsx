import { Box, Flex, Text, VStack, HStack, Table, Thead, Tbody, Tr, Th, Td, Avatar, IconButton } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Output Messages',
        data: [12, 19, 3, 5, 2, 3, 7],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <Box p={4}>
      <Flex direction="column" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">Home / All campaigns</Text>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} mb={4}>
        <Box flex={1} p={4} borderWidth={1} borderRadius="lg" mr={{ md: 4 }} mb={{ base: 4, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">Worker output</Text>
          <Line data={data} options={options} />
        </Box>
        <Box flex={1} p={4} borderWidth={1} borderRadius="lg" bg="purple.500" color="white">
          <Text fontSize="lg" fontWeight="bold">Leads contacted the past week</Text>
        </Box>
        <Box flex={1} p={4} borderWidth={1} borderRadius="lg" ml={{ md: 4 }}>
          <Text fontSize="lg" fontWeight="bold">Stats in the past week</Text>
          <VStack align="start" spacing={2} mt={2}>
            <Text>📤 0 sends</Text>
            <Text>📧 9 opens</Text>
            <Text>✨ 0 clicks</Text>
            <Text>📬 0 replies</Text>
          </VStack>
        </Box>
      </Flex>
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>Hot Leads</Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Company</Th>
              <Th>Score</Th>
              <Th>Status</Th>
              <Th>Processed</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {[
              { name: "Rob Wilson", company: "FDM Group", score: 70, status: "hot", processed: true },
              { name: "Jo Romain", company: "DXC Technology", score: 49, status: "hot", processed: true },
              { name: "Sharon Torpey", company: "Bupa", score: 47, status: "hot", processed: true },
              { name: "Dale Ryles", company: "GXO Logistics, Inc.", score: 35, status: "hot", processed: false },
              { name: "David Barker", company: "EC English Language Centres", score: 29, status: "warm", processed: false },
              { name: "Steven Mainwaring", company: "EBC Group", score: 24, status: "warm", processed: false },
              { name: "Rei-Anne Guiquing", company: "Jobandtalent", score: 20, status: "warm", processed: false },
              { name: "Jitha Mohandas", company: "Hays", score: 15, status: "luke-warm", processed: false },
              { name: "Parry Weare", company: "Fiserv", score: 15, status: "luke-warm", processed: false },
            ].map((lead, index) => (
              <Tr key={index}>
                <Td>
                  <HStack>
                    <Avatar size="sm" name={lead.name} />
                    <Text>{lead.name}</Text>
                  </HStack>
                </Td>
                <Td>{lead.company}</Td>
                <Td>{lead.score}</Td>
                <Td>{lead.status}</Td>
                <Td>
                  <input type="checkbox" checked={lead.processed} readOnly />
                </Td>
                <Td>
                  <Text as="button" color="blue.500">View summary</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={2}>Alice Live Feed</Text>
        <VStack align="start" spacing={4}>
          {[
            { name: "Abdel", title: "IVP", status: "Opened", time: "3 days 7 hours 33 minutes ago" },
            { name: "Christina Smears", title: "Vice President - MongoDB", status: "Replied", time: "22 days 18 hours 32 minutes ago" },
            { name: "Christina Smears", title: "Vice President - MongoDB", status: "Sent", time: "22 days 18 hours 46 minutes ago" },
          ].map((feed, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="lg" width="100%">
              <HStack justify="space-between">
                <HStack>
                  <Avatar size="sm" name={feed.name} />
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="bold">{feed.name}</Text>
                    <Text fontSize="sm">{feed.title}</Text>
                  </VStack>
                </HStack>
                <Text>{feed.status}</Text>
              </HStack>
              <Text fontSize="sm" color="gray.500">{feed.time}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Dashboard;