import React, { useEffect, useState } from "react";

function RecentViews() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="container">
      <h2 className="title title-underline mb-4 ls-normal appear-animate">Your Recent Views</h2>
      {users.map((user) => {
        return (
          <div>
            <h1>{user.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default RecentViews;
