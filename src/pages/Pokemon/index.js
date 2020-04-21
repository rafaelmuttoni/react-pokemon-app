import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaSpinner, FaArrowLeft } from 'react-icons/fa';

import * as S from './styled';
import api from '../../services/api';
import { typesList } from './content';

const PokemonPage = ({ match }) => {
  const [pokemon, setPokemon] = useState('');
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPokemon() {
      const pokemonName = match.params.name;

      setLoading(true);

      try {
        const response = await api.get(`/${pokemonName}`);

        const data = {
          name: response.data.species.name,
          photoUrl: response.data.sprites.front_default,
        };

        setPokemon(data);
        setTypes(response.data.types);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getPokemon();
  }, [match.params.name]);

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
        <>
          <S.Container>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.photoUrl} alt={pokemon.name} />
            <ul>
              {types.map(({ type }) => {
                return (
                  <li
                    key={type.name}
                    style={{ backgroundColor: `${getColor(type.name)}` }}
                  >
                    {getEmoji(type.name)} - {type.name}
                  </li>
                );
              })}
            </ul>
          </S.Container>
          <S.ReturnLink to="/">
            <FaArrowLeft color="#FFF" size={20} /> GO BACK
          </S.ReturnLink>
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
