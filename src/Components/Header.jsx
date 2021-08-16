import styled from "styled-components";
import heroImg from "../Assets/heroImg.png";

import { motion } from "framer-motion";
import {
  PageAnimation,
  fade,
  titleAnimation,
  imageAnimation,
} from "../animate";

const Header = () => {
  return (
    <Container variants={PageAnimation} initial="hidden" animate="show">
      <Title>
        <Hide>
          <motion.h1 variants={titleAnimation}>
            Is your b'day a palindrome?
          </motion.h1>
        </Hide>
        <Hide>
          <motion.h1 variants={titleAnimation}>
            <h1>Let's find out.</h1>
          </motion.h1>
        </Hide>
        <motion.p variants={fade}>
          Palindrome is a word, phrase, or sequence that reads the same
          backwards as forwards.
        </motion.p>
        <motion.button
          variants={fade}
          onClick={() =>
            window.scroll({
              top: 800,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          Let's Go
        </motion.button>
      </Title>
      <ImageContainer>
        <motion.img src={heroImg} alt="hero" variants={imageAnimation} />
      </ImageContainer>
    </Container>
  );
};

export default Header;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled(motion.header)`
  height: 100vh;
  background-color: #fff;
  padding: 5rem 5rem;
  display: flex;
`;

const Title = styled.div`
  order: 2;
  h1 {
    font-size: 4rem;
    line-height: 150%;
  }

  p {
    color: #2f2e41;
    padding-bottom: 2rem;
  }

  padding: 10rem 0rem 10rem 0rem;
  color: #ff007f;
  flex: 0.6;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  flex: 0.4;
  order: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
