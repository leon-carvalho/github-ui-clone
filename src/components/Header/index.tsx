import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, GithubLogo, SearchForm } from './styles';

type handleSubmitTypes = (event: React.FormEvent) => void;

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit: handleSubmitTypes = event => {
    event.preventDefault();

    navigate(`/${search.toLowerCase().trim()}`);
  };

  return (
    <Container>
      <GithubLogo />

      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
          placeholder="Enter Username or Repo..."
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
