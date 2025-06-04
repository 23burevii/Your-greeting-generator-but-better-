import { Link } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
        <h1 className="text-5xl font-extrabold text-primary mb-4">Greeting Generator</h1>
        <p className="text-lg text-secondary max-w-xl mb-8">
          Need a toast, speech, or heartfelt message for a special moment? We’ve got you covered!
          Choose your occasion, answer a few simple questions, and let our AI craft the perfect greeting.
        </p>
        <Link
          to="/occasion"
          className="bg-accent hover:bg-primary text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}

export default App;
