import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.6rem;
  border-radius: 0.6rem;
  border: 1px solid var(--border);
`;

export const Topside = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      font-size: 1.4rem;
      font-weight: 600;
      margin-left: 0.8rem;
      color: var(--link);
      text-decoration: none;

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    font-size: 1.2rem;
    color: var(--gray);
    margin: 0.8rem 0 1.6rem;
    letter-spacing: 0.1px;
  }
`;

const iconCSS = css`
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
  fill: var(--icon);
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const Botside = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;

      margin-right: 1.6rem;

      > span {
        font-size: 1.2rem;
        margin-left: 0.5rem;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
    border-radius: 50%;

    &.other {
      background: var(--other-language);
    }

    &.javascript {
      background: var(--javascript);
    }

    &.typescript {
      background: var(--typescript);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
