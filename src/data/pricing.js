export const customGamePackages = [
  {
    id: 'organizational',
    title: 'Customized Educational Games',
    label: 'FOR CHURCHES, SCHOOLS & ORGANIZATIONS',
    engineType: 'Existing R2G2 game engine',
    creationPrice: 997,
    monthlyMaintenance: 50,
    description: 'An existing R2G2 game engine customized for churches, schools, businesses, and organizations.',
    details: 'Shape the learning goals, questions, branding, and content around your audience while building on an established R2G2 game engine.',
    action: 'Plan an Educational Game',
  },
  {
    id: 'personal',
    title: 'Personalized Party Games',
    label: 'FOR PERSONAL CELEBRATIONS',
    engineType: 'Existing R2G2 game engine',
    creationPrice: 997,
    monthlyMaintenance: 15,
    description: 'A personalized party experience using an existing R2G2 game engine.',
    details: 'Make the celebration yours with personalized characters, names, branding, and content within an existing game engine.',
    action: 'Plan a Personal Game',
  },
  {
    id: 'original',
    title: 'Fully Original Game Development',
    label: 'FOR ENTIRELY NEW GAME IDEAS',
    engineType: 'Original game development',
    creationPrice: 4500,
    monthlyMaintenance: null,
    description: 'For entirely new game mechanics, gameplay systems, environments, or original concepts.',
    details: 'Start with a new concept and define the mechanics, systems, environments, and development scope together. Hosting and maintenance are quoted for your project.',
    action: 'Discuss an Original Game',
  },
];

export const adjustmentStartingPrice = 100;
export const formatPrice = (amount) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0,
}).format(amount);
