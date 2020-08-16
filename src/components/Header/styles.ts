import styled from 'styled-components';
import { FaGithub, FaRegMoon, FaRegSun } from 'react-icons/fa';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 11px 16px;
  background-color: var(--header);
`;

export const GithubLogo = styled(FaGithub)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  fill: var(--logo);
`;

export const SearchForm = styled.form`
  width: 100%;
  padding-left: 16px;

  input {
    outline: 0;
    width: 100%;
    padding: 7px 12px;
    border-radius: 6px;
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

  width: 40px;
  height: 40px;
  margin-left: 8px;
  border-radius: 50%;
  background-color: var(--search);
  transition: 0.4s;
`;

export const NightIcon = styled(FaRegMoon)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  fill: var(--logo);
`;

export const DayIcon = styled(FaRegSun)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  fill: var(--logo);
`;
