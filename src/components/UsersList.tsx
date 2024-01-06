import User from "../models/user";
import {useState} from "react";
import {MigrationPrinter} from "./ContractPrinter";

interface UsersListProps {
  users: User[];
  onRemoveUser: (id: number) => void;
}

const initial = {
  id: true,
  name: true,
  surname: true,
  additionalName: true,
  birthday: true,
  gender: true,
  placeOfStay: true,
  citizenship: true,
  city: true
}

function UsersList({ users, onRemoveUser }: UsersListProps) {
  const [filters, setFilters] = useState(() => JSON.parse(localStorage.getItem('filters') as string) ?? initial);
  const save = () => {
    localStorage.setItem('filters', JSON.stringify(filters))
  }

  return(
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            {filters.id && <th scope="col">id</th>}
            {filters.name && <th scope="col">Name</th>}
            {filters.surname && <th scope="col">Surname</th>}
            {filters.additionalName && <th scope="col">Additional Name</th>}
            {filters.birthday && <th scope="col">Birthday</th>}
            {filters.gender && <th scope="col">Gender</th>}
            {filters.placeOfStay && <th scope="col">Place of stay</th>}
            {filters.citizenship && <th scope="col">Citizenship</th>}
            {filters.city && <th scope="col">City</th>}
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
                { filters.id && <th scope="row"> { user.id } </th> }
                { filters.name && <td> { user.name } </td> }
                { filters.surname && <td> { user.surname } </td> }
                { filters.additionalName && <td> { user.additionalName } </td>}
                { filters.birthday && <td> { user.birthday } </td>}
                { filters.gender && <td> {user.gender} </td>}
                { filters.placeOfStay && <td> { user.placeOfStay } </td>}
                { filters.citizenship && <td> { user.citizenship } </td>}
                { filters.city && <td> { user.city } </td>}
                <td> <button>edit</button> <button onClick={() => onRemoveUser(user.id)}>del</button> <button onClick={() => MigrationPrinter(user)}>print</button> </td>
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
              <input value={filters.name} onChange={e => setFilters({...filters, name: e.target.checked})} checked={filters.name} className="form-check-input" type="checkbox" role="switch" id="name" />
              <label className="form-check-label" htmlFor="name">Name</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.additionalName} onChange={e => setFilters({...filters, additionalName: e.target.checked})} checked={filters.additionalName} className="form-check-input" type="checkbox" role="switch" id="additionalName" />
              <label className="form-check-label" htmlFor="additionalName">Additional Name</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.birthday} onChange={e => setFilters({...filters, birthday: e.target.checked})} checked={filters.birthday} className="form-check-input" type="checkbox" role="switch" id="birthday" />
              <label className="form-check-label" htmlFor="birthday">Birthday</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.gender} onChange={e => setFilters({...filters, gender: e.target.checked})} checked={filters.gender} className="form-check-input" type="checkbox" role="switch" id="gender" />
              <label className="form-check-label" htmlFor="gender">Gender</label>
            </div>
          </div>

          <button onClick={() => save()} className={'btn btn-success mb-3 mx-4'} data-bs-dismiss="offcanvas">save</button>
        </div>
      </section>
    </>
  )
}

export default UsersList
