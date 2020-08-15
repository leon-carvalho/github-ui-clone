import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.header`
  display: flex;
  align-items: center;

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
