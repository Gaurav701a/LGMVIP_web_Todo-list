import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersGrid() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <nav>
        <span>Brand Name</span>
        <button onClick={() => {
          const fetchUsers = async () => {
            setLoading(true);
            const response = await axios.get('https://reqres.in/api/users?page=1');
            setUsers(response.data.data);
            setLoading(false);
          };
          fetchUsers();
        }}>Get Users</button>
      </nav>
      {loading && <div className="loader"></div>}
      <div className="card-grid">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt={user.first_name + ' ' + user.last_name} />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersGrid;
