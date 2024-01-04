import User from "../models/user";

interface UsersListProps {
  users: User[];
  onRemoveUser: (id: number) => void;
}

function UsersList({ users, onRemoveUser }: UsersListProps) {
  return(
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">phone</th>
          </tr>
        </thead>

        <tbody>
          { users.map(user =>
              <tr key={user.id}>
                <th scope="row"> {user.id} </th>
                <td> {user.name} </td>
                <td> {user.username} </td>
                <td> {user.phone} </td>
                <td> <button>edit</button> <button onClick={() => onRemoveUser(user.id)}>del</button> </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default UsersList
