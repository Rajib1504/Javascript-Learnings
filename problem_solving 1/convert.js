// 12 inc = 1 feet

{
  function incToFeet(inc) {
    const feet = inc / 12;
    return feet;
  }
  const shbhoHeight = incToFeet(67);
  console.log("the height of suvo is ", shbhoHeight);
}
// part - 2;

// if we want that is should show us that 6 feet 3inch in this way how we will do it?
{
  function incToFeet(inch) {
    const feet = inch / 12;
    // console.log(feet);
    const feetStr = parseInt(feet);
    const inchRemaing = inch % 12; // to get the remainder we can use this way how we used to get the even almost same way
    const result = feetStr + "ft " + inchRemaing + "inch. ";
    return result;
  }
  const rakhi = incToFeet(58);
  console.log("Height of Rakhi", rakhi);
}

{
  // counting form cm to feet
  function cmToFeet(cm) {
    const feet = cm / 30.48;
    return feet;
  }
  const Rajib = cmToFeet(182.5752);
  console.log(Rajib);
}

// part - 4;
{
  // mile to km
  function mileToKm(mile) {
    console.log(mile);
    const kms = mile * 1.609034;
    return kms;
  }
  const inMile = mileToKm(4);
  console.log("This is the calculation in 4 mile in km = ", inMile);
}
// part - 5;
{
  // km to miles
  {
    // mile to km
    function KmToMile(km) {
      console.log(km);
      const mile = km * 0.621371;
      return mile;
    }
    const inMile = KmToMile(4);
    console.log("This is the calculation in km 4 to miles = ", inMile);
  }
}
