import React, {useState} from "react";
import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UsersList";

function App() {

  const [usersList, setUserList]=useState([]);

  const addUserHandler= (uName, uAge) =>{
    setUserList((prevUsersList)=>{
      return [...prevUsersList,{id:Math.random().toString() ,name:uName,age:uAge}]
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
