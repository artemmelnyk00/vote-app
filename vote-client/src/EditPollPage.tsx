import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from './api';

function EditPollPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/polls/${id}`).then((res) => {
      setTitle(res.data.title);
      const existingOptions = Array.from(new Set(res.data.votes.map((v: any) => v.option))) as string[];
      setOptions(existingOptions);
    });
  }, [id]);

  const handleChangeOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => setOptions([...options, '']);
  const handleRemoveOption = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedOptions = options.map((o) => o.trim()).filter((o) => o !== '');
    if (cleanedOptions.length < 2) {
      setError('Мінімум 2 варіанти відповіді');
      return;
    }

    try {
      await api.patch(`/polls/${id}`, {
        title,
        options: cleanedOptions,
      });
      navigate(`/polls/${id}`);
    } catch (err) {
      setError('Помилка при збереженні');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1>Редагувати</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Заголовок:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div>
          <label>Варіанти:</label>
          {options.map((opt, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
              <input
                type="text"
                value={opt}
                onChange={(e) => handleChangeOption(i, e.target.value)}
                style={{ flex: 1 }}
              />
              <button type="button" onClick={() => handleRemoveOption(i)}>Видалити</button>
            </div>
          ))}
          <button type="button" onClick={handleAddOption}>Додати варіант</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div style={{ marginTop: '16px' }}>
          <button type="submit">Зберегти</button>
        </div>
      </form>
    </div>
  );
}

export default EditPollPage;
