import { Link } from 'react-router-dom';

const occasions = [
  { name: "Toast", path: "toast" },
  { name: "Wedding Speech", path: "wedding-speech" },
  { name: "Graduation", path: "graduation" },
  { name: "Anniversary", path: "anniversary" },
  { name: "Farewell/Retirement", path: "farewell" },
  { name: "Welcome Speech", path: "welcome" }
];

function OccasionSelection() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">What type of greeting do you need?</h1>
      <div className="grid gap-4 md:grid-cols-2 max-w-xl mx-auto">
        {occasions.map((occasion) => (
          <Link
            key={occasion.path}
            to={`/questions/${occasion.path}`}
            className="bg-blue-600 text-white p-4 rounded shadow hover:bg-blue-700 transition"
          >
            {occasion.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OccasionSelection;
