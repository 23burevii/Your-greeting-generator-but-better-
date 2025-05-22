import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Greetings generator</h1>
      <Link
        to="/occasion"
        className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
      >
        Get Started
      </Link>
    </div>
  );
}

export default App;
