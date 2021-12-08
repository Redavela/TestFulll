import React from 'react';
import { useState } from 'react';

const ReactLevelTwo = () => {
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [noResult, setNoResult] = useState('');

  const handleChange = (e) => {
    if (error) {
      setError('');
    }

    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user !== '') {
      fetch(`https://api.github.com/search/users?q=${user}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.items.length > 0) {
            setNoResult('');
            setData(data.items);
          } else {
            setNoResult("Désolé, la recherche n'a rien donnée");
            setData(data.items);
            setError('');
          }
        })
        .catch((error) => {
          setData([]);
          setNoResult('');
          setError("Une erreur s'est produite");
        });
    } else {
      setData([]);
    }
  };

  return (
    <div className='fetchGithub'>
      <h1>Fetch Github</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Search Github users :</label>
        <input
          type="text"
          id="user"
          name="user"
          value={user}
          onChange={handleChange}
        />
        <button type="submit">Launch</button>
      </form>
      <div>
        {data.length > 0 && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.login}</li>
            ))}
          </ul>
        )}
        {noResult && <p>{noResult}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default ReactLevelTwo;
