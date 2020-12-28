//var width = 100;
//console.log(width);
// The var keyword can be reassigned/redefined within a scope and updated.
//var width = 2000;
//console.log(width);

// var scoping.
// var variables are function-scoped i.e they are only available inside the function that they are created or globally scoped on the window. Example below:

function setWidth() {
    var width = 200;
    console.log(width);
}
setWidth();

//console.log(width); // doesnt work because the variable "width" is only scoped to the function setWidth(); function jail. LOL!!

var age = 100;
if (age > 40) {
    let dogYears = age * 3;
    console.log(`You are ${dogYears} dog years old`);
}

//console.log(dogYears); --> this doesnt work because let variables are block-{} scoped. They only work inside the block in which they are defined. This is also the same as const variables. Let variables cannot be redeclared in the same scope, however they can be updated.

const key = "acd_123";
let points = 50;
let winner = false;

if (points > 45) {
    console.log("it ran!");
    let winner = true;
    console.log(winner);
}

console.log(winner);


// A major difference between let and const variables is that const variables can never be updated as opposed to let variables. Example below:

points = 79; // can be updated
console.log(points);

//key = "bdf_324"; // cannot be updated
console.log(key);


// const person = {
//     name: "Abolaji",
//     age: 20,
// }

// console.log(person);

/* The below doesnt work because, const variables cannot be updated.
 *person = {
     name: "james"
 }
   However, the properties of a const variable can change. */

//    person.age = 29;
//    console.log(person);

    
    
    //    for (var i = 0; i < 10; i++) {
    //        console.log(i);
    //        setTimeout(function () {
    //             console.log(`The number is ${i}`);  // This logs 10 to the console after 1s
    //     }, 1000)          
    //    }

    //    for (let i = 0; i < 5; i++) {
    //     console.log(i);
    //     setTimeout(function () {
    //          console.log(`The number is ${i}`);  
    //  }, 1000)          
    // }

    // TEMPORAL DEAD ZONE
    
    console.log(food);  // This returns UNDEFINED because with var variables, they can be accessed as they are defined but the value of the variable cannot be accessed. You can access the fact that the variable has been created.
    var food = "Spaghetti";

    // console.log(pizza); // This returns an error --> cannot access pizza before its initialization.
    // // TEMPORAL DEAD ZONE
    // let(or const) pizza = "Deep dish";
   


    // ARROW FUNCTIONS
    const names = ["wes", "kait", "lux"];
    console.log(names);
    
    // REGULAR FUNCTIONS
    const fullNames = names.map(function(name) {
        return `${name} bos`; //explicit return (the keyword "return" is written)
    })
    console.log(fullNames);
    

    // ARROW FUNCTIONS
    const fullNames2 = names.map(name => `${name} bos`); // implicit return
    console.log(fullNames2);

    //In case there are no arguments, pass in an empty parenthesis as shown below:
    const fullNames3 = names.map(() => `cool bos`); // implicit return
    console.log(fullNames3);

    // Arrow functions are always anonymous functions i.e they cannot be named unlike regular functions which are named. However, they can be put in a variable.
    
    // Regular Functions (named)
    // function sayMyName(name) {
    //     alert(`Hello ${name}`);       
    // }

    // sayMyName("Abdurrahman");

    // Arrow Functions put in a variable.
    // const sayMyName = name => alert(`Hello ${name}`); 

    // sayMyName("Reece James!");

    // MORE EXAMPLES.

    const race = "100m hurdles";
    const winners = ["Marcus Rashford", "Anthony Martial", "Mason Greenwood"];

    // Using Regular functions
    // const win = winners.map(function (winner, i) {
    //     return ({
    //         name: winner,
    //         race: race,
    //         position: i + 1
    //     })
    // })

   
    

    // Using Arrow Functions
    const win = winners.map((winner, i) => ({name: winner, race, position: i+1}))
    //console.table(win);
    console.log(win);
    
    

    const ages = [28, 23, 65, 39, 47, 87, 120, 34, 26, 19, 10, 2, 45, 32, 87];

    // Using Regular Functions
    // const old = ages.filter(function (age) {
    //     if (age >= 30) {
    //         return age;
    //     }
    // })

    // console.log(old);

    // Arrow functions
    const old = ages.filter(age =>  age >= 30);
    console.log(old);

    
    // ARROW FUNCTIONS AND THIS KEYWORD
    // In Arrow functions, the "this" keyword doesn't get rebound.


    const box = document.querySelector(".box");
    box.addEventListener("click", () => {
        //console.log(this); // when using arrow functions, the value of "this" is not rebound inside of the function, rather it is inherited from the parent scope which is the window in this case. Therefore, a regular function should be used as shown below.  
    })

    box.addEventListener("click", function () {
        let first = "opening";
        let second = "open";

        if (this.classList.contains(first)) {
            [first, second] = [second, first];
        }
        this.classList.toggle(first); // using regular functions, this works perfectly as the "this" keyword now points to the box.
        // setTimeout(function () {
        //     console.log(this.classList);
        //     this.classList.toggle("open")// This doesn't work because the function is not bound to anything, hence its bound to the window. This can be corrected by using arrow functions as  the value of "this" is now inherited from the parent
        // }, 1000)

        
        setTimeout(() => {
            this.classList.toggle(second)
        }, 1000)
    })
    
    
    
    
// DEFAULT ARGUMENTS
function calculateBill(total, tax = 0.13, tip = 0.15) {
    // if (tax === undefined) {
    //     tax = 0.13;
    // }

    // if (tip === undefined) {
    //     tip = 0.15;
    // }
    
    // OR
    // tax = tax || 0.13;
    // tip = tip || 0.15;
    return total + (total * tax) + (total * tip);
}    

const totalBill = calculateBill(100, 0.13 , undefined);
console.log(totalBill);


// WHEN NOT TO USE ARROW FUNCTIONS.


// 1. When you really need "this"
const button = document.querySelector("#pushy");
button.addEventListener("click", function() {
    this.classList.toggle("on")
})

// 2. When you need a method to bind to an object

// const person = {
//     points: 23,
//     score: function () {
//     console.log(this);
//         this.points++; 
//     }
// };

// person.score();

// 3. When you need to add a prototype method
      
class Car {
    constructor(make, colour) {
        this.make = make;
        this.colour = colour;
    }
}

const beemer = new Car('bmw', 'blue');
const subie = new Car('Subaru', 'white');

Car.prototype.summarize = function() {
    return `This car is a ${this.make} of the colour ${this.colour}`
}

// 4. When you need arguments object
const orderChildren = function() {
    const children = Array.from(arguments); // argument is keyword  that's gonna give us an array or array-ish value of everything that was passed in.
    return children.map((child, i) => {
        return `${child} was child #${i + 1}`;
    })

    console.log(arguments);    
}



      

// CREATING HTML FRAGMENTS WITH TEMPLATE LITERALS

const somebody = {
    name: "Abolaji",
    job: "Front-End Developer",
    city: "Lagos",
    bio: "A self-taught, passionate developer with a knack for problem-solving"
}

const markup = `
    <div class="person">
    <h2>${somebody.name}</h2>
    <span class="job">${somebody.job}</span>

    <p class="location">${somebody.city}</p>
    <p class="bio">${somebody.bio}</p>
    </div>
`;

//document.body.innerHTML = markup;

// Template strings can be nested inside of each other

const dogs = [
    {name: "Snickers", age: 2},
    {name: "Sunny", age: 8},
    {name: "Hugo", age: 1}
];

// const listedItems = `
//     <ul class = "dogs">
//         <li>${dogs[0].name} is ${dogs[0].age * 7} dogYears old</li>
//         <li>${dogs[1].name} is ${dogs[1].age * 7} dogYears old</li>
//         <li>${dogs[2].name} is ${dogs[2].age * 7} dogYears old</li>
//     </ul>
// `;


const listedItems = `
    <ul class = "dogs">
        ${dogs.map(dog => `
            <li>
                ${dog.name} 
                is 
                ${dog.age * 7}
            </li>`).join('')}
    </ul>
`;

// join(), helps to remove the commas when loaded in the browser
//document.body.innerHTML = listedItems;

//console.log(listedItems);


// Template strings when you require an "if" statement
const song = {
    name: "Dying to live",
    artist: "Tupac",
    featuring:"Biggie smalls"
};

const album = `
    <div class = "song">
        <p>
        ${song.name} - ${song.artist}
        ${song.featuring ? `(Featuring ${song.featuring})` : " "} 
    </p>
    </div>
`;

//document.body.innerHTML = album;
// console.log(album);



// Using Render Keyword
const beer = {
    name: "Belgian wit",
    brewery: "Steam Whistle Brewery",
    keywords: ["pale", "cloudy", "spiced", "crisp"]
};


function renderKeywords(keywords) {
    return `
        <ul>
        ${keywords.map(keyword => `<li>${keyword}</li>`).join("")}
        </ul>
    `
}

const Brew = `
    <div class = "beer">
        <h2>${beer.name}</h2>
        <p class = "brewery">${beer.brewery}</p>
        ${renderKeywords(beer.keywords)}
    </div>
`;

//document.body.innerHTML = Brew;


// TAGGED TEMPLATES

function highlight(strings, ...values) {
    //return "cool";
    //debugger; // stops the function from running.
    let str = "";
    strings.forEach((string, i) => {
        // str += string + (values[i] || "");
        str += `${string} <span contenteditable class = light>${values[i] || ""}</span>`;
    })
    return str;
}

// ...values is a rest operator that takes in the rest of the parameters to be passed in aside from strings. Very important especially, when those parameters are plenty or unknown.
// strings array is always going to be one longer than the actual values

const name = "Snickers"
const Age = 100
const sentence = highlight `His dog's name is ${name} and he is ${age*7} years old!`;
// the function highlight is tagged to the sentence, hence whatever is returned in that function is what gets logged onto the console when sentence is logged onto the console.

console.log(sentence); // This logs "cool" on the console.

//document.body.innerHTML = sentence


const dict = {
    HTML: 'Hyper Text Markup Language',
    CSS: 'Cascading Styles Sheets',
    JS: 'JavaScript'
}

function addAbbreviation(strings, ...values) {
    const abbreviated = values.map(value => {
        if (dict[value]) {
            return `<abbr title = "${dict[value]}">${value}</abbr>`
        }
        return value;
    });
    console.log(abbreviated);
    // let str = "";
    // strings.forEach((string, i) => {
    //     // str += string + (values[i] || "");
    //     str += `${string}${abbreviated[i] || ""}`;
    // })
    // return str;
     return strings.reduce((sentence, string, i) => {
         return `${sentence}${string}${abbreviated[i] || ''}`;
     } ,'')
}
const first = 'Abdurrahman'
const second = 'Abolaji'
const information = addAbbreviation`Hello!, My name is ${first} ${second} and I love to code ${'HTML'} ${'CSS'} and ${'JS'}`



const Info = document.querySelector('.info');
console.log(Info);

const paragraph = document.createElement('p');
paragraph.innerHTML = information;
Info.appendChild(paragraph);



// SANITIZING USER DATA
// const firstName = "Abdurrahman"
// const aboutMe = `I love to do evil  <img src="hotel-2.jpg" onload="alert("you got hacked!");" />`;

// const html = `
//     <h3>${firstName}</h3>
//     <p>${aboutMe}</p>
// `;

// const bio = document.querySelector(".bio");
// bio.innerHTML = html;


// NEW STRING METHODS

const course = 'RFB2';
const flightNumber = "20-AC2020-jz";
const accountNumber = '0982342RT1001';


const make = 'BMW';
const model = 'x5';
const color = 'Emerald Green';


// .startsWith() Case-Sensitive
console.log(course.startsWith('RFB'));
console.log(flightNumber.startsWith('C', 4)); // startsWith also allows for the a certain number of characters to be skipped. In the above, it checks if course starts with 'B' after skipping four characters to which it returns true.

// .endsWith()  Case-Sensitive
console.log(flightNumber.endsWith('jz')); // true.
console.log(accountNumber.endsWith('RT', 9)); // true. // This code takes the first 9 characters while ignoring the remaining characters.


// .includes() Case-Sensitive
console.log(accountNumber.includes('09')); // true
    

// .repeat() => allows us to take a string and repeat it a number of times.
console.log('JS-Park '.repeat(5));
// can also be used for a nice left-pad function

function leftPad(string, length = 25) {
    return `->${' '.repeat(length - string.length)} ${string}`;
}

console.log(leftPad(make));
console.log(leftPad(model ));
console.log(leftPad(color));


// DESTRUCTURING OBJECTS
// Destructuring is a javaScript expression that allows us to extract data from arrays, ojects, map and sets into their own variables.
// objects - properties
// arrays - items

const person = {
    firstName: 'Abdurrahman',
    lastName: 'Abolaji',
    country: 'Nigeria',
    city: 'Lagos',
    twitter: '@Abdurrahman_X'
}

// By default
// const first = person.first;                  
// const last = person.last;

// By Destructuring
const { firstName, lastName, city } = person;

//console.log(city); => // Lagos.

// Nested Objects
const person1 = {
    firstName: 'Abdurrahman',
    lastName: 'Abolaji',
    links: {
        social: {
            twitter: 'https://twitter.com/Abdurrahman_X',
            facebook: 'https://facebook.com/Abdurrahman-Abolaji'
        },
        web: {
        blog:"https://Abolaji.com"
        },
    twitter: '@Abdurrahman_X'
    }
};
 
// By default
// const twitter = person1.links.social.twitter;
// const facebook = person1.links.social.facebook;
// console.log(twitter, facebook);

// By Destructuring
const { twitter, facebook } = person1.links.social
// You can also rename object properties as you destructure them.
const { twitter:tweet, facebook:fb } = person1.links.social;
console.log(tweet); // 'https://twitter.com/Abdurrahman_X'


// Setting Default
const settings = {
    width: 300,
    colour: 'Black'
} // we also want to take in height and fontsize

// By Destructuring and setting default values for the undefined properties

//const { width = 100, height=100, colour='Blue', fontsize=25} = settings;
//console.log(width); // 300
//console.log(height); // 100
// console.log(colour); // Black
// console.log(fontsize); // 25

// Object Destructuring with variable renaming & default values.

const { w:width = 400, h: height = 500 } = { w: 800}
console.log(width); // 800
console.log(height); //500


// DESTRUCTURING ARRAYS
const details = ['Abdurrahman', 106, 'bolaji.com'];

// By Normal Method
console.log(details[1]); // 106
// BY Destructuring

const [ sName, id, website ] = details;
console.log(sName, id, website);

// Another Example
const data = "Basketball,Sports,90210,25";
console.log(data.split(',')); // This produces an array of the four items in the string and can now be destructured as shown below:


const [ itemName, category, sku, inventory ] = data.split(',');
console.log(itemName, category, sku, inventory);


// Destruction using the 'rest' operator
const team = ['Maguire', 'De Gea', 'Greenwood', 'Pogba', 'Fernandes'];
//const [ captain, assistant, players] = team;
//console.log(captain, assistant, players); // Maguire, De Gea, Greenwood

const [ captain, assistant, ...players] = team;
console.log(captain, assistant, players);


// DESTRUCTURING IN ACTION
let inRing = 'Hulk Hogan';
let onSide = 'Undertaker';

// We want to switch inRing and onSide.
// var temp = inRing;
// inRing = onSide;
// onSide = temp;

// OR
[ inRing, onSide] = [onSide, inRing];


// Destructuring Functions

function convertCurrency(amount) {
    const converted = {
        USD: amount * 0.76,
        GBP: amount * 0.53,
        AUD: amount * 1.01,
        MEX: amount * 13.30
    }
    return converted;
}

const Money = convertCurrency(125);
console.log(Money);

// By Destructuring
const { GBP, AUD, USD, MEX } = convertCurrency(100);
console.log(GBP, MEX, AUD, USD);

// Destructuring with named deafaults
function tipCalc({ total = 100, tip = 0.15, tax = 0.13 }) {
    return total + (tip * total) + (tax * total);
}

//const biill = tipCalc({ tip: 0.20, total: 200 }); // 266
const biill = tipCalc({}); // 128
console.log(biill);


// ITERABLES & LOOPING
// FOR OF LOOP

const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

const cut = cuts.map(function (cut, i) {
    return cut[i];
})

console.log(cut);


















