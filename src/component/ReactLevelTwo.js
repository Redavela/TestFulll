import React from 'react';
import { useState } from 'react';

const ReactLevelTwo = () => {
  //On initialise les states ici.
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [noResult, setNoResult] = useState('');
  //fonction pour récuperer la valeur de l'input et mettre a jour le state de error
  const handleChange = (e) => {
    if (error) {
      setError('');
    }

    setUser(e.target.value);
  };
//fonction qui en fonction de l'information données dans l'input vas faire une requète fetch
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user !== '') {
      fetch(`https://api.github.com/search/users?q=${user}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //Un tableau ne sera jamais égale à un autre tableau alors la solution est de mettre .length en condition
          if (data.items.length > 0) {
            setNoResult('');
            setData(data.items);
          } //Si le tableau est vide on change les infos des diffèrent states
          else {
            setNoResult("Désolé, la recherche n'a rien donnée");
            setData(data.items);
            setError('');
          }
        })//Si une erreur ce produit on l'as récupère ici
        .catch((error) => {
          setData([]);
          setNoResult('');
          setError("Une erreur s'est produite");
        });
    } //Sinon on renvoie un tableau vide
    else {

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
          //La fonction est appelé ici
          onChange={handleChange}
        />
        <button type="submit">Launch</button>
      </form>
      <div>
      {/* Si la requête à fonction on fait un map des données récupérés et on les affiches dans une liste */}
        {data.length > 0 && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.login}</li>
            ))}
          </ul>
        )}
        {/* Sinon on affiche soit une erreur soit une recherche sans reponse */}
        {noResult && <p>{noResult}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default ReactLevelTwo;
