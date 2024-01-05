function Type1() {
  return (
    <>
      <h1> Type 1 </h1>

      <form>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">User Name</label>
          <input type="text" className="form-control" id="userName" aria-label={'User Name'} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Type1
