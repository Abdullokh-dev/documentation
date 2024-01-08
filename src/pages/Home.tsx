import {useState} from "react";
import AreaFilter from "../components/area/AreaFilter";
import DocProduceAreaController from "../components/DocProduceAreaController";
import {Header} from "../components/Header";

function Home() {
  const [typeArea, setTypeArea] = useState('');

  return (
    <>
      <Header />
      <main className="main-content">
        <div className={'container'}>
          <AreaFilter onSelectType={(type) => setTypeArea(type)} />

          <DocProduceAreaController type={typeArea as string} />
        </div>
      </main>
    </>
  )
}

export default Home
