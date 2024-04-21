import Container from "react-bootstrap/Container";
import AsideCategories from "./AsideCategories";

const asideCat = ["cosa1", "cosa2", "cosa3", "cosa4", "cosa5"];

const Aside = () => {
  return (
    <Container className="aside col-2">
      <h2>Aside</h2>
      <ul>
        {asideCat.map((cat) => (
          <AsideCategories cat={cat} />
        ))}
      </ul>
    </Container>
  );
};

export default Aside;
