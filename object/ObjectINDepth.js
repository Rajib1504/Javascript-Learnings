const student = {
      name:'Rajib sardar',
      id:121,
      address: 'west bengal',
      isSingel: true,  
      friends:['Apu','Rohan','salman','Mukul'],//inside object an arra cna be there also.
      movies: [{name:'no-1',year:2015,},{name:"king khan",year: 2018}],//inside obj you can create an array and then inside array you can crat objects
      act: function(){
             console.log('acting like sarukh khan');
      },
      car:{
            brand:'tesla',
            price:50000000,
            made:2034,
            manufacturer:{
                  name:'tesla',
                  ceo:"Elon Mask"

            }//nested object can be also done inside th object

      }//inside object also object can be come.
}

// console.log(student);
// console.log(student.friends);
console.log(student.car);
console.log(student.act());// you can call the function here also in this way.
console.log(student.act);

// Disclamir: you can't use loop directly on those array and object which is in inside the object keys or in the nested condetion, but you can use those in another way please google it.

// 2.Object has 2 quality its can store the value and also can act some function.-8