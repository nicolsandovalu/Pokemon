import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PokemonDetails = () => {
    const parasms = useParams ();
    const navigate = useNavigate ();
    const {data, loading, error} = useFetch (`https://pokeapi.co/api/v2/pokemon/${parasms.name}`);
    console.log (data);

    return (
        <div className="container-pokemon">
           {data && (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h1>{data.name}</h1>
                            <img className="foto" src={data.sprites.front_default} alt={data.name}/>
                            <h2>Abilities</h2>
                            <ul>
                                {data.abilities.map((ability) =>
                                    <li key={ability.ability.name}>
                                        {ability.ability.name}
                                    </li>
                                )}
                            </ul>
                            <button className="btn btn-outline-secondary" type='button' onClick={()=> navigate ('/pokemon')}>Regresar</button>
                        </div>
                    </div>
                </div>
            </div>
           )}
        </div>
    )

}

export default PokemonDetails;