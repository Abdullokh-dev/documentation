import {useState} from "react";
import AreaFilter from "../components/AreaFilter";
import PrinterArea from "../components/PrinterArea";

function Home() {
  const [typeArea, setTypeArea] = useState('');

  return (
    <div className={'container'}>
      <AreaFilter onSelectType={(type) => setTypeArea(type)} />

      <PrinterArea type={typeArea} />
    </div>
  )
}

export default Home
