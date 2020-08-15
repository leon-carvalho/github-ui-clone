import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  overflow: hidden;
  border-radius: 6px;
  padding: 16px 20px 0 10px;

  .wrapper {
    .scale-0 {
      fill: var(--calendar-scale-0);
    }

    .scale-1 {
      fill: var(--calendar-scale-1);
    }

    .scale-2 {
      fill: var(--calendar-scale-2);
    }

    .scale-3 {
      fill: var(--calendar-scale-3);
    }

    .scale-4 {
      fill: var(--calendar-scale-4);
    }

    width: 893px;
  }

  span {
    font-size: 11px;
    margin-left: 7px;
    margin-top: -25px;
    color: var(--link);
    padding-bottom: 16px;

    align-self: flex-start;
  }
`;
