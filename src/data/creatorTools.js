import { Video } from 'lucide-react';

export const creatorTools = [
  {
    id: 'mr-prompterson',
    name: 'Mr. Prompterson',
    category: 'Free Creator Tool',
    headline: 'Record With Confidence.',
    description: 'Meet Mr. Prompterson, your free video teleprompter. Prepare your script, read naturally while recording, and create content with more confidence.',
    summary: 'Prepare your script and read naturally on camera with this free video teleprompter.',
    icon: Video,
    visualLabel: 'VIDEO TELEPROMPTER',
    status: 'available',
    externalUrl: 'https://teleprompter.callistadigital.com',
    featured: true,
  },
];

export const canLaunchTool = (tool) => tool.status === 'available' && Boolean(tool.externalUrl);
export const featuredCreatorTool = creatorTools.find((tool) => tool.featured && canLaunchTool(tool));
