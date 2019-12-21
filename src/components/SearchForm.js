import React, { useState } from 'react';

export default function SearchForm() {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
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
  );
}
