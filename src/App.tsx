import "./App.css";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { SearchItem } from "./components/SearchItem";
import Destinations from "./components/Destinations";

const searchOptions = [
  {
    title: "Dónde",
    description: "Explora destinos",
  },
  {
    title: "Fechas",
    description: "Agrega fechas",
  },
  {
    title: "Quién",
    description: "¿Cuántos?",
  },
];

function App() {
  const [itemSelected, setItemSelected] = useState("");

  const handleSelected = (selected: string) => {
    setItemSelected(selected);
  };

  return (
    <div className="container">
      <div className="search-container" style={{ width: "100%" }}>
        <div
          className={`search-bar`}
          style={{
            background: itemSelected.length
              ? "rgba(231, 231, 231, 0.523)"
              : "white",
          }}
        >
          {itemSelected && (
            <div
              className="active-search"
              style={{
                left:
                  itemSelected === searchOptions[0].title
                    ? "0%"
                    : itemSelected === searchOptions[1].title
                    ? "34%"
                    : itemSelected === searchOptions[2].title
                    ? "68%"
                    : "",
              }}
            />
          )}
          {searchOptions.map((item, index) => (
            <SearchItem
              {...item}
              hasDivider={index !== 0}
              isActive={item.title === itemSelected}
              onClick={() => handleSelected(item.title)}
            />
          ))}
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </div>

        {itemSelected && (
          <div
            className="pop-up"
            style={{
              width: itemSelected === searchOptions[0].title ? "30rem" : "100%",
            }}
          >
            {itemSelected === searchOptions[0].title && <Destinations />}
            {itemSelected === searchOptions[1].title && <div>Hola</div>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
