//* Check if input data is a palindrome.
const isPalindrome = input => {
  let reversedString = input.split("").reverse().join("");
  if (reversedString === input) return true;
};

//* Find the next possible palindrome.
const nextPalindrome = (
  enteredInp,
  setDaysMissed,
  setNextPalindromeDate,
  setFormatDateString,
  setIsLoading
) => {
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
      setNextPalindromeDate(year + "-" + month + "-" + day);
      setFormatDateString("YYYY-MM-DD");
      break;
    } else if (isPalindrome(dateFormat2)) {
      setNextPalindromeDate(day + "-" + month + "-" + year);
      setFormatDateString("DD-MM-YYYY");
      break;
    } else if (isPalindrome(dateFormat3)) {
      setNextPalindromeDate(month + "-" + day + "-" + year.substring(2, 4));
      setFormatDateString("MM-DD-YY");
      break;
    } else if (isPalindrome(dateFormat4)) {
      setFormatDateString("YY-MM-DD");
      setNextPalindromeDate(year.substring(2, 4) + "-" + month + "-" + day);
      break;
    }
    temp.setDate(temp.getDate() + 1);
  }

  setIsLoading(false);
};

//* Check if input is palindrome in all possible formats.
export const checkPalindrome = (
  enteredInp,
  setFlag,
  setFormat,
  setDaysMissed,
  setNextPalindromeDate,
  setFormatDateString,
  setIsLoading
) => {
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
    setFormatDateString("YYYY-MM-DD");
    setIsLoading(false);

    return;
  } else if (isPalindrome(dateFormat2)) {
    setFlag(isPalindrome(dateFormat2));
    setFormat(day + "-" + month + "-" + year);
    setFormatDateString("DD-MM-YYYY");
    setIsLoading(false);

    return;
  } else if (isPalindrome(dateFormat3)) {
    setFlag(isPalindrome(dateFormat3));
    setFormat(month + "-" + day + "-" + year.substring(2, 4));
    setFormatDateString("MM-DD-YY");
    setIsLoading(false);

    return;
  } else if (isPalindrome(dateFormat4)) {
    setFlag(isPalindrome(dateFormat4));
    setFormat(year.substring(2, 4) + "-" + month + "-" + day);
    setFormatDateString("YY-MM-DD");
    setIsLoading(false);

    return;
  } else {
    setFlag(false);
    nextPalindrome(
      enteredInp,
      setDaysMissed,
      setNextPalindromeDate,
      setFormatDateString,
      setIsLoading
    );
  }
};
