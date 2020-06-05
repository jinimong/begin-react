import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'Jacob',
      email: 'jw.kim@datadriven.kr',
    },
    {
      id: 2,
      username: 'Dana',
      email: 'dy.kim@datadriven.kr',
    },
    {
      id: 3,
      username: 'Ian',
      email: 'ys.park@datadriven.kr',
    },
  ];

  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
}

export default UserList;
