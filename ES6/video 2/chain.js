// Chain in js: chain is to target the element from a bigger amount of nested position.
// note: go slowly one by one think one by one

const personProfile = {
  name: "John Doe",
  age: 28,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "travelling", "coding"],
  education: [
    {
      degree: "Bachelor's in Computer Science",
      institution: "XYZ University",
      year: 2018,
    },
    {
      degree: "Master's in Software Engineering",
      institution: "ABC University",
      year: 2021,
    },
  ],
  workExperience: [
    {
      position: "Junior Developer",
      company: "Tech Solutions",
      duration: "2018-2020",
      skill: {
        programmingLanguages: ["JavaScript", "Python", "C++"],
        frameworks: ["React", "Django"],
      },
    },
    {
      position: "Senior Developer",
      company: "Innovative Labs",
      duration: "2020-Present",
      skills: {
        programmingLanguages: ["JavaScript", "TypeScript"],
        frameworks: ["React", "Node.js"],
      },
    },
  ],
};

// find the value of skills: check is he know the python?
// think like this one by one :
// console.log(personProfile);
// console.log(personProfile.workExperience);
// console.log(personProfile.workExperience[0]);
// console.log(personProfile.workExperience[0].skills);
// console.log(personProfile.workExperience[0].skills.programmingLanguages);
console.log(personProfile.workExperience[0].skill.programmingLanguages[1]);

// asuming some console.error concept:
const studentProfile = {
  name: "John Doe",
  age: 28,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "travelling", "coding"],
  education: [
    {
      degree: "Bachelor's in Computer Science",
      institution: "XYZ University",
      year: 2018,
    },
    {
      degree: "Master's in Software Engineering",
      institution: "ABC University",
      year: 2021,
    },
  ],
  workExperience: [
    {
      position: "Junior Developer",
      company: "Tech Solutions",
      duration: "2018-2020",
      skill: {
        programmingLanguages: ["JavaScript", "Python", "C++"],
        frameworks: ["React", "Django"],
      },
    },
  ],
};

// console.log(studentProfile.workExperience[0].skills.programmingLanguages[1]);

// then you can do like this also

// console.log(personProfile.workExperience[0].skills.programmingLanguages[1]);

// //Optional Chain:its saying that if you find the vlue of the property then go for next property if you didn't get the value then don't move.

// console.log(personProfile.workExperience[0].skills.programmingLanguages[1]);
//                                                    ^

// TypeError: Cannot read properties of undefined (reading 'programmingLanguages')
//   this types of semiler error you will get often what its saying"Cannot read properties of undefined" next" (reading 'programmingLanguages')"

//   its telling that can't read the property reading undefined mean the value is not defined. so how can i chenck and not get the error:

// optional chaining: ?
console.log(personProfile.workExperience[0].skills?.programmingLanguages[1]);
// result: undefined; // not error so we understand that this value is not defined
