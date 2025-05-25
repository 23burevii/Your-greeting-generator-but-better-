import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import questionSets from '../data/questions';
import axios from 'axios';

function OccasionQuestions() {
  const { occasion } = useParams();
  const navigate = useNavigate();
  const questions = questionSets[occasion] || [];
  const [formData, setFormData] = useState({});

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8000/api/generate', {
      occasion,
      person_name: formData.person_name || 'Unknown',
      details: formData
    });

    navigate('/result', { state: { result: response.data.result } });
  } catch (error) {
    console.error('Error generating toast:', error);
    alert('Something went wrong. Try again!');
  }
};


  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 capitalize">{occasion.replace('-', ' ')} Questions</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {questions.map((q) => (
          <div key={q.id}>
            <label className="block font-semibold mb-1">{q.label}</label>
            {q.type === 'select' ? (
              <select
                value={formData[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="">-- Select --</option>
                {q.options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                value={formData[q.id] || ''}
                onChange={(e) => handleChange(q.id, e.target.value)}
                className="w-full border rounded p-2"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Generate
        </button>
      </form>
    </div>
  );
}

export default OccasionQuestions;