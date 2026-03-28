import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ResultChart/ResultChart";
import axios from "axios";
import MarkChart from "./components/MarkChart/MarkChart";

const pricingPromise = fetch("../public/pricingData.json").then((res) =>
  res.json(),
);

const marksPromise = axios.get("../public/marksData.json");

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <MarkChart marksPromise={marksPromise}></MarkChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
