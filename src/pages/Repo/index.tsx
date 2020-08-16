import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Loader from '../../components/Loader';

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

import { IAPIRepo } from '../../@types';

interface IRepoData {
  repo?: IAPIRepo;
  error?: string;
}

const Repo: React.FC = () => {
  const { username, reponame } = useParams();
  const [data, setData] = useState<IRepoData>();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${reponame}`).then(
      async response => {
        setData(
          response.status === 404
            ? { error: 'Repository not found!' }
            : { repo: await response.json() },
        );
      },
    );
  }, [reponame, username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.repo) {
    return <Loader />;
  }

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className="username" to={`/${username}`}>
          {username}
        </Link>

        <span>/</span>

        <Link className="reponame" to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </Breadcrumb>

      <p>{data.repo.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{data.repo.stargazers_count}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{data.repo.forks}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={data.repo.html_url}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
