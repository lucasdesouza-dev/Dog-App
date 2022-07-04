import { useEffect, useState } from "react";
import Dogs from "./components/Dogs";

export type TData = {
  [x: string]: any;
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  id: number;
  image: {
    id: string;
    url: string;
  };
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: {
    imperial: string;
    metric: string;
  };
};
function App() {
  const [data, setData] = useState<TData[]>([]);

  const url = "https://api.thedogapi.com/v1/breeds?";
  const apiKey = "2f794710-4fdc-4fc8-9cd5-c3ada9cb1d0f";
  useEffect(() => {
    async function fetchdata() {
      const res = await fetch(`${url}api_key=${apiKey}`);

      const data = await res.json();
      setData(data);
    }
    fetchdata().catch((err) => console.log("erro" + err));
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Dogs data={data} />
    </div>
  );
}

export default App;
