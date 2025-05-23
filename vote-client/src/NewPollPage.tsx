import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from './api';

function NewPollPage() {
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (idx: number, value: string) => {
    const newOptions = [...options];
    newOptions[idx] = value;
    setOptions(newOptions);
  };

  const addOption = () => setOptions([...options, '']);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = options.filter(opt => opt.trim() !== '');
    if (filtered.length < 2) {
      setError('Мінімум 2 варіанти відповіді');
      return;
    }
    try {
      const res = await api.post('/polls', { title, options: filtered });
      navigate(`/polls/${res.data.id}`); // або navigate('/')
    } catch {
      setError('Помилка створення голосування');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 20, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>Сворити нове голосування</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Ім'я:
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              style={{ width: '100%', margin: '8px 0', padding: 8 }}
            />
          </label>
        </div>
        <div>
          Варіанти:
          {options.map((opt, idx) => (
            <div key={idx} style={{ marginBottom: 8 }}>
              <input
                type="text"
                value={opt}
                onChange={e => handleOptionChange(idx, e.target.value)}
                required
                style={{ width: '90%', padding: 6 }}
              />
            </div>
          ))}
          <button type="button" onClick={addOption} style={{ margin: '8px 0' }}>
            + Додати варіант
          </button>
        </div>
        {error && <div style={{ color: 'red', margin: '8px 0' }}>{error}</div>}
        <button type="submit" style={{ marginTop: 12, padding: '8px 24px' }}>
          Сворити
        </button>
      </form>
    </div>
  );
}

export default NewPollPage;