import UsersList from "../components/UsersList";
import UserModel from "../models/user";
import {useEffect, useState} from "react";
import userService from "../services/user"
import {Header} from "../components/Header";

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
        <UsersList users={users} onRemoveUser={removeUser} />
      </main>
    </>
  );
}

export default Users;
