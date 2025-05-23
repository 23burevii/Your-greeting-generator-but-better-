const questionSets = {
    toast: [
      { id: 'person_name', label: "Person's name", type: 'text' },
      { id: 'relationship', label: 'Your relationship to them', type: 'text' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Humorous', 'Warm', 'Formal', 'Inspirational'] },
      { id: 'interests', label: 'Their interests/hobbies', type: 'text' },
      { id: 'funny_fact', label: 'A funny or memorable fact', type: 'text' },
      { id: 'achievement', label: 'A special achievement', type: 'text' },
      { id: 'audience', label: 'Who is the audience?', type: 'text' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'] }
    ],
    wedding: [
      { id: 'couple_names', label: "Couple's names", type: 'text' },
      { id: 'relationship', label: 'Your relationship to them', type: 'text' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Romantic', 'Humorous', 'Formal'] },
      { id: 'shared_memories', label: 'Shared memories with the couple', type: 'text' },
      { id: 'wishes', label: 'Wishes for their future', type: 'text' },
      { id: 'audience', label: 'Who is the audience?', type: 'text' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'] }
    ],
    graduation: [
      { id: 'graduate_name', label: "Graduate's name", type: 'text' },
      { id: 'relationship', label: 'Your relationship to them', type: 'text' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Inspirational', 'Humorous', 'Formal'] },
      { id: 'achievements', label: 'Their achievements', type: 'text' },
      { id: 'future_plans', label: 'Their future plans', type: 'text' },
      { id: 'audience', label: 'Who is the audience?', type: 'text' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'] }
    ],
    anniversary: [
      { id: 'couple_names', label: "Couple's names", type: 'text' },
      { id: 'relationship', label: 'Your relationship to them', type: 'text' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Romantic', 'Humorous', 'Formal'] },
      { id: 'shared_memories', label: 'Shared memories with the couple', type: 'text' },
      { id: 'wishes', label: 'Wishes for their future', type: 'text' },
      { id: 'audience', label: 'Who is the audience?', type: 'text' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'] }
    ],
    farewell: [
      { id: 'person_name', label: "Person's name", type: 'text' },
      { id: 'relationship', label: 'Your relationship to them', type: 'text' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Inspirational', 'Humorous', 'Formal'] },
      { id: 'shared_memories', label: 'Shared memories with them', type: 'text' },
      { id: 'wishes', label: 'Wishes for their future', type: 'text' },
      { id: 'audience', label: 'Who is the audience?', type: 'text' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'] }
    ],
    welcome: [
      { id: 'person_name', label: "Person's name", type: 'text' },
      { id: 'relationship', label: 'Your relationship to them', type: 'text' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Inspirational', 'Humorous', 'Formal'] },
      { id: 'shared_memories', label: 'Shared memories with them', type: 'text' },
      { id: 'wishes', label: 'Wishes for their future', type: 'text' },
      { id: 'audience', label: 'Who is the audience?', type: 'text' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'] }
    ]
  };
  
  export default questionSets;