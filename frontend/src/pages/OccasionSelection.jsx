import { Link } from 'react-router-dom';
import Header from '../components/Header';

const occasions = [
  { name: "Toast", path: "toast" },
  { name: "Wedding Speech", path: "wedding" },
  { name: "Graduation", path: "graduation" },
  { name: "Anniversary", path: "anniversary" },
  { name: "Farewell/Retirement", path: "farewell" },
  { name: "Welcome Speech", path: "welcome" }
];

function OccasionSelection() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white px-4 pt-24 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">What type of greeting do you need?</h1>
        <p className="text-secondary max-w-xl mx-auto mb-10">
          Select an occasion below and answer a few questions. We’ll generate a personalized greeting for you in seconds!
        </p>
        <div className="grid gap-4 md:grid-cols-2 max-w-xl mx-auto">
          {occasions.map((occasion) => (
            <Link
              key={occasion.path}
              to={`/questions/${occasion.path}`}
              className="bg-primary hover:bg-accent text-white p-4 rounded shadow-md transition duration-200"
            >
              {occasion.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default OccasionSelection;
