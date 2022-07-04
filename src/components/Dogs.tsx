import Card from "./Card";
import { TData } from "../App";
interface Props {
  data: TData[];
}
const Dogs: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <ul>
        {data != null &&
          data.map((dog) => {
            return <Card key={dog.id} dog={dog} />;
          })}
      </ul>
    </div>
  );
};

export default Dogs;
