export default function Migration() {
  return (
    <>
      <h1> Migration </h1>

      <form>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">User Name</label>
          <input type="text" className="form-control" id="userName" aria-label={'User Name'} />
        </div>

        <button type="submit" className="btn btn-bd-primary">Submit</button>
      </form>
    </>
  )
}
