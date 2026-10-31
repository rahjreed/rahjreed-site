export const tagline = 'Custom Retro Games for Learning, Competition & Celebration.';

// Add future titles here. Only verified, playable entries should have a playUrl.
export const games = [
  {
    slug: 'kingdom-race', title: "Kingdom Race: The Lion's Gate",
    shortTitle: 'Kingdom Race', genre: 'Bible trivia · Combat',
    status: 'playable', featured: true, accent: 'gold',
    artwork: '/images/kingdom-race.svg',
    description: 'Put your Scripture knowledge to the test in a Bible trivia combat game. Step into the arena, take on the challenge, and sharpen your knowledge through play.',
    shortDescription: 'Scripture knowledge meets arcade combat. Enter the arena and rise to the challenge.',
    features: ['Bible trivia challenges', 'Arcade combat', 'Learning through play'],
    playUrl: 'https://lionsgate.callistadigital.com/',
    // Read-only verification: 2026-10-30, HTTP 200.
    destinationName: 'Lions Gate Sword Sharpener — Scripture Arcade',
  },
  {
    slug: 'scripture-invaders', title: 'Scripture Invaders', shortTitle: 'Scripture Invaders',
    genre: 'Scripture matching · Fixed shooter', status: 'coming-soon', accent: 'mint',
    artwork: '/images/scripture-invaders.svg',
    description: 'Match Scripture references while defending your position in a classic fixed-shooter format inspired by Space Invaders. A new way to connect quick thinking with biblical learning.',
    shortDescription: 'Match the reference. Take the shot. A classic arcade twist on Scripture learning.',
    features: ['Scripture-reference matching', 'Classic fixed-shooter inspiration', 'Educational arcade challenges'],
  },
  {
    slug: 'hoops-challenge', title: 'Hoops Challenge', shortTitle: 'Hoops Challenge',
    genre: 'Educational sports · 2 players', status: 'coming-soon', accent: 'orange',
    artwork: '/images/hoops-challenge.svg',
    description: 'Go head-to-head in a two-player, split-screen educational free-throw competition. With a view from behind the shooters, every question and every shot becomes part of the contest.',
    shortDescription: 'Two players. Split screen. Bring your knowledge and your free-throw game.',
    features: ['Two-player competition', 'Split-screen free throws', 'Behind-the-shooter perspective'],
  },
  {
    slug: 'adventure-rpg', title: 'Adventure RPG', shortTitle: 'Adventure RPG',
    genre: 'Exploration · Custom adventure', status: 'coming-soon', accent: 'blue',
    artwork: '/images/adventure-rpg.svg',
    description: 'Explore a customizable 16-bit top-down world filled with quests, dialogue, and educational challenges. Turn a learning experience or celebration into a story worth playing.',
    shortDescription: 'A world of quests, discoveries, and stories made personal.',
    features: ['16-bit top-down exploration', 'Quests and character dialogue', 'Customizable educational challenges'],
  },
  {
    slug: 'co-op-beat-em-up', title: "Co-op Beat 'Em Up", shortTitle: "Co-op Beat 'Em Up",
    genre: 'Side-scrolling action · 2 players', status: 'coming-soon', accent: 'purple',
    artwork: '/images/co-op-beat-em-up.svg',
    description: 'Team up for customizable, two-player side-scrolling arcade combat inspired by the beat-’em-up games of the early 1990s. Shared action, a shared mission, and room for your own story.',
    shortDescription: 'Team up. Take on the streets. Make the adventure your own.',
    features: ['Two-player cooperative action', 'Side-scrolling arcade combat', 'Customizable game concept'],
  },
];

export const featuredGame = games.find((game) => game.featured);
export const isPlayable = (game) => game.status === 'playable' && Boolean(game.playUrl);
