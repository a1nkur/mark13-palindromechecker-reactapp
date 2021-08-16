import styled from "styled-components";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  // AiOutlineUser,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/ankur-kumar-ba3833202/">
            <span>
              <AiOutlineLinkedin />
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/ankur29mac">
            <span>
              <AiOutlineGithub />
            </span>
          </a>
        </li>
        {/* <li>
          <a href="">
            <span>
              <AiOutlineUser />
            </span>
          </a>
        </li> */}
        <li>
          <a href="https://twitter.com/ankur29mac">
            <span>
              <AiFillTwitterCircle />
            </span>
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;

/* ---------------------------- Styled Components --------------------------- */

const FooterContainer = styled.footer`
  background-color: #fff;
  color: #000;
  height: 30vh;
  padding: 1rem 0rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ul {
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: space-between;
  }

  span {
    color: #ff007f;
    font-size: 2rem;
  }
`;
