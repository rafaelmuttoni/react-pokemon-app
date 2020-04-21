import React, { useState, useEffect } from 'react';
import { FaPlus, FaSpinner, FaTrash } from 'react-icons/fa';

import api from '../../services/api';
import * as S from './styled';

const MainPage = () => {
  const [newPokemon, setNewPokemon] = useState('');
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [failedSearch, setFailedSearch] = useState(false);

  useEffect(() => {
    const pokemons = localStorage.getItem('pokemons');

    if (pokemons) {
      setAllPokemons(JSON.parse(pokemons));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pokemons', JSON.stringify(allPokemons));
  }, [allPokemons]);

  const handleInput = (e) => {
    const pokemon = e.target.value;
    setNewPokemon(pokemon);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFailedSearch(false);

    const lowerCase = newPokemon.toLowerCase();

    try {
      const response = await api.get(`/${lowerCase}`);

      const data = {
        name: response.data.species.name,
        image: response.data.sprites.front_default,
      };

      setAllPokemons([...allPokemons, data]);
      setNewPokemon('');
      setLoading(false);
    } catch (err) {
      if (err) {
        setNewPokemon('');
        setLoading(false);
        setFailedSearch(true);
      }
    }
  };
  const handleRemove = async (e) => {
    e.preventDefault();
    setAllPokemons([]);
  };

  return (
    <S.Container>
      <h1>POKÉMON SEARCH ENGINE</h1>
      <S.Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeHolder="Digite o Pokemon"
          value={newPokemon}
          onChange={handleInput}
        />

        <S.SubmitButton loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={16} />
          ) : (
            <FaPlus color="#FFF" size={16} />
          )}
        </S.SubmitButton>
        <S.ClearButton onClick={handleRemove}>
          <FaTrash color="#FFF" size={16} />
        </S.ClearButton>
      </S.Form>

      {failedSearch && (
        <S.FailBanner>
          <p>Não foi possível localizar esse nome.</p>
        </S.FailBanner>
      )}

      <S.List>
        {allPokemons.map(({ name, image }) => {
          const nameCaps = name.toUpperCase();
          return (
            <S.PokeLink to={`/pokemon/${name}`}>
              <li key={name}>
                <img src={image} alt={name} />
                <span>{nameCaps}</span>
              </li>
            </S.PokeLink>
          );
        })}
      </S.List>
    </S.Container>
  );
};

export default MainPage;
