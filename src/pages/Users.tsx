import UsersList from "../components/UsersList";
import User from "../models/user";
import {useEffect, useState} from "react";
import userService from "../services/user"
import {Header} from "../components/Header";

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    loadUsers()
  }, []);

  const loadUsers = async () => {
    const users = await userService.getUsers()

    setUsers(users)
  }

  const removeUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <UsersList users={users} onRemoveUser={removeUser} />
      </main>
    </>
  )
}

export default Users
