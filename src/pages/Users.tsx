import UsersList from "../components/UsersList";
import UserModel from "../models/user";
import {useEffect, useState} from "react";
import userService from "../services/user"
import {Header} from "../components/Header";
import {Link} from "react-router-dom";

function Users() {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    loadUsers()
  }, []);

  const loadUsers = async () => {
    const fetchedUsers = await userService.getUsers();

    // Check if fetchedUsers is undefined and provide a default value (empty array)
    const updatedUsers = fetchedUsers || [];

    setUsers(updatedUsers);
  };

  const removeUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <Header />
      <main className="main-content">
        <UsersList users={users} onRemoveUser={removeUser} onCreate={(user) => setUsers([...users, user])}/>
      </main>

      <footer className="fixed-bottom py-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <Link to={'/'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
              </svg>
            </Link>

            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" className="bi bi-plus-circle" viewBox="0 0 16 16" data-bs-toggle="modal" data-bs-target="#userEditModal">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Users;
