import React from "react";
import styled, { css } from "styled-components";
import Nav from "../components/nav";
import HomeBg from "../assets/homeBg.png";
import Search from "../components/search";
import { benefits, getInspired } from "../data/text";
import LocationCard from "../components/locationCard";

const Banner = styled.main``;

const Section = styled.section`
  &.main {
    background-image: linear-gradient(
        180deg,
        rgba(53, 66, 103, 0.0001) 0%,
        #151824 95.04%
      ),
      url(${HomeBg});
    background-size: cover;
    background-position: top;
  }

  &.top {
    width: 100%;
    height: 100vh;

    & > div {
      @media (max-width: 360px) {
        position: static;
      }

      position: relative;
      top: 15%;
    }
  }

  &.general {
    padding: 0em 1em;

    @media (min-width: 768px) {
      padding: 0 2em;
    }

    @media (min-width: 1024px) {
      padding: 0 2.5em;
    }

    @media (min-width: 1440px) {
      padding: 0 7em;
    }
  }
`;

const Intro = styled.h1`
  font-weight: 500;
  color: white;
  font-size: 40px;
`;

const Text = styled.p`
  color: ${(props) => (props.black ? "black" : "white")};
  font-weight: 400;
  line-height: 1.5;
`;

const Container = styled.div`
  &.intro {
    white-space: break-spaces;
    margin-bottom: 4em;

    @media (min-width: 768px) {
      width: 80%;
      margin-left: 0;
      margin-right: 0;
    }

    @media (min-width: 1024px) {
      width: 60%;
    }

    @media (min-width: 1440px) {
      width: 40%;
    }
  }

  &.search {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    @media (min-width: 1024px) {
      width: 80%;
      display: flex;
      justify-content: space-between;
    }

    @media (min-width: 1440px) {
      width: 60%;
      display: flex;
      justify-content: space-between;
    }
  }

  &.benefits-container {
    padding: 1em;

    @media (min-width: 768px) {
      padding: 2em;
    }

    @media (min-width: 1024px) {
      position: relative;
      top: -10em;
      width: 80%;
      margin: 0 auto;
      background: white;
      padding: 4em;
    }
  }

  &.benefits {
    margin-top: 2em;

    @media (min-width: 1024px) {
      display: flex;
    }

    & > div {
      margin: 2em 0;

      @media (min-width: 768px) {
        margin-bottom: 2em;
      }

      @media (min-width: 1024px) {
        margin-right: 1em;
      }
    }

    @media (min-width: 1440px) {
      margin-top: 3em;
    }
  }

  &.get-inspired {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.locations {
    margin-top: 1em;

    @media (min-width: 768px) {
      margin-top: 2em;
    }
  }
`;

const Header = styled.h2`
  color: #102746;
  margin: 0;
  font-weight: 500;
`;

const Button = styled.button`
  background: #1b7dff;
  color: white;
  padding: 1em 5em;
  border: none;
  outline: none;
  font-weight: 500;
  display: block;
  width: max-content;
  margin: 0 auto;
  border-radius: 32px;

  @media (min-width: 768px) {
    border-radius: 0;
    padding: 1em 2em;
    margin: 0;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const Heading = styled.p`
  font-weight: 500;
  color: black;
  font-size: 18px;

  @media (min-width: 1024px) {
    min-height: 49.6px;
  }
`;

const Span = styled.span`
  display: block;
  margin-top: 2em;
  color: #006dfe;
  cursor: pointer;

  ${(props) =>
    props.getInspired &&
    css`
      display: none;

      @media (min-width: 768px) {
        display: block;
        margin: 0;
      }
    `}
`;

const Locations = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    width: auto;
    margin-right: -0.5em;
  }
`;

const Border = styled.div`
  width: 75%;
  border-bottom: 2px solid #006dfe;
  padding-top: 0.3em;
`;

function Home() {
  return (
    <Banner>
      <Section className="main">
        <Nav />
        <Section className="top general">
          <Container>
            <Container className="intro">
              <Intro>Discover Amazing places in Japan</Intro>
              <Text>
                Jump off balcony, onto stranger's head. Chase ball of string
                hide when guests come over. Being gorgeous with belly side up i
                could pee on this if i had the energy but under the bed, for
                attack the child, open the door.{" "}
              </Text>
            </Container>
            <Container className="search">
              <Search placeholder="What would you like to do?" />
              <Search placeholder="Where would you like to go?" />
              <Button>SEARCH</Button>
            </Container>{" "}
          </Container>
        </Section>{" "}
      </Section>

      <Section className="bottom">
        <Container className="benefits-container">
          <Header>Benefits of Odigo</Header>
          <Container className="benefits">
            {benefits.map((data) => (
              <Container>
                <Image src={data.image} />
                <Heading>{data.heading}</Heading>
                <Text black>{data.text}</Text>
                <Span>
                  LEARN MORE{" "}
                  <svg
                    width="33"
                    style={{ marginLeft: "1em" }}
                    height="8"
                    viewBox="0 0 33 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7706 3H0V5H24.7706V8L33 4L24.7706 0V3Z"
                      fill="#006DFE"
                    />
                  </svg>
                </Span>
              </Container>
            ))}
          </Container>
        </Container>
      </Section>

      <Section className="general">
        <Container className="get-inspired">
          <Container>
            <Header>Get inspired for your next trip</Header>
            <Border></Border>
          </Container>

          <Span getInspired>
            VIEW ALL{" "}
            <svg
              width="33"
              style={{ marginLeft: "1em" }}
              height="8"
              viewBox="0 0 33 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.7706 3H0V5H24.7706V8L33 4L24.7706 0V3Z"
                fill="#006DFE"
              />
            </svg>
          </Span>
        </Container>
        <Container className="locations">
          <Locations>
            {getInspired.slice(0, 2).map((data, index) => (
              <LocationCard data={data} key={index} />
            ))}
          </Locations>
          <Locations>
            {getInspired.slice(2).map((data, index) => (
              <LocationCard data={data} key={index} />
            ))}
          </Locations>
        </Container>
      </Section>
    </Banner>
  );
}

export default Home;
