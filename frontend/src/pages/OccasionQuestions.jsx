import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import questionSets from '../data/questions';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import axios from 'axios';

function OccasionQuestions() {
  const { occasion } = useParams();
  const navigate = useNavigate();
  const questions = questionSets[occasion] || [];

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const validate = () => {
    const newErrors = {};
    questions.forEach((q) => {
      if (!formData[q.id]?.trim()) {
        newErrors[q.id] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:8000/api/${occasion}`, {
        person_name: formData.person_name || 'Unknown',
        details: formData
      });

      navigate('/result', { state: { result: response.data.result } });
    } catch (error) {
      alert('Something went wrong. Try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="p-6 pb-24 max-w-xl mx-auto pt-24">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary mb-4 capitalize">
              {occasion.replace('-', ' ')} Questions
            </h1>
            <p className="text-secondary mb-8">
              Please answer the questions below to help us generate a customized message for your selected occasion.
            </p>
  
            <form onSubmit={handleSubmit} className="space-y-6">
              {questions.map((q) => (
                <div key={q.id}>
                  <label className="block font-semibold text-lg text-primary mb-1">{q.label}</label>
                  {q.description && (
                    <p className="text-sm text-secondary mb-1">{q.description}</p>
                  )}
                  {q.type === 'select' ? (
                    <select
                      value={formData[q.id] || ''}
                      onChange={(e) => handleChange(q.id, e.target.value)}
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  )}
                  {errors[q.id] && (
                    <p className="text-red-500 text-sm mt-1">{errors[q.id]}</p>
                  )}
                </div>
              ))}
  
              <button
                type="submit"
                className="bg-primary hover:bg-accent text-white px-6 py-2 rounded shadow-md transition duration-200"
              >
                Generate
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );  
}

export default OccasionQuestions;
