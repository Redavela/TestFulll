import React, { useState } from 'react';
import { useEffect } from 'react';

const userData = [
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" }
  ];
  
  function ReactLevelOne() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      setUsers(userData);
    }, []);
  
    const handleChange = (e) => {
      const { name, checked } = e.target;
      if (name === "allSelect") {
        let checkUser = users.map((user) => {
          return { ...user, isChecked: checked };
        });
        setUsers(checkUser);
      } else {
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
              checked={!users.some((user) => user?.isChecked !== true)}
              onChange={handleChange}
            />
            <label>All Select</label>
          </div>
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
