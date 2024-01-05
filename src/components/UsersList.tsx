import User from "../models/user";
import {useState, useEffect} from "react";

interface UsersListProps {
  users: User[];
  onRemoveUser: (id: number) => void;
}

const initial = {
  id: true,
  name: true,
  userName: true,
  phone: true
}

function UsersList({ users, onRemoveUser }: UsersListProps) {
  const [filters, setFilters] = useState(initial);

  const save = () => {
    localStorage.setItem('filters', JSON.stringify(filters))
  }

  useEffect(() => {
    const memory = localStorage.getItem('filters')

    if(!memory) save();

    setFilters(JSON.parse(localStorage.getItem('filters') as string))
  }, []);

  return(
    <>
      <table className="table">
        <thead>
          <tr>
            {filters.id && <th scope="col">id</th>}
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">phone</th>
            <th scope="col">
              <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#filters" aria-controls="filters">
                Filter
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          { users.map(user =>
              <tr key={user.id}>
                { filters.id && <th scope="row"> {user.id} </th> }
                <td> {user.name} </td>
                <td> {user.username} </td>
                <td> {user.phone} </td>
                <td> <button>edit</button> <button onClick={() => onRemoveUser(user.id)}>del</button> </td>
              </tr>
            )
          }
        </tbody>
      </table>

      <section className='Filters'>
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="filters" aria-labelledby="filters">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Choose rows</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="form-check form-switch py-2">
              <input value={filters.id} onChange={e => setFilters({...filters, id: e.target.checked})} checked={filters.id} className="form-check-input" type="checkbox" role="switch" id="id" />
              <label className="form-check-label" htmlFor="id">ID</label>
            </div>

            <div className="form-check form-switch py-2">
              <input className="form-check-input" type="checkbox" role="switch" id="name" />
              <label className="form-check-label" htmlFor="name">Name</label>
            </div>

            <div className="form-check form-switch py-2">
              <input className="form-check-input" type="checkbox" role="switch" id="userName" />
              <label className="form-check-label" htmlFor="userName">User Name</label>
            </div>

            <div className="form-check form-switch py-2">
              <input className="form-check-input" type="checkbox" role="switch" id="phone" />
              <label className="form-check-label" htmlFor="phone">Phone</label>
            </div>
          </div>

          <button onClick={() => save()} className={'btn btn-success mb-3 mx-4'} data-bs-dismiss="offcanvas">save</button>
        </div>
      </section>
    </>
  )
}

export default UsersList
