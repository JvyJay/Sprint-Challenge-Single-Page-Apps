import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
// import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/', {
        params: {}
      })
      .then(res => {
        // const characters = res.data.results;
        const characters = res.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(characters);
        setChar(characters);
      });
  }, [query]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <section className='character-list'>
      <section className='search-form'>
        <form>
          <input
            type='text'
            name='name'
            tabIndex='0'
            placeholder='search by name'
            autoComplete='off'
            onChange={handleChange}
            value={query}
          />
        </form>
      </section>
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {char.map(data => {
        return (
          <CharacterCard
            key={data.id}
            name={data.name}
            status={data.status}
            species={data.species}
          />
        );
      })}
    </section>
  );
}
