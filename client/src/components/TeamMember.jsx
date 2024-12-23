import styled from 'styled-components';

const MemberImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  overflow: hidden;
  background-color: #e5e5e5;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      rgba(119, 72, 0, 0.7),
      rgba(119, 72, 0, 0.7)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
    animation: matrixEffect 0.5s steps(10) infinite;
  }

  @keyframes matrixEffect {
    0% {
      background: linear-gradient(
        rgba(119, 72, 0, 0.7),
        rgba(119, 72, 0, 0.7)
      );
    }
    25% {
      background: linear-gradient(
        90deg,
        rgba(119, 72, 0, 0.9),
        rgba(119, 72, 0, 0.5)
      );
    }
    50% {
      background: linear-gradient(
        -90deg,
        rgba(119, 72, 0, 0.7),
        rgba(119, 72, 0, 0.7)
      );
    }
    75% {
      background: linear-gradient(
        180deg,
        rgba(119, 72, 0, 0.5),
        rgba(119, 72, 0, 0.9)
      );
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background-color: #774800;
    border-radius: 50%;
    transform: translate(20%, 20%);
    z-index: 2;
  }
`;

const ProfileDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20px);
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: all 0.3s ease;
  width: 200px;
  z-index: 3;
  
  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #333;
  }
`;

const StyledTeamMember = styled.div`
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    
    ${MemberImage} {
      &::before {
        opacity: 1;
      }
      
      img {
        animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
      }
    }
    
    ${ProfileDetails} {
      opacity: 1;
      transform: translate(-50%, 0);
      animation: flicker 0.3s ease-in-out infinite;
    }
  }

  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes flicker {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.95;
    }
    100% {
      opacity: 1;
    }
  }
`;

const MemberName = styled.h3`
  font-weight: bold;
  margin: 0.5rem 0;
  font-size: 1.2rem;
`;

const MemberTitle = styled.p`
  color: #774800;
  font-size: 0.9rem;
  margin: 0;
  text-transform: uppercase;
`;

const TeamMember = ({ member }) => {
  return (
    <StyledTeamMember>
      <MemberImage>
        <img src={member.image} alt={member.name} />
      </MemberImage>
      <MemberName>{member.name}</MemberName>
      <MemberTitle>{member.title}</MemberTitle>
      <ProfileDetails>
        <p><strong>Email:</strong> {member.email}</p>
        <p><strong>Phone:</strong> {member.phone}</p>
        <p>{member.description}</p>
      </ProfileDetails>
    </StyledTeamMember>
  );
};

export default TeamMember; 