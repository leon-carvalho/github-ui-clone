import styled from 'styled-components';
import { RiBookMarkLine } from 'react-icons/ri';

export const Container = styled.div`
  --verticalPadding: 24px;
  --horizontalPadding: 16px;

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
    font-size: 16px;
    font-weight: normal;
  }

  > div {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;

    margin-top: 8px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Tab = styled.div`
  background-color: var(--primary);

  .content {
    display: flex;
    align-items: center;

    padding: 14px 16px;
    width: min-content;
    border-bottom: 2px solid var(--orange);

    .label {
      padding: 0 7px;
      font-size: 14px;
      font-weight: 600;
    }

    .number {
      font-size: 12px;
      padding: 2px 6px;
      border-radius: 24px;
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
