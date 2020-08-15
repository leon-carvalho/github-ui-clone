import React from 'react';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from './styles';

const Profile: React.FC = () => {
  const TabContent: () => JSX.Element = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">31</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username="leon-carvalho"
            name="Leonardo Carvalho"
            avatarUrl="https://avatars2.githubusercontent.com/u/62032328?v=4"
            followers={23}
            following={23}
            company="Freelancer"
            location="Goiás, Brasil"
            email="leon-carvalho@profissional.com.br"
            blog="linkedin.com/in/leonardo-dev/"
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Radom repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username="leon-carvalho"
                  reponame="github-explorer"
                  description="🧭 Explore GitHub repositories issues. Built with React.js and TypeScript as a challenge of Rocketseat's bootcamp."
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={4}
                  forks={1}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random Calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
