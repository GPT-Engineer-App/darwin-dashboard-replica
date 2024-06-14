import { Box, Flex } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Campaigns from "./pages/Campaigns.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CreateCampaign from "./pages/CreateCampaign.jsx";
import CreateOffer from "./pages/CreateOffer.jsx";
import OfferList from "./pages/OfferList.jsx";
import CampaignEmails from "./pages/CampaignEmails.jsx"; // Import the new CampaignEmails component

function App() {
  return (
    <Router>
      <Flex>
        <Sidebar />
        <Box flex="1">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/create-campaign" element={<CreateCampaign />} />
            <Route exact path="/create-offer" element={<CreateOffer />} />
            <Route exact path="/offers" element={<OfferList />} />
          <Route exact path="/campaign/:campaignId" element={<CampaignEmails />} /> {/* Add the new route */}
          <Route exact path="/campaigns" element={<Campaigns />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;