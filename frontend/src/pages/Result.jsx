import { useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const result = location.state?.result || "No result available.";

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Generated Result</h2>
      <div className="p-4 bg-gray-100 rounded shadow whitespace-pre-line">
        {result}
      </div>
    </div>
  );
}

export default Result;