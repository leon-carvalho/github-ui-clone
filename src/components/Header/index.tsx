import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeName } from '../../styles/themes';

import {
  Container,
  GithubLogo,
  SearchForm,
  Toggle,
  NightIcon,
  DayIcon,
} from './styles';

type toggleThemeType = () => void;
type handleSubmitType = (event: React.FormEvent) => void;

interface IHeaderProps {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<IHeaderProps> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit: handleSubmitType = event => {
    event.preventDefault();

    navigate(`/${search.toLowerCase().trim()}`);
  };

  const toggleTheme: toggleThemeType = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
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

      <Toggle onClick={toggleTheme}>
        {themeName === 'light' ? <DayIcon /> : <NightIcon />}
      </Toggle>
    </Container>
  );
};

export default Header;
