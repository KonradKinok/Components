import React, { useState } from "react";
import scss from "./ComboBoxPage.module.scss";
import "./ComboBoxPage.module.scss";
export default function ComboBoxPage() {
  const [selectedCar, setSelectedCar] = useState<string>("");

  // Funkcja obsługi zmiany wartości w select
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCar(event.target.value);
  };
  return (
    <div className={scss["container-combobox-page"]}>
      <h1>ComboBox page</h1>
      <div className={scss["container"]}>
        <h2>1. ComboBox - regular</h2>
        <label htmlFor="cars">Choose a car:</label>
        <select name="cars" id="cars" onChange={handleSelectChange}>
          <option value="">--Select a car--</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        {/* Wyświetlenie wybranej wartości */}
        {selectedCar && (
          <div className={scss["selected-value"]}>
            <p>Selected car: {selectedCar}</p>
          </div>
        )}
      </div>
      <div className={scss["container2"]}>
        <h2>ComboBox 2</h2>
        <form id="app-cover">
          <div id="select-box">
            <input type="checkbox" id="options-view-button" />
            <div id="select-button" className={scss["brd"]}>
              <div id="selected-value">
                <span>Select a platform</span>
              </div>
              <div id="chevrons">
                <i className={scss["fa-chevron-up"]}></i>
                <i className={scss["fa-chevron-down"]}></i>
              </div>
            </div>
            <div id="options">
              <div className={scss["option"]}>
                <input
                  className={`${scss["s-c"]} ${scss["top"]}`}
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <input
                  className={`${scss["s-c"]} ${scss["bottom"]}`}
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <i className={scss["fa-codepen"]}></i>
                <span className={scss["label"]}>CodePen</span>
                <span className={scss["opt-val"]}>CodePen</span>
              </div>
              <div className={scss["option"]}>
                <input
                  className={`${scss["s-c"]} ${scss["top"]}`}
                  type="radio"
                  name="platform"
                  value="dribbble"
                />
                <input
                  className={`${scss["s-c"]} ${scss["bottom"]}`}
                  type="radio"
                  name="platform"
                  value="dribbble"
                />
                <i className={scss["fa-dribbble"]}></i>
                <span className={scss["label"]}>Dribbble</span>
                <span className={scss["opt-val"]}>Dribbble</span>
              </div>
              <div className={scss["option"]}>
                <input
                  className={`${scss["s-c"]} ${scss["top"]}`}
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <input
                  className={`${scss["s-c"]} ${scss["bottom"]}`}
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <i className={scss["fa-behance"]}></i>
                <span className={scss["label"]}>Behance</span>
                <span className={scss["opt-val"]}>Behance</span>
              </div>
              <div className={scss["option"]}>
                <input
                  className="s-c top"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <input
                  className="s-c bottom"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <i className="fab fa-hackerrank"></i>
                <span className={scss["label"]}>HackerRank</span>
                <span className={scss["opt-val"]}>HackerRank</span>
              </div>
              <div className={scss["option"]}>
                <input
                  className={`${scss["s-c"]} ${scss["top"]}`}
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <input
                  className={`${scss["s-c"]} ${scss["bottom"]}`}
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <i className={scss["fa-stack-overflow"]}></i>
                <span className={scss["label"]}>StackOverflow</span>
                <span className={scss["opt-val"]}>StackOverflow</span>
              </div>
              <div className={scss["option"]}>
                <input
                  className={`${scss["s-c"]} ${scss["top"]}`}
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <input
                  className={`${scss["s-c"]} ${scss["bottom"]}`}
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <i className={scss["fa-free-code-camp"]}></i>
                <span className={scss["label"]}>FreeCodeCamp</span>
                <span className={scss["opt-val"]}>FreeCodeCamp</span>
              </div>
              <div id="option-bg"></div>
            </div>
          </div>
        </form>
      </div>
      <div className={scss["container3"]}>
        <form id="app-cover">
          <div id="select-box">
            <input type="checkbox" id="options-view-button" />
            <div id="select-button" className="brd">
              <div id="selected-value">
                <span>Select a platform</span>
              </div>
              <div id="chevrons">
                <i className="fas fa-chevron-up"></i>
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
            <div id="options">
              <div className="option">
                <input
                  className="s-c top"
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <input
                  className="s-c bottom"
                  type="radio"
                  name="platform"
                  value="codepen"
                />
                <i className="fab fa-codepen"></i>
                <span className="label">CodePen</span>
                <span className="opt-val">CodePen</span>
              </div>
              <div className="option">
                <input
                  className="s-c top"
                  type="radio"
                  name="platform"
                  value="dribbble"
                />
                <input
                  className="s-c bottom"
                  type="radio"
                  name="platform"
                  value="dribbble"
                />
                <i className="fab fa-dribbble"></i>
                <span className="label">Dribbble</span>
                <span className="opt-val">Dribbble</span>
              </div>
              <div className="option">
                <input
                  className="s-c top"
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <input
                  className="s-c bottom"
                  type="radio"
                  name="platform"
                  value="behance"
                />
                <i className="fab fa-behance"></i>
                <span className="label">Behance</span>
                <span className="opt-val">Behance</span>
              </div>
              <div className="option">
                <input
                  className="s-c top"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <input
                  className="s-c bottom"
                  type="radio"
                  name="platform"
                  value="hackerrank"
                />
                <i className="fab fa-hackerrank"></i>
                <span className="label">HackerRank</span>
                <span className="opt-val">HackerRank</span>
              </div>
              <div className="option">
                <input
                  className="s-c top"
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <input
                  className="s-c bottom"
                  type="radio"
                  name="platform"
                  value="stackoverflow"
                />
                <i className="fab fa-stack-overflow"></i>
                <span className="label">StackOverflow</span>
                <span className="opt-val">StackOverflow</span>
              </div>
              <div className="option">
                <input
                  className="s-c top"
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <input
                  className="s-c bottom"
                  type="radio"
                  name="platform"
                  value="freecodecamp"
                />
                <i className="fab fa-free-code-camp"></i>
                <span className="label">FreeCodeCamp</span>
                <span className="opt-val">FreeCodeCamp</span>
              </div>
              <div id="option-bg"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
