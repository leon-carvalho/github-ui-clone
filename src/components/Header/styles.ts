import styled from 'styled-components';
import { FaGithub, FaRegMoon, FaRegSun } from 'react-icons/fa';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.1rem 1.6rem;
  background-color: var(--header);
`;

export const GithubLogo = styled(FaGithub)`
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;
  fill: var(--logo);
`;

export const SearchForm = styled.form`
  width: 100%;
  padding-left: 1.6rem;

  input {
    outline: 0;
    width: 100%;
    padding: 0.7rem 1.2rem;
    border-radius: 0.6rem;
    background-color: var(--search);
    transition: width 0.2s ease-out, color 0.2s ease-out;

    &:focus {
      width: 318px;
    }
  }
`;

export const Toggle = styled.button`
  display: flex;
  flex-shrink: 0;
  place-items: center;
  place-content: center;

  width: 4rem;
  height: 4rem;
  margin-left: 0.8rem;
  border-radius: 50%;
  background-color: var(--search);
  transition: 0.4s;
`;

export const NightIcon = styled(FaRegMoon)`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  fill: var(--logo);
`;

export const DayIcon = styled(FaRegSun)`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  fill: var(--logo);
`;
