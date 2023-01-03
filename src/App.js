import { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import "./styles.css";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
