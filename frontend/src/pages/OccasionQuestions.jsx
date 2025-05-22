function OccasionSelection() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Select an Occasion</h1>
        <ul className="space-y-2">
          {['Toast', 'Wedding Speech', 'Graduation', 'Anniversary', 'Farewell'].map((occasion) => (
            <li key={occasion}>
              <a
                href={`/questions/${occasion.toLowerCase().replace(/\s+/g, '-')}`}
                className="block p-4 bg-blue-100 hover:bg-blue-200 rounded shadow"
              >
                {occasion}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default OccasionSelection;