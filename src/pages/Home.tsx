import {useState} from "react";
import AreaFilter from "../components/AreaFilter";
import PrinterArea from "../components/PrinterArea";
import {Header} from "../components/Header";

function Home() {
  const [typeArea, setTypeArea] = useState('');

  return (
    <>
      <Header />
      <main className="main-content">
        <div className={'container'}>
          <AreaFilter onSelectType={(type) => setTypeArea(type)} />

          <PrinterArea type={typeArea as string} />
        </div>
      </main>
    </>
  )
}

export default Home
