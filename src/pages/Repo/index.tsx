import React from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className="username" to="/leon-carvalho">
          leon-carvalho
        </Link>

        <span>/</span>

        <Link className="reponame" to="/leon-carvalho/github-explorer">
          github-explorer
        </Link>
      </Breadcrumb>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam aut
        quo ab doloremque mollitia expedita iusto consequatur dolores vel
        tempora esse, necessitatibus aliquam vitae, sequi saepe accusantium odit
        earum rerum!
      </p>

      <Stats>
        <li>
          <StarIcon />
          <strong>8</strong>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <strong>0</strong>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href="https://github.com/leon-carvalho/github-explorer">
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
