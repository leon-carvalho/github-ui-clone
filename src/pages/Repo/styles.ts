import styled, { css } from 'styled-components';
import { RiStarLine, RiBookMarkLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

const iconCSS = css`
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
  color: var(--icon);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.6rem;

  > p {
    font-size: 1.6rem;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  align-items: center;

  font-size: 1.8rem;
  margin-bottom: 1.6rem;

  > a {
    color: var(--link);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &.username {
      margin-left: 0.8rem;
    }

    &.reponame {
      font-weight: 600;
    }
  }
  > span {
    padding: 0 0.5rem;
  }
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;

  margin-top: 1.6rem;

  > li {
    display: flex;
    align-items: center;

    margin-right: 0.9rem;

    > * {
      margin-right: 0.7rem;
      color: var(--gray);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;

export const LinkButton = styled.a`
  text-decoration: none;
  margin-top: 2.4rem;
  background: var(--gray-dark);
  padding: 1.2rem 10.7rem;
  border-radius: 2.4rem;
  width: max-content;
  display: flex;
  align-items: center;
  > span {
    color: var(--primary);
  }
  > svg {
    fill: var(--primary);
    margin-right: 1rem;
  }
`;

export const GithubIcon = styled(FaGithub)`
  ${iconCSS}
`;
