import styled from "styled-components";
import giphy from "../Assets/giphy.gif";
import AnimateWhenVisible from "./AnimateWhenVisible";
import { useState } from "react";

const MainSection = () => {
  const [enteredInp, setEnteredInp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [flag, setFlag] = useState();
  const [format, setFormat] = useState("");
  const [nextPDate, setNextPDate] = useState("");
  const [formatStr, setFormatStr] = useState("");
  const [daysMissed, setDaysMissed] = useState(0);


  const handleOnSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    let date = enteredInp.replaceAll("-", "");

    let year = date.substring(0, 4);
    let month = date.substring(4, 6);
    let day = date.substring(6, 8);
    //YYYYMMDD
    let dateFormat1 = date;
    //ddMMyyyy
    let dateFormat2 = day + month + year;
    //MMDDYY
    let dateFormat3 = month + day + year.substring(2, 4);

    //YYMMDD
    let dateFormat4 = year.substring(2, 4) + month + day;

    if (isPalindrome(dateFormat1)) {
      setFlag(isPalindrome(dateFormat1));
      setFormat(year + "-" + month + "-" + day);
      setFormatStr("YYYY-MM-DD");
      return;
    } else if (isPalindrome(dateFormat2)) {
      setFlag(isPalindrome(dateFormat2));
      setFormat(day + "-" + month + "-" + year);
      setFormatStr("DD-MM-YYYY");
      return;
    } else if (isPalindrome(dateFormat3)) {
      setFlag(isPalindrome(dateFormat3));
      setFormat(month + "-" + day + "-" + year.substring(2, 4));
      setFormatStr("MM-DD-YY");
      return;
    } else if (isPalindrome(dateFormat4)) {
      setFlag(isPalindrome(dateFormat4));
      setFormat(year.substring(2, 4) + "-" + month + "-" + day);
      setFormatStr("YY-MM-DD");
      return;
    } else {
      setFlag(false);
      nextPalindrome();
    }
  };

  const isPalindrome = input => {
    let reversedString = input.split("").reverse().join("");
    if (reversedString === input) return true;
  };

  const nextPalindrome = () => {
    let temp = new Date(enteredInp);
    let count = 0;
    temp.setDate(temp.getDate() + 1);
    while (1) {
      count++;
      setDaysMissed(count);
      let dateString = temp.toISOString().substring(0, 10).replaceAll("-", "");
      let year = dateString.substring(0, 4);
      let month = dateString.substring(4, 6);
      let day = dateString.substring(6, 8);
      //YYYYMMDD
      let dateFormat1 = dateString;
      //ddMMyyyy
      let dateFormat2 = day + month + year;
      //MMDDYY
      let dateFormat3 = month + day + year.substring(2, 4);

      //YYMMDD
      let dateFormat4 = year.substring(2, 4) + month + day;

      if (isPalindrome(dateFormat1)) {
        setNextPDate(year + "-" + month + "-" + day);
        setFormatStr("YYYY-MM-DD");
        break;
      } else if (isPalindrome(dateFormat2)) {
        setNextPDate(day + "-" + month + "-" + year);
        setFormatStr("DD-MM-YYYY");
        break;
      } else if (isPalindrome(dateFormat3)) {
        setNextPDate(month + "-" + day + "-" + year.substring(2, 4));
        setFormatStr("MM-DD-YY");
        break;
      } else if (isPalindrome(dateFormat4)) {
        setFormatStr("YY-MM-DD");
        setNextPDate(year.substring(2, 4) + "-" + month + "-" + day);
        break;
      }
      temp.setDate(temp.getDate() + 1);
    }
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
            />
            <button type="submit"> Check</button>
          </div>
        </form>
      </FormContainer>
      <OutputContainer>
        {isLoading && <img src={giphy} alt="giphy" />}
        {flag === true && (
          <div>
            <h1>Congratulions!!</h1>
            <h2>
              Your BirthDate is a <span>Palindrome</span>
            </h2>
            <h3>in format : {format}</h3>
          </div>
        )}
        {flag === false && (
          <div>
            <h1>Sorry!! </h1>
            <div>
              <h2>
                Your BirthDate is <span>not a Palindrome</span>
              </h2>
            </div>

            <h3>
              Upcoming Palindrome : <span>{nextPDate}</span>
            </h3>
            <h3>In Format : {formatStr}</h3>
            <h3>
              You missed it by : <span>{daysMissed} </span>Days
            </h3>
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

const OutputContainer = styled.div``;
