import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const getProfile = graphql`
  query {
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export const About: React.FC = () => {
  const {
    profile: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getProfile);

  return (
    <Element name="about">
      <Container id="about">
        <div className="profile-container">
          <Img className="profile" fluid={fluid} />
        </div>
        <div className="about-container">
          <h2>About Me</h2>
          <p>
            I am Christian Villamin, a web developer specializing in ReactJS and
            its environment.
          </p>
          <br />
          <ul>
            <li>I love learning new things and I learn fast.</li>
            <li>I'm flexible and adapt to environments fast</li>
            <li>I'm always on my programming game, I code clean and fast.</li>
          </ul>
          <br />
          <h2>Programming History</h2>
          <p>
            I have started programming back in 2007 when I was 11, using
            Blizzard's event-driven scripting language called JASS to make
            modifications and create custom maps for their game, Warcraft III. I
            learned it through self learning and my love for their game, and
            since then have enjoyed the art of programming to heart. With it, I
            made games such as Hero Arena(Now as MOBA), Tower Defense, Campaign
            Adventures, and many more where I played it with my local and online
            friends.
          </p>
          <br />
          <p>
            After that, I learned to program in Java to make my own Android
            mobile game using the Android Studio IDE and a library called
            libGDX. I made a 2D platform pixel-art running game. A year later, I
            decided to learn C#, Blender, and moved to Unity3D to step-up the
            game.
          </p>
          <br />
          <p>
            Web Development part... HTML CSS JS. freeCodeCamp completer... work
            this part.
          </p>
        </div>
      </Container>
    </Element>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: lightcoral;
  width: 100%;
  min-height: 100vh;

  .profile {
    width: 125px;
    height: 125px;
    border: 5px white solid;
    border-radius: 50%;
    margin-bottom: 2vh;
  }

  .about-container {
    color: gainsboro;
    margin: 12px;
    padding: 12px;
    background: black;
    box-shadow: 0 0 5px silver;

    h2 {
      font-size: 6vw;
    }

    p {
      font-size: 3vw;
    }

    ul {
      margin-left: 24px;
      font-size: 3vw;
    }
  }

  @media only screen and (min-width: 768px) {
    .about-container {
      color: gainsboro;
      width: 600px;
      margin: 12px;
      padding: 12px;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }

      ul {
        margin-left: 24px;
        font-size: 1rem;
      }
    }
  }
`;
