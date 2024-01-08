import UserModel from "../models/user";
import {useState} from "react";
import {MigrationPrinter} from "./DocCreateAction";

interface UsersListProps {
  users: UserModel[];
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
  citizenship_country: true,
  city: true,
  docType: true,
  docSeriesNum: true,
  docDateOfIssue: true,
  docDateOfExpiry: true,
  rightToStay: true,
  ruDocSeries: true,
  ruDocNum: true,
  ruDocDateOfIssue: true,
  ruDocDateOfExpiry: true,
  migCardSeries: true,
  migCardNum: true,
  purposeOfComing: true,
  profession: true,
  dateOfEntryToRu: true,
  deadlineLiveInRu: true
}

function UsersList({ users, onRemoveUser }: UsersListProps) {
  const [filters, setFilters] = useState(() => JSON.parse(localStorage.getItem('filters') as string) ?? initial);
  const save = () => {
    localStorage.setItem('filters', JSON.stringify(filters))
  }

  return(
    <>
      <table className="table table-bordered table-hover table-striped">
        <thead className="table-head">
          <tr>
            {filters.id && <th scope="col">Id</th>}
            {filters.name && <th scope="col">Name</th>}
            {filters.surname && <th scope="col">Surname</th>}
            {filters.additionalName && <th scope="col">Additional Name</th>}
            {filters.birthday && <th scope="col">Birthday</th>}
            {filters.gender && <th scope="col">Gender</th>}
            {filters.placeOfStay && <th scope="col">Place of stay</th>}
            {filters.citizenship_country && <th scope="col">Citizenship/Country</th>}
            {filters.city && <th scope="col">City</th>}
            {filters.docType && <th scope="col">Doc Type</th>}
            {filters.docSeriesNum && <th scope="col">Doc Series/Num</th>}
            {filters.docDateOfIssue && <th scope="col">Doc Given Date</th>}
            {filters.docDateOfExpiry && <th scope="col">Doc Expiry Date</th>}
            {filters.rightToStay && <th scope="col">Right To Stay</th>}
            {filters.ruDocSeries && <th scope="col">(RVP,VNJ)Series</th>}
            {filters.ruDocNum && <th scope="col">(RVP,VNJ)Num</th>}
            {filters.ruDocDateOfIssue && <th scope="col">(RVP,VNJ) Given Date</th>}
            {filters.ruDocDateOfExpiry && <th scope="col">(RVP,VNJ) Expiry Date</th>}
            {filters.migCardSeries && <th scope="col">Mig Card Series</th>}
            {filters.migCardNum && <th scope="col">Mig Card Num</th>}
            {filters.purposeOfComing && <th scope="col">Purpose of coming</th>}
            {filters.profession && <th scope="col">Profession</th>}
            {filters.dateOfEntryToRu && <th scope="col">Date of Entry Russia</th>}
            {filters.deadlineLiveInRu && <th scope="col">Deadline of Living Russia</th>}
            <th scope="col">
              <button className="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#filters" aria-controls="filters">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                </svg>
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
                { filters.citizenship_country && <td> { user.citizenship_country } </td>}
                { filters.city && <td> { user.city } </td>}
                { filters.docType && <td> { user.docType } </td>}
                { filters.docSeriesNum && <td> { user.docSeriesNum } </td>}
                { filters.docDateOfIssue && <td> { user.docDateOfIssue } </td>}
                { filters.docDateOfExpiry && <td> { user.docDateOfExpiry } </td>}
                { filters.rightToStay && <td> { user.rightToStay } </td>}
                { filters.ruDocSeries && <td> { user.ruDocSeries } </td>}
                { filters.ruDocNum && <td> { user.ruDocNum } </td>}
                { filters.ruDocDateOfIssue && <td> { user.ruDocDateOfIssue } </td>}
                { filters.ruDocDateOfExpiry && <td> { user.ruDocDateOfExpiry } </td>}
                { filters.migCardSeries && <td> { user.migCardSeries } </td>}
                { filters.migCardNum && <td> { user.migCardNum } </td>}
                { filters.purposeOfComing && <td> { user.purposeOfComing } </td>}
                { filters.profession && <td> { user.profession } </td>}
                { filters.dateOfEntryToRu && <td> { user.dateOfEntryToRu } </td>}
                { filters.deadlineLiveInRu && <td> { user.deadlineLiveInRu } </td>}
                <td>
                  <button className="btn btn-outline-warning me-2">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                  </button>
                  <button className="btn btn-outline-danger me-2" onClick={() => onRemoveUser(user.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                  </button>
                  <button className="btn btn-outline-secondary" onClick={() => MigrationPrinter(user)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-printer" viewBox="0 0 16 16">
                      <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                      <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                    </svg>
                  </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

      <section className='Filters'>
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="filters" aria-labelledby="filters">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Edit Columns</h5>
            <button type="button" className="close-btn p-0 d-flex" data-bs-dismiss="offcanvas" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </button>
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
              <input value={filters.surname} onChange={e => setFilters({...filters, surname: e.target.checked})} checked={filters.surname} className="form-check-input" type="checkbox" role="switch" id="surname" />
              <label className="form-check-label" htmlFor="surname">Surname</label>
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

            <div className="form-check form-switch py-2">
              <input value={filters.placeOfStay} onChange={e => setFilters({...filters, placeOfStay: e.target.checked})} checked={filters.placeOfStay} className="form-check-input" type="checkbox" role="switch" id="placeOfStay" />
              <label className="form-check-label" htmlFor="placeOfStay">Place of Stay</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.citizenship_country} onChange={e => setFilters({...filters, citizenship_country: e.target.checked})} checked={filters.citizenship_country} className="form-check-input" type="checkbox" role="switch" id="citizenship_country" />
              <label className="form-check-label" htmlFor="citizenship_country">Citizenship/Country</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.city} onChange={e => setFilters({...filters, city: e.target.checked})} checked={filters.city} className="form-check-input" type="checkbox" role="switch" id="city" />
              <label className="form-check-label" htmlFor="city">City</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.docType} onChange={e => setFilters({...filters, docType: e.target.checked})} checked={filters.docType} className="form-check-input" type="checkbox" role="switch" id="docType" />
              <label className="form-check-label" htmlFor="docType">DocType</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.docSeriesNum} onChange={e => setFilters({...filters, docSeriesNum: e.target.checked})} checked={filters.docSeriesNum} className="form-check-input" type="checkbox" role="switch" id="docSeriesNum" />
              <label className="form-check-label" htmlFor="docSeriesNum">Doc Series/Num</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.docDateOfIssue} onChange={e => setFilters({...filters, docDateOfIssue: e.target.checked})} checked={filters.docDateOfIssue} className="form-check-input" type="checkbox" role="switch" id="docDateOfIssue" />
              <label className="form-check-label" htmlFor="docDateOfIssue">Doc Given Dade</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.docDateOfExpiry} onChange={e => setFilters({...filters, docDateOfExpiry: e.target.checked})} checked={filters.docDateOfExpiry} className="form-check-input" type="checkbox" role="switch" id="docDateOfExpiry" />
              <label className="form-check-label" htmlFor="docDateOfExpiry">Doc Expiry Dade</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.rightToStay} onChange={e => setFilters({...filters, rightToStay: e.target.checked})} checked={filters.rightToStay} className="form-check-input" type="checkbox" role="switch" id="rightToStay" />
              <label className="form-check-label" htmlFor="rightToStay">Right To Stay</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.ruDocSeries} onChange={e => setFilters({...filters, ruDocSeries: e.target.checked})} checked={filters.ruDocSeries} className="form-check-input" type="checkbox" role="switch" id="ruDocSeries" />
              <label className="form-check-label" htmlFor="ruDocSeries">(RVP, VID) Series</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.ruDocNum} onChange={e => setFilters({...filters, ruDocNum: e.target.checked})} checked={filters.ruDocNum} className="form-check-input" type="checkbox" role="switch" id="ruDocNum" />
              <label className="form-check-label" htmlFor="ruDocNum">(RVP, VID) Num</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.ruDocDateOfIssue} onChange={e => setFilters({...filters, ruDocDateOfIssue: e.target.checked})} checked={filters.ruDocDateOfIssue} className="form-check-input" type="checkbox" role="switch" id="ruDocDateOfIssue" />
              <label className="form-check-label" htmlFor="ruDocDateOfIssue">(RVP, VID) Expiry Date</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.migCardSeries} onChange={e => setFilters({...filters, migCardSeries: e.target.checked})} checked={filters.migCardSeries} className="form-check-input" type="checkbox" role="switch" id="migCardSeries" />
              <label className="form-check-label" htmlFor="migCardSeries">Mig Card Series</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.migCardNum} onChange={e => setFilters({...filters, migCardNum: e.target.checked})} checked={filters.migCardNum} className="form-check-input" type="checkbox" role="switch" id="migCardNum" />
              <label className="form-check-label" htmlFor="migCardNum">Mig Card Num</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.purposeOfComing} onChange={e => setFilters({...filters, purposeOfComing: e.target.checked})} checked={filters.purposeOfComing} className="form-check-input" type="checkbox" role="switch" id="purposeOfComing" />
              <label className="form-check-label" htmlFor="purposeOfComing">Purpose Of Coming</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.profession} onChange={e => setFilters({...filters, profession: e.target.checked})} checked={filters.profession} className="form-check-input" type="checkbox" role="switch" id="profession" />
              <label className="form-check-label" htmlFor="profession">Profession</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.dateOfEntryToRu} onChange={e => setFilters({...filters, dateOfEntryToRu: e.target.checked})} checked={filters.dateOfEntryToRu} className="form-check-input" type="checkbox" role="switch" id="dateOfEntryToRu" />
              <label className="form-check-label" htmlFor="dateOfEntryToRu">Date Of Entry Russia</label>
            </div>

            <div className="form-check form-switch py-2">
              <input value={filters.deadlineLiveInRu} onChange={e => setFilters({...filters, deadlineLiveInRu: e.target.checked})} checked={filters.deadlineLiveInRu} className="form-check-input" type="checkbox" role="switch" id="deadlineLiveInRu" />
              <label className="form-check-label" htmlFor="deadlineLiveInRu">Deadline Of Lining Russia</label>
            </div>
          </div>

          <button onClick={() => save()} className={'btn btn-success my-3 mx-4'} data-bs-dismiss="offcanvas">Save</button>
        </div>
      </section>
    </>
  )
}

export default UsersList
