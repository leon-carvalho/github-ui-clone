import React from 'react';

import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
} from './styles';

interface IProfileDataProps {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
}

const ProfileData: React.FC<IProfileDataProps> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}) => {
  return (
    <Container>
      <Flex>
        <figure>
          <Avatar src={avatarUrl} alt={username} />
        </figure>

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>

      <Row>
        <li>
          <PeopleIcon />
          <strong>{followers}</strong>
          <span>followers</span>
          <span>.</span>
        </li>

        <li>
          <PeopleIcon />
          <strong>{following}</strong>
          <span>following</span>
        </li>
      </Row>

      <Column>
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}

        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}

        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}

        {blog && (
          <li>
            <BlogIcon />
            <span>{blog}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
