import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import * as S from './styled';

const MainPage = () => {
  const [newPokemon, setNewPokemon] = useState('');
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const pokemons = localStorage.getItem('pokemons');

    if (pokemons) {
      setAllPokemons(JSON.parse(pokemons));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pokemons', JSON.stringify(allPokemons));
  }, [allPokemons]);

  const handleInput = (e) => setNewPokemon(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await api.get(`/${newPokemon}`);

    const data = {
      name: response.data.species.name,
    };

    setAllPokemons([...allPokemons, data]);
    setNewPokemon('');
    setLoading(false);
  };

  return (
    <S.Container>
      <h1>
        <span>POKÉMON SEARCH ENGINE</span>
      </h1>
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
      </S.Form>

      <S.List>
        {allPokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <span>{pokemon.name}</span>
            <Link to={`/pokemon/${pokemon.name}`}>Detalhes</Link>
          </li>
        ))}
      </S.List>
    </S.Container>
  );
};

export default MainPage;
