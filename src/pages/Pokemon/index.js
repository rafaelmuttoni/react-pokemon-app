import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

const PokemonPage = ({ match }) => {
  const [pokemon, setPokemon] = useState('');
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemon = async () => {
    const pokemonName = match.params.name;

    setLoading(true);

    const response = await api.get(`/${pokemonName}`);

    const data = {
      name: response.data.species.name,
      photoUrl: response.data.sprites.front_default,
    };

    setPokemon(data);
    setTypes(response.data.types);
    setLoading(false);
  };

  useEffect(getPokemon, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.photoUrl} alt={pokemon.name} />
          <ul>
            {types.map((poketype) => (
              <li>{poketype.type.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

PokemonPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default PokemonPage;
