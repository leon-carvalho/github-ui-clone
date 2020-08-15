import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 16px;
  border-radius: 6px;
  border: 1px solid var(--border);
`;

export const Topside = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      font-size: 14px;
      font-weight: 600;
      margin-left: 8px;
      color: var(--link);
      text-decoration: none;

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    font-size: 12px;
    color: var(--gray);
    margin: 8px 0 16px;
    letter-spacing: 0.1px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
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

      margin-right: 16px;

      > span {
        font-size: 12px;
        margin-left: 5px;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;
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
