import { Deck } from '../types';

export const decks: Deck[] = [
  {
    id: 'deep-questions',
    title: 'Deep Questions',
    description: 'Thought-provoking questions for meaningful conversations',
    icon: '🧠',
    isPremium: false,
    cards: [
      { id: '1', question: "If you could have dinner with anyone, living or dead, who would it be and why?", category: 'deep', isFavorite: false },
      { id: '2', question: "What’s something you’ve never told anyone but wish someone knew?", category: 'deep', isFavorite: false },
      { id: '3', question: "When did you last feel truly vulnerable, and how did you handle it?", category: 'deep', isFavorite: false },
      { id: '4', question: "If you could relive one day in your life exactly as it happened, which day would it be and why?", category: 'deep', isFavorite: false },
      { id: '5', question: "Is there something you've dreamed of doing for a long time? Why haven’t you done it?", category: 'deep', isFavorite: false },
      { id: '6', question: "When was the last time you cried in front of someone, or were you alone?", category: 'deep', isFavorite: false },
      { id: '7', question: "What do you most fear about the future, and what gives you hope?", category: 'deep', isFavorite: false },
      { id: '8', question: "What’s a belief or opinion you once held strongly but changed over time?", category: 'deep', isFavorite: false },
      { id: '9', question: "If a crystal ball could tell you one truth about your future, what would you want to know?", category: 'deep', isFavorite: false },
      { id: '10', question: "What does ‘home’ mean to you, and have you ever felt out of place there?", category: 'deep', isFavorite: false }
    ]
},
  {
    id: 'couples',
    title: 'Couple Questions',
    description: 'Strengthen your bond with intimate conversations',
    icon: '❤️',
    isPremium: false,
    cards: [
      { id: '11', question: "When did you first know you were in love?", category: 'couples', isFavorite: false },
      { id: '12', question: "What's your idea of a perfect date?", category: 'couples', isFavorite: false },
      { id: '13', question: "What's one thing you'd like to improve in our relationship?", category: 'couples', isFavorite: false },
      { id: '14', question: "Given the choice of anyone in the world, who would you want as a dinner guest?", category: 'couples', isFavorite: false },
      { id: '15', question: "What would constitute a perfect day for you?", category: 'couples', isFavorite: false },
      { id: '16', question: "For what in your life do you feel most grateful?", category: 'couples', isFavorite: false },
      { id: '17', question: "What is your most terrible memory?", category: 'couples', isFavorite: false },
      { id: '18', question: "If you could change anything about how you were raised, what would it be?", category: 'couples', isFavorite: false },
      { id: '19', question: "If you knew that in one year you would die suddenly, would you change anything about the way you are now living?", category: 'couples', isFavorite: false },
      { id: '20', question: "What roles do love and affection play in your life?", category: 'couples', isFavorite: false },
      { id: '21', question: "How close and warm is your family? Do you feel your childhood was happier than most other people's?", category: 'couples', isFavorite: false },
      { id: '22', question: "How do you feel about your relationship with your mother?", category: 'couples', isFavorite: false },
      { id: '23', question: "What, if anything, is too serious to be joked about?", category: 'couples', isFavorite: false },
      { id: '24', question: "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone?", category: 'couples', isFavorite: false },
      { id: '25', question: "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be?", category: 'couples', isFavorite: false }
    ]
  },
  {
    id: 'would-you-rather',
    title: 'Would You Rather',
    description: 'Fun dilemmas to spark interesting debates',
    icon: '🔀',
    isPremium: false,
    cards: [
      { id: '26', question: "Would you rather fight one horse-sized duck or a hundred duck-sized horses?", category: 'wyr', isFavorite: false },
      { id: '27', question: "Would you rather have to sing everything you say or dance everywhere you go?", category: 'wyr', isFavorite: false },
      { id: '28', question: "Would you rather always have to tell the truth or never be able to speak again?", category: 'wyr', isFavorite: false },
      { id: '29', question: "Would you rather have spaghetti for hair or sweat maple syrup?", category: 'wyr', isFavorite: false },
      { id: '30', question: "Would you rather live without the internet or live without AC and heating?", category: 'wyr', isFavorite: false },
      { id: '31', question: "Would you rather be able to teleport anywhere but only naked or be invisible but only when you're sneezing?", category: 'wyr', isFavorite: false },
      { id: '32', question: "Would you rather have to wear clown makeup every day for a year or wear a tutu everywhere you go?", category: 'wyr', isFavorite: false },
      { id: '33', question: "Would you rather have fingers as long as your legs or legs as short as your fingers?", category: 'wyr', isFavorite: false },
      { id: '34', question: "Would you rather have a rewind button in life or a pause button?", category: 'wyr', isFavorite: false },
      { id: '35', question: "Would you rather never have to sleep but feel fully rested or never have to eat but always feel full?", category: 'wyr', isFavorite: false }
    ]
},
  {
    id: 'spill-the-tea',
    title: 'Spill the Tea',
    description: 'Light-hearted questions to break the ice',
    icon: '☕',
    isPremium: false,
    cards: [
      { id: '36', question: "What's the funniest thing that's happened to you recently?", category: 'tea', isFavorite: false },
      { id: '37', question: "If you could have any superpower, what would it be and why?", category: 'tea', isFavorite: false },
      { id: '38', question: "What's the most embarrassing moment you've had?", category: 'tea', isFavorite: false },
      { id: '39', question: "If you could go back in time and change one thing, what would it be?", category: 'tea', isFavorite: false },
      { id: '40', question: "What's the best piece of advice you've ever received?", category: 'tea', isFavorite: false },
      { id: '41', question: "If you could only eat one food for the rest of your life, what would it be?", category: 'tea', isFavorite: false },
      { id: '42', question: "What's the weirdest thing you've ever done?", category: 'tea', isFavorite: false },
      { id: '43', question: "If you could have any job in the world, what would it be?", category: 'tea', isFavorite: false },
      { id: '44', question: "What's the most interesting place you've ever visited?", category: 'tea', isFavorite: false },
      { id: '45', question: "If you could have any pet, what would it be?", category: 'tea', isFavorite: false }
    ]
  },
  {
    id: 'late-night-talks',
    title: 'Late Night Talks',
    description: 'Conversations for late-night fun',
    icon: '🌙',
    isPremium: false,
    cards: [
      { id: '46', question: "What's the most interesting book you've read recently?", category: 'late', isFavorite: false },
      { id: '47', question: "If you could have any celebrity over for dinner, who would it be and why?", category: 'late', isFavorite: false },
      { id: '48', question: "What's the funniest movie you've seen recently?", category: 'late', isFavorite: false },
      { id: '49', question: "If you could travel anywhere in the world, where would you go?", category: 'late', isFavorite: false },
      { id: '50', question: "What's the best TV show you've watched recently?", category: 'late', isFavorite: false },
      { id: '51', question: "If you could have any musical instrument, what would it be?", category: 'late', isFavorite: false },
      { id: '52', question: "What's the most interesting fact you know?", category: 'late', isFavorite: false },
      { id: '53', question: "If you could have any job in the world, what would it be?", category: 'late', isFavorite: false },
      { id: '54', question: "What's the most interesting place you've ever visited?", category: 'late', isFavorite: false },
      { id: '55', question: "If you could have any pet, what would it be?", category: 'late', isFavorite: false }
    ]
  },
  {
    id: 'naughty-questions',
    title: 'Naughty Questions',
    description: 'Steamy, daring questions to spice things up',
    icon: '🔥',
    isPremium: false,
    cards: [
      { id: '56', question: "What's your wildest sexual fantasy that you've never shared?", category: 'naughty', isFavorite: false },
      { id: '57', question: "Have you ever had sex in a public place? If yes, where?", category: 'naughty', isFavorite: false },
      { id: '58', question: "What's the kinkiest thing you've ever wanted to try?", category: 'naughty', isFavorite: false },
      { id: '59', question: "If we were alone in an elevator right now, what would you want to do?", category: 'naughty', isFavorite: false },
      { id: '60', question: "What's your favorite body part on me, and why?", category: 'naughty', isFavorite: false },
      { id: '61', question: "Have you ever thought about a threesome? With who?", category: 'naughty', isFavorite: false },
      { id: '62', question: "What's the most adventurous position you've tried or want to try?", category: 'naughty', isFavorite: false },
      { id: '63', question: "What’s the naughtiest dream you’ve ever had about me?", category: 'naughty', isFavorite: false },
      { id: '64', question: "If you had 24 hours to be as wild as you wanted, what would we do?", category: 'naughty', isFavorite: false },
      { id: '65', question: "Have you ever sent or received a naughty photo? What was it?", category: 'naughty', isFavorite: false }
    ]
}
];
