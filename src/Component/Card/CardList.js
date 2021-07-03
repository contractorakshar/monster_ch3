import "./cardlist.styles.css";
import { Card } from "./cardContainer/Card.component";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monster.map((obj) => (
        // <h1 key={obj.id}>{obj.name}</h1>
        <Card key={obj.id} monster={obj} />
      ))}
    </div>
  );
};
