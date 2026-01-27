import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const suggestedDestinations = [
  {
    title: "Cerca",
    description: "Descubre qué hay a tu alrededor",
  },
  {
    title: "Punta Cana, República Dominicana",
    description: "Una destinación de playa popular",
  },
  {
    title: "Santiago de los Caballeros, República Dominicana",
    description:
      "Por lugares emblemáticos como este: Monumento a los Heroes de la Restauracion",
  },
  {
    title: "Bogotá, Colombia",
    description: "Por su diversión nocturna",
  },
  {
    title: "Madrid, España",
    description: "Por su impresionante arquitectura",
  },
  {
    title: "Las Terrenas, República Dominicana",
    description: "Ideal para escapadas de fin de semana",
  },
  {
    title: "Madrid, España",
    description: "Por su impresionante arquitectura",
  },
  {
    title: "Las Terrenas, República Dominicana",
    description: "Ideal para escapadas de fin de semana",
  },
  {
    title: "Madrid, España",
    description: "Por su impresionante arquitectura",
  },
  {
    title: "Las Terrenas, República Dominicana",
    description: "Ideal para escapadas de fin de semana",
  },
];
const Destinations = () => {
  return (
    <div>
      <p>Destinaciones sugeridas</p>
      {suggestedDestinations.map((item, index) => (
        <div className="card">
          <FontAwesomeIcon className="card-icon" icon={faMagnifyingGlass} />
          <div className="card-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
