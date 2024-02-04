import {useState} from "react";
import ContractModel from "../../../models/contract";

interface Props {
  onSubmit: (data: ContractModel) => void;
}

function Contract({onSubmit}: Props): JSX.Element {
  const [contract, setContract] = useState<ContractModel>({surname: '', name: '', additionalName: '', from: '', to: '', price: '', address: ''});

  const submitContract = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(contract);
  }

  return (
    <>
      <form className={'col-12 col-md-8 col-lg-6 col-xl-5 mx-auto'} onSubmit={submitContract}>
        <div className="col-12">
          <div className="mb-3">
            <label className="form-label" htmlFor="surname">Surname</label>
            <input value={contract.surname} onChange={e => setContract({...contract, surname: e.target.value})} className="form-control" id="surname" placeholder="Surname" type="text" required aria-label={"Surname"}/>
          </div>

          <div className="my-3">
            <label className="form-label" htmlFor="name">Name</label>
            <input value={contract.name} onChange={e => setContract({...contract, name: e.target.value})} className="form-control" id="name" placeholder="Name" type="text" required aria-label={"Name"} />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="additionalName">Additional Name</label>
            <input value={contract.additionalName} onChange={e => setContract({...contract, additionalName: e.target.value})} className="form-control" id="additionalName" placeholder="Additional Name" type="text" required aria-label={"Additional Name"} />
          </div>

          <div className="my-3">
            <label className="form-label" htmlFor="from">From</label>
            <input value={contract.from} onChange={e => setContract({...contract, from: e.target.value})} className="form-control" id="from" type="date" required aria-label={"From"} />
          </div>

          <div className="my-3">
            <label className="form-label" htmlFor="to">To</label>
            <input value={contract.to} onChange={e => setContract({...contract, to: e.target.value})} className="form-control" id="to" type="date" required />
          </div>

          <div className="my-3">
            <label className="form-label">Price</label>
            <select value={contract.price} onChange={e => setContract({...contract, price: e.target.value})} className="form-select" required>
              <option value="">Select Price</option>
              <option value="1500(одна тысяча пятьсот)">1500</option>
              <option value="2000(две тысячи)">2000</option>
              <option value="4000(четыре тысячи)">4000</option>
            </select>
          </div>

          <div className="my-3">
            <label className="form-label">Address</label>
            <select value={contract.address} onChange={e => setContract({...contract, address: e.target.value})} className="form-select" required>
              <option value="">Select Address</option>
              <option value="Contract88">Свердлово 88</option>
              <option value="Contract57A">Октября 57А</option>
              <option value="ContractKarla">Карла 49/11</option>
            </select>
          </div>

          <div className="mt-3">
            <button className="btn btn-bd-primary w-100 fs-5 mt-3 mb-5">Print</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Contract
