const questionSets = {
    toast: [
      { id: 'person_name', label: "Person's name", type: 'text', description: 'Enter the name of the person you’re writing about.'},
      { id: 'relationship', label: 'Your relationship to them', type: 'text', description: 'Describe how you know this person (e.g., friend, colleague, family).' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Humorous', 'Warm', 'Formal', 'Inspirational'], description: 'Choose the tone of the toast.' },
      { id: 'interests', label: 'Their interests/hobbies', type: 'text', description: 'Mention any hobbies or interest of the person' },
      { id: 'funny_fact', label: 'A funny or memorable fact', type: 'text', description: 'Share a funny or memorable story about the person.' },
      { id: 'achievement', label: 'A special achievement', type: 'text', description: 'Mention any notable achievements of the person.' },
      { id: 'audience', label: 'Who is the audience?', type: 'text', description: 'Describe who will be listening to the toast (e.g., family, friends, colleagues).' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'], description: 'Select how long you want the toast to be.' }
    ],
    wedding: [
      { id: 'couple_names', label: "Couple's names", type: 'text', description: 'Enter the names of the couple getting married.' },
      { id: 'relationship', label: 'Your relationship to them', type: 'text', description: 'Describe your relationship to the couple (e.g., friend, family).' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Romantic', 'Humorous', 'Formal'], description: 'Choose the tone of the speech.' },
      { id: 'shared_memories', label: 'Shared memories with the couple', type: 'text', description: 'Share any memorable moments you have with the couple.' },
      { id: 'wishes', label: 'Wishes for their future', type: 'text', description: 'What are your wishes for the couple’s future together?' },
      { id: 'audience', label: 'Who is the audience?', type: 'text', description: 'Describe who will be listening to the speech (e.g., family, friends, colleagues).' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'], description: 'Select how long you want the speech to be.' }
    ],
    graduation: [
      { id: 'person_name', label: "Graduate's name", type: 'text', description: 'Enter the name of the person graduating.' },
      { id: 'relationship', label: 'Your relationship to them', type: 'text', description: 'Describe your relationship to the graduate (e.g., friend, family).' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Inspirational', 'Humorous', 'Formal'], description: 'Choose the tone of the speech.' },
      { id: 'achievements', label: 'Their achievements', type: 'text', description: 'Mention any notable achievements of the graduate during their studies.' },
      { id: 'future_plans', label: 'Their future plans', type: 'text', description: 'What are the graduate’s plans after graduation?' },
      { id: 'audience', label: 'Who is the audience?', type: 'text', description: 'Describe who will be listening to the speech (e.g., family, friends, classmates).' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'],  description: 'Select how long you want the speech to be.' }
    ],
    anniversary: [
      { id: 'couple_names', label: "Couple's names", type: 'text', description: 'Enter the names of the couple celebrating their anniversary.' },
      { id: 'relationship', label: 'Your relationship to them', type: 'text', description: 'Describe your relationship to the couple (e.g., friend, family).' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Romantic', 'Humorous', 'Formal'], description: 'Choose the tone of the speech.' },
      { id: 'shared_memories', label: 'Shared memories with the couple', type: 'text', description: 'Share any memorable moments you have with the couple.' },
      { id: 'wishes', label: 'Wishes for their future', type: 'text', description: 'What are your wishes for the couple’s future together?' },
      { id: 'audience', label: 'Who is the audience?', type: 'text', description: 'Describe who will be listening to the speech (e.g., family, friends, colleagues).' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'], description: 'Select how long you want the speech to be.' }
    ],
    farewell: [
      { id: 'person_name', label: "Person's name", type: 'text', description: 'Enter the name of the person who is leaving.' },
      { id: 'relationship', label: 'Your relationship to them', type: 'text', description: 'Describe your relationship to the person (e.g., friend, colleague).' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Inspirational', 'Humorous', 'Formal'], description: 'Choose the tone of the speech.' },
      { id: 'shared_memories', label: 'Shared memories with them', type: 'text', description: 'Share any memorable moments you have with the person.' },
      { id: 'wishes', label: 'Wishes for their future', type: 'text', description: 'What are your wishes for the person’s future endeavors?' },
      { id: 'audience', label: 'Who is the audience?', type: 'text', description: 'Describe who will be listening to the speech (e.g., colleagues, friends).' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'], description: 'Select how long you want the speech to be.' }
    ],
    welcome: [
      { id: 'person_name', label: "Person's name", type: 'text', description: 'Enter the name of the person you are welcoming.' },
      { id: 'relationship', label: 'Your relationship to them', type: 'text', description: 'Describe your relationship to the person (e.g., friend, colleague).' },
      { id: 'tone', label: 'Desired tone', type: 'select', options: ['Inspirational', 'Humorous', 'Formal'], description: 'Choose the tone of the speech.' },
      { id: 'shared_memories', label: 'Shared memories with them', type: 'text', description: 'Share any memorable moments you have with the person.' },
      { id: 'wishes', label: 'Wishes for their future', type: 'text', description: 'What are your wishes for the person’s future endeavors?' },
      { id: 'audience', label: 'Who is the audience?', type: 'text', description: 'Describe who will be listening to the speech (e.g., colleagues, friends).' },
      { id: 'length', label: 'Desired length', type: 'select', options: ['Short', 'Medium', 'Long'], description: 'Select how long you want the speech to be.' }
    ]
  };
  
  export default questionSets;