import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import * as S from './styled';
import api from '../../services/api';
import { typesList } from './content';

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

  const getEmoji = (name) => {
    const filtering = typesList.filter((el) => {
      return name === el.name;
    });
    return filtering[0].emoji;
  };

  const getColor = (name) => {
    const filtering = typesList.filter((el) => {
      return name === el.name;
    });
    return filtering[0].color;
  };

  return (
    <>
      {loading ? (
        <S.Loading>
          <FaSpinner color="#FFF" size={32} />
        </S.Loading>
      ) : (
        <S.Container>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.photoUrl} alt={pokemon.name} />
          <ul>
            {types.map(({ type }) => {
              return (
                <li style={{ backgroundColor: `${getColor(type.name)}` }}>
                  {getEmoji(type.name)} - {type.name}
                </li>
              );
            })}
          </ul>
        </S.Container>
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
