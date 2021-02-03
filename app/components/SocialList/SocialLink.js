import styled from 'styled-components';

const SocialLink = styled.a`
  width: 50px;

  padding: 0.75rem;
  margin: 0 0.5rem;
  border-radius: 50%;
  line-height: 0;

  color: inherit;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export default SocialLink;
