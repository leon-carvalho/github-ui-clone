import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  overflow: hidden;
  border-radius: 0.6rem;
  padding: 1.6rem 2rem 0 1rem;

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
    font-size: 1.1rem;
    margin-left: 0.7rem;
    margin-top: -2.5rem;
    padding-bottom: 1.6rem;
    color: var(--link);

    align-self: flex-start;
  }
`;
