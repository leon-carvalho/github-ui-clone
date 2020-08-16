import styled from 'styled-components';
import { RiBookMarkLine } from 'react-icons/ri';

export const Container = styled.div`
  --verticalPadding: 2.4rem;
  --horizontalPadding: 1.6rem;

  overflow-x: hidden;
  padding: var(--verticalPadding) var(--horizontalPadding);
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: var(--verticalPadding);

  > h2 {
    font-size: 1.6rem;
    font-weight: normal;
  }

  > div {
    display: grid;
    grid-gap: 1.6rem;
    grid-template-columns: 1fr;

    margin-top: 0.8rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHeading = styled.span`
  font-size: 1.6rem;
  margin: 3.6rem 0 0.9rem;
  display: inline-flex;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
`;

export const Tab = styled.div`
  background-color: var(--primary);

  .content {
    display: flex;
    align-items: center;

    padding: 1.4rem 1.6rem;
    width: min-content;
    border-bottom: 2px solid var(--orange);

    .label {
      padding: 0 0.7rem;
      font-size: 1.4rem;
      font-weight: 600;
    }

    .number {
      font-size: 1.2rem;
      padding: 0.2rem 0.6rem;
      border-radius: 2.4rem;
      background-color: var(--ticker);
    }
  }

  .line {
    display: flex;

    width: 100vw;
    margin-left: -50vw;
    border-bottom: 1px solid var(--border);
  }

  &.mobile {
    margin-top: var(--verticalPadding);

    .content {
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      display: none;
    }
  }

  &.desktop {
    display: none;

    @media (min-width: 768px) {
      display: unset;

      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;
      }

      .offset {
        width: 25%;
        margin-right: var(--horizontalPadding);
      }
    }
  }
`;
