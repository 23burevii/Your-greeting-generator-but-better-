import { useParams } from 'react-router-dom';

function OccasionQuestions() {
  const { occasion } = useParams();

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Questions for: {occasion}</h2>
      <p>Here you’ll build a dynamic form based on the selected occasion.</p>
    </div>
  );
}

export default OccasionQuestions;
