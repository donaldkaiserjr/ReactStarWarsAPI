import React, { useState } from "react";

function StarWars() {

  const [state, setState] = useState({
    loadedCharacter: false,
    name: null,
    height: null,
    homeWorld: null,
    imageUrl: null,
    films: [],
  });

  function getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88);
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          imageUrl: data.image,
          loadedCharacter: true,
        });
      });
  }
 

  return (
    <div>
      <div className="content">
        {state.loadedCharacter && (
          <div>
            <h1 className="name">{state.name}</h1>
            <p>
              <img src={state.imageUrl} alt={state.name} className="img" />
            </p>
            <p>{state.height} m</p>
            <p className="homeWorld">Homeworld: {state.homeworld}</p>
          </div>
        )}

        <button type="button" onClick={() => getNewCharacter()} className="btn">
          Randomize Character
        </button>
      </div>
      <div
        className="bg-img"
        style={{ backgroundImage: `url(${state.imageUrl})` }}
      ></div>
    </div>
  );
}

export default StarWars;
