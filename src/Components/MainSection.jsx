import styled from "styled-components";
import giphy from "../Assets/giphy.gif";
import AnimateWhenVisible from "./AnimateWhenVisible";
import { useState } from "react";
import { checkPalindrome } from "../utility";

const MainSection = () => {
  const [enteredInp, setEnteredInp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [flag, setFlag] = useState();
  const [nextPalindromeDate, setNextPalindromeDate] = useState("");
  const [formatDateString, setFormatDateString] = useState("");
  const [daysMissed, setDaysMissed] = useState(0);
  const [format, setFormat] = useState("");

  const handleOnSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      checkPalindrome(
        enteredInp,
        setFlag,
        setFormat,
        setDaysMissed,
        setNextPalindromeDate,
        setFormatDateString,
        setIsLoading
      );
    }, 5000);
  };

  return (
    <Container>
      <Info>
        <h2>
          Enter your
          <AnimateWhenVisible>
            <span>birthdate</span>
          </AnimateWhenVisible>
          and we
        </h2>
        <h4>
          will tell you if it's a{" "}
          <AnimateWhenVisible>
            <span className="bgr">palindrome</span>
          </AnimateWhenVisible>{" "}
          .
        </h4>
      </Info>

      <FormContainer>
        <form onSubmit={handleOnSubmit}>
          <div className="form__control">
            <input
              type="date"
              name="userInput"
              id="userInput"
              onChange={e => setEnteredInp(e.target.value)}
              required
            />
            <button type="submit"> Check</button>
          </div>
        </form>
      </FormContainer>
      <OutputContainer>
        {isLoading && <img src={giphy} alt="giphy" />}
        {flag === true && !isLoading && (
          <div className="cong">
            <div>
              <h1>Kudos !</h1>
              <h2>
                Your birthdate is a <span>palindrome</span> .
              </h2>
              <h3>
                in format : <span>{format}</span> .
              </h3>
            </div>
          </div>
        )}
        {flag === false && !isLoading && (
          <div className="oh-snap">
            <div>
              <h1>Oh Snap ! </h1>
              <div>
                <h2>
                  Your birthdate is <span>not a palindrome</span> .
                </h2>
              </div>
              <h3>
                Next palindrome date :{" "}
                <span className="next">{nextPalindromeDate}</span> , in Format :{" "}
                {formatDateString} .
              </h3>
              <h3>
                You missed it by <span className="missed">{daysMissed} </span>
                Day{daysMissed === 1 ? "" : "s"} .
              </h3>
            </div>
          </div>
        )}
      </OutputContainer>
    </Container>
  );
};

export default MainSection;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.main`
  background-color: #000;
  color: #fff;
  min-height: 120vh;
  padding: 8rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Info = styled.section`
  align-self: flex-start;
  h2 {
    font-size: 4rem;
    line-height: 120%;
    line-height: 150%;
  }

  h3 {
    font-size: 3.1rem;
    line-height: 120%;
  }

  h4 {
    font-size: 2rem;
    line-height: 120%;
  }

  span {
    color: #ff007f;
  }

  .bgr {
    font-size: 3rem;
  }
`;

const FormContainer = styled.section`
  .form__control {
    width: 40%;
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      font-size: 2rem;
    }
  }

  input {
    padding: 0.5rem;
    width: 70%;
    border: none;
    border-bottom: 1px solid #ff007f;
    background-color: transparent;
    color: #fff;

    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
      font-size: 1.3rem;
    }
  }

  button {
    width: 20%;
  }
`;

const OutputContainer = styled.div`
  width: 31.5rem;

  img {
    width: 100%;
  }

  .oh-snap,
  .cong {
    line-height: 1.6;
    h1 {
      color: #ff007f;
      font-size: 6rem;
    }

    span {
      color: #ff007f;
    }
  }

  span.missed {
    font-size: 2rem;
  }

  span.next {
    text-decoration: dotted #fff;
  }
`;
