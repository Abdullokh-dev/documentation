import areaTypes from "../models/areaTypes";

interface Props {
  onSelectType: (category: string) => void;
}

function ExpenseFilter({onSelectType}: Props) {
  return(
    <select className="form-select mb-5" onChange={(event) => onSelectType(event.target.value)}>
      <option>Change Type</option>
      {areaTypes.map((type) => <option value={type} key={type}>{type}</option>)}
    </select>
  )
}

export default ExpenseFilter
