export const generateEmails = (campaign) => {
  const { campaignName, selectedOffer } = campaign;

  const emails = [
    {
      subject: `AI-Powered Outreach, {{first_name}}!`,
      body: `Hi {{first_name}},\n\n{{ai_personalized_intro_line}} Imagine having an AI-powered BDR like Darwin to autonomously write messages that prospects love responding to. {{ai_personalized_pitch}}\n\nOur clients, like Qura, saw 15+ meetings booked in the first two weeks, and some top-tier startups report over 10 meetings per week!`,
    },
    {
      subject: `Follow-up: AI-Powered Outreach, {{first_name}}!`,
      body: `Hi {{first_name}},\n\nJust checking in to see if you had a chance to review my previous email about our AI-powered BDR. {{ai_personalized_pitch}}\n\nLooking forward to your thoughts.`,
    },
    {
      subject: `Exciting Opportunity for You, {{first_name}}`,
      body: `Hi {{first_name}},\n\nI wanted to share an exciting opportunity with you. Our AI-powered BDR has been helping companies like yours achieve remarkable results. {{ai_personalized_pitch}}\n\nLet's schedule a call to discuss further.`,
    },
    {
      subject: `Send LinkedIn Connection Request`,
      body: `Hi {{first_name}},\n\nI would love to connect with you on LinkedIn to discuss how our AI-powered BDR can benefit your company. {{ai_personalized_pitch}}\n\nLooking forward to connecting!`,
    },
  ];

  return emails;
};