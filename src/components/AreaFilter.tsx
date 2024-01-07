import areaTypes from "../models/areaTypes";

interface Props {
  onSelectType: (category: string) => void;
}

function ExpenseFilter({onSelectType}: Props) {
  return(
    <select className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto form-select form-select-lg my-4" onChange={(event) => onSelectType(event.target.value)}>
      {areaTypes.map((type) => <option value={type} key={type}>{type}</option>)}
    </select>
  )
}

export default ExpenseFilter
