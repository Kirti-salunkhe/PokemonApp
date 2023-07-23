import React from "react";
const Card = ({ pokemon, loading, infoPokemon }) => {
    // console.log(pokemon);
    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (
                            <>
                                <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                                    <h2>{item.id}</h2>
                                    <img style={{ height: "30px", margin: "0rem" }} src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${item.id}.svg`} alt="" />
                                    <h2>{item.name}</h2>
                                </div>
                            </>
                        )
                    })
            }

        </>
    )
}
export default Card;