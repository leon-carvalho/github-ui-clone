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
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      font-weight: 600;
      line-height: 1.25;
      color: var(--gray-dark);
    }

    > h2 {
      font-size: 20px;
      font-weight: 300;
      color: var(--username);
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 100%;
    margin-top: -34px;
  }
`;

export const Row = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 20px 0;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: var(--gray);
    }

    * {
      margin-right: 5px;
    }
  }
`;

export const Column = styled.ul`
  li {
    display: flex;
    align-items: center;

    font-size: 14px;
  }

  li + li {
    margin-top: 10px;
  }

  span {
    margin-left: 5px;
    overflow: hidden;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
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
