import styled, { css } from 'styled-components';
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMapPin2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri';

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 2.4rem;

    > h1 {
      font-size: 2.6rem;
      font-weight: 600;
      line-height: 1.25;
      color: var(--gray-dark);
    }

    > h2 {
      font-size: 2rem;
      font-weight: 300;
      color: var(--username);
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 1.6rem;
    }
  }
`;

export const Avatar = styled.img`
  width: 16%;
  min-width: 8rem;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 100%;
    margin-top: -3.4rem;
  }
`;

export const Row = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 2rem 0;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 1.4rem;
      color: var(--gray);
    }

    * {
      margin-right: 0.5rem;
    }
  }
`;

export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;

    font-size: 1.4rem;
  }

  li + li {
    margin-top: 1rem;
  }

  span {
    margin-left: 0.5rem;
    overflow: hidden;
  }
`;

const iconCSS = css`
  width: 1.6rem;
  height: 1.6rem;
  fill: var(--icon);
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconCSS}
`;

export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconCSS}
`;

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCSS}
`;

export const EmailIcon = styled(RiMailLine)`
  ${iconCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconCSS}
`;
