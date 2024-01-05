import areaTypes from "../models/areaTypes";

interface Props {
  onSelectType: (category: string) => void;
}

function ExpenseFilter({onSelectType}: Props) {
  return(
    <select className="form-select my-5" onChange={(event) => onSelectType(event.target.value)}>
      {areaTypes.map((type) => <option value={type} key={type}>{type}</option>)}
    </select>
  )
}

export default ExpenseFilter
