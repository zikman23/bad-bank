import React from 'react';
import { loadAllUserData, logIn, UserContext } from './Context';
import { Card } from './Card';

export default function AllData() {
  const ctx = React.useContext(UserContext);

  const [selectedUser, setSelectedUser] = React.useState(ctx.user);
  const userList = loadAllUserData(); //as function to only fetch once

  const handleSelect = (id) => {
    const selected = userList.find((u) => u.id === id);

    ctx.user = selected;
    logIn(selected);

    setSelectedUser(selected);
  };

  const userElements = userList.map((u) => (
    <Card bgcolor={selectedUser.id === u.id ? 'info' : 'light'} key={u.id} header={u.name}>
      <p>Email: {u.email}</p>
      <p>Password: {u.password}</p>
      <p>Balance: {u.balance}</p>
      {ctx.user.id !== u.id && (
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-dark" onClick={() => handleSelect(u.id)}>
            Switch to this Account
          </button>
        </div>
      )}
    </Card>
  ));

  return (
    <div>
      <h2>All Users</h2>
      <br></br>
      <div>{userElements}</div>
    </div>
  );
}
