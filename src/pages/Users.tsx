import UsersList from "../components/UsersList";
import User from "../models/user";
import {useEffect, useState} from "react";
import userService from "../services/user"

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
      <UsersList users={users} onRemoveUser={removeUser} />
    </>
  )
}

export default Users
