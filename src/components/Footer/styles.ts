import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 2.5rem 3.2rem;
`;

export const Line = styled.div`
  width: 100%;
  max-width: 1280px;
  border-top: 1px solid var(--border);
`;

export const GithubLogo = styled(FaGithub)`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  margin-top: 2.5rem;
  fill: var(--border);
`;
