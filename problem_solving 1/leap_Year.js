{
  /**
   * year will be a leap year if the year is divisible by 4
   */
  //   part -1
  // {this is so simple but this is not a right answer this is a wrong answer }
  function leapYear(year) {
    if (year % 4 === 0) {
      console.log(" ture " + year + " is leap year");
    } else {
      console.log("flase " + year + " this is not a leap year");
    }
  }
  //   const leapCheck = leapYear(2025);
  const leapCheck = leapYear(2028);
}
/**
 * 1st condetion :those year that is not divisible by 100, if the year is divisible by 4: then it will be a leap year
 * 2nd condetion :if the year is divisible by 400 then its a leap year
 * else its not a leap year.
 */
{
  function isLeapyear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
      return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  const givenYr = isLeapyear(2100);
  const givenYr1 = isLeapyear(2400);
  const givenYr2 = isLeapyear(1900);
  const givenYr3 = isLeapyear(2052);
  console.log(givenYr, givenYr1, givenYr2, givenYr3);
}
