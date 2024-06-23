let randomCareers = Math.floor(Math.random() * mockCareers.length);
let randomTraits = Math.floor(Math.random() * mockTraits.length);
let randomAspirations = Math.floor(Math.random() * mockAspirations.length);

let randomHairColor = Math.floor(Math.random() * mockHairColor.length);
let randomEyesColor = Math.floor(Math.random() * mockEyesColor.length);
let randomAge = Math.floor(Math.random() * mockAge.length);
let randomStyle = Math.floor(Math.random() * mockStyle.length);

let randomCareer = mockCareers[randomCareers];
let randomTrait = mockTraits[randomTraits];
let randomAspiration = mockAspirations[randomAspirations];

let randomHair = mockHairColor[randomHairColor];
let randomEyes = mockEyesColor[randomEyesColor];
let randomAgeRange = mockAge[randomAge];
let randomStyleType = mockStyle[randomStyle];

function setRandomCareer() {
    document.getElementById("careers").innerHTML = randomCareer;
}

function setRandomTrait() {
    document.getElementById("traits").innerHTML = randomTrait;
}

function setRandomAspiration() {
    document.getElementById("aspirations").innerHTML = randomAspiration;
}

function setRandomHair() {
    document.getElementById("hair").innerHTML = randomHair;
}

function setRandomEyes() {
    document.getElementById("eyes").innerHTML = randomEyes;
}

function setRandomAge() {
    document.getElementById("age").innerHTML = randomAgeRange;
}

function setRandomStyle() {
    document.getElementById("style").innerHTML = randomStyleType;
}

function generateRandomSim() {
    setRandomCareer();
    setRandomTrait();
    setRandomAspiration();
    setRandomHair();
    setRandomEyes();
    setRandomAge();
    setRandomStyle();
}