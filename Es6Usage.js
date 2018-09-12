var name = 'ishaan veer dadhwal';
var age = 22;
var job = 'senior ARCHITECT';

function Hello(){
  return 'Hello';
}

// use of ES6
let html;

html = `
    <ul>
      <li>Name : ${name} </li>
      <li>Age : ${age} </li>
      <li>Job : ${job} </li>
      <li> ${2 + 2} </li>
      <li> ${Hello()} </li>
    </ul>


`;

document.body.innerHTML = html;

