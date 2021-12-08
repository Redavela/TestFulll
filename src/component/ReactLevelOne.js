import React, { useState } from 'react';
import { useEffect } from 'react';

const userData = [
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" }
  ];
  
  function ReactLevelOne() {
    //initialisation des states dans un tableau vide
    const [users, setUsers] = useState([]);
  //Utilisation useEffect pour récuperer le tableau
    useEffect(() => {
      setUsers(userData);
    }, []);
  
    const handleChange = (e) => {
        //Optimisation du code pour ne pas à avoir a réécrire de longue phrase
      const { name, checked } = e.target;
      //Partie pour le checkBox allSelect
      if (name === "allSelect") {
        let checkUser = users.map((user) => {
          return { ...user, isChecked: checked };
        });
        setUsers(checkUser);
      } // Partie pour les autres checkBoxes
      else {
        let checkUser = users.map((user) =>
          user.name === name ? { ...user, isChecked: checked } : user
        );
        setUsers(checkUser);
      }
    };
  
    return (

        <form className='checkBoxes'>
          <h1>Checkboxes</h1>
          <div >
            <input
              type="checkbox"
              name="allSelect"
              //On verifie que tout les éléments sont cochés sinon on décoche la case
              checked={!users.some((user) => user?.isChecked !== true)}
              //On appel la fonction ici
              onChange={handleChange}
            />
            <label>All Select</label>
          </div>
          {/* On utilise un map pour afficher les éléments du tableau users */}
          {users.map((user, index) => (
            <div key={index}>
              <input
                type="checkbox"
                name={user.name}
                checked={user?.isChecked || false}
                onChange={handleChange}
              />
              <label>{user.name}</label>
            </div>
          ))}
        </form>);
        }

export default ReactLevelOne;
