export const tagline = 'Custom Retro Games for Learning, Competition & Celebration.';

// Add future titles here. Only verified, playable entries should have a playUrl.
export const games = [
  {
    slug: 'kingdom-race', title: "Kingdom Race: The Lion's Gate",
    shortTitle: 'Kingdom Race', genre: 'Bible trivia · Combat',
    status: 'playable', featured: true, accent: 'gold', players: '1 player',
    artwork: '/images/kingdom-race.svg',
    description: 'Put your Scripture knowledge to the test in a single-player Bible trivia combat game with animated encounters and progression. Step into the arena, take on the challenge, and sharpen your knowledge through play.',
    shortDescription: 'Single-player Bible trivia combat. Face animated encounters and progress through the challenge.',
    features: ['Single-player Bible trivia', 'Animated combat encounters', 'Progression through play'],
    playUrl: 'https://lionsgate.callistadigital.com/',
    // Read-only verification: 2026-10-30, HTTP 200.
    destinationName: 'Lions Gate Sword Sharpener — Scripture Arcade',
  },
  {
    slug: 'scripture-invaders', title: 'Scripture Invaders', shortTitle: 'Scripture Invaders',
    genre: 'Scripture matching · Fixed shooter', status: 'coming-soon', accent: 'mint',
    artwork: '/images/scripture-invaders.svg',
    description: 'Match Scripture references to destroy incoming alien craft in a classic fixed-shooter format inspired by Space Invaders. A new way to connect quick thinking with biblical learning.',
    shortDescription: 'Match Scripture references to blast incoming alien craft. Learning meets fixed-shooter action.',
    features: ['Scripture-reference matching', 'Classic fixed-shooter inspiration', 'Educational arcade challenges'],
  },
  {
    slug: 'hoops-challenge', title: 'Hoops Challenge', shortTitle: 'Hoops Challenge',
    genre: 'Educational sports · Free throws', status: 'coming-soon', accent: 'orange', players: '2 players',
    artwork: '/images/hoops-challenge.svg',
    description: 'Go head-to-head in a two-player, split-screen educational free-throw competition. Answer questions to unlock shots, then aim and shoot from a behind-the-player perspective.',
    shortDescription: 'Answer to unlock a shot. Aim for the win. Two-player, split-screen free-throw competition.',
    features: ['Two-player split-screen competition', 'Answer questions to unlock shots', 'Aim and shoot from behind the player'],
  },
  {
    slug: 'adventure-rpg', title: 'Adventure RPG', shortTitle: 'Adventure RPG',
    genre: 'Exploration · Custom adventure', status: 'coming-soon', accent: 'blue',
    artwork: '/images/adventure-rpg.svg',
    description: 'Explore a customizable 16-bit top-down world filled with quests, dialogue, puzzles, and educational opportunities. Turn a learning experience or celebration into a story worth playing.',
    shortDescription: 'A world of quests, discoveries, and stories made personal.',
    features: ['16-bit top-down exploration', 'Quests, puzzles, and character dialogue', 'Customizable educational opportunities'],
  },
  {
    slug: 'co-op-beat-em-up', title: "Co-op Beat 'Em Up", shortTitle: "Co-op Beat 'Em Up",
    genre: 'Side-scrolling · Arcade action', status: 'coming-soon', accent: 'purple', players: '2 players',
    artwork: '/images/co-op-beat-em-up.svg',
    description: 'Team up for customizable, two-player side-scrolling arcade combat inspired by the beat-’em-up games of the early 1990s. Shared action, a shared mission, and room for your own story.',
    shortDescription: 'Team up. Take on the streets. Make the adventure your own.',
    features: ['Two-player cooperative action', 'Side-scrolling arcade combat', 'Customizable game concept'],
  },
];

export const featuredGame = games.find((game) => game.featured);
export const isPlayable = (game) => game.status === 'playable' && Boolean(game.playUrl);
