import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result || 'No result available.';

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <Header />
      <div className="pt-24 px-4 pb-16 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-primary mb-6">Your Generated Result</h1>

        <div className="bg-white shadow-md border border-gray-200 p-6 rounded mb-6 text-left">
          <p className="text-gray-800 whitespace-pre-line">{result}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button
            onClick={handleCopy}
            className="bg-primary hover:bg-accent text-white px-5 py-2 rounded transition"
          >
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
          <button
            onClick={() => navigate('/occasion')}
            className="bg-secondary hover:bg-gray-400 text-white px-5 py-2 rounded transition"
          >
            Generate Another
          </button>
        </div>
      </div>
    </>
  );
}

export default Result;
