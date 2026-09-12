import { Suspense } from "react";
import Banner from "./Component/Banner"
import Nav from "./Component/Nav"
import Technologies from "./Component/Technologies";
import type { ItechnologiesType } from "./Type/TechnologiesType";
import Footer from "./Component/Footer";
import { ToastContainer } from "react-toastify";






const TechnologiesFetch = async (): Promise<ItechnologiesType[]> => {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data;
};


function App() {
  // console.log(TechnologiesFetch);

const TechnologiesPromise = TechnologiesFetch();

  return (
    <div>
      
      <Nav/>
      <Banner/>
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies TechnologiesPromise={TechnologiesPromise} />
      </Suspense>
      <Footer/>
      <ToastContainer />
    </div>
  )
}

export default App
