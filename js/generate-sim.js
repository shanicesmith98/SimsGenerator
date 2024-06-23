function setRandomCareer() {
    let randomCareer = Math.floor(Math.random() * mockCareers.length);
    document.getElementById("careers").innerHTML = mockCareers[randomCareer];
}

function setRandomTrait() {
    let randomTrait = Math.floor(Math.random() * mockTraits.length);
    document.getElementById("traits").innerHTML = mockTraits[randomTrait];
}

function setRandomAspiration() {
    let randomAspiration = Math.floor(Math.random() * mockAspirations.length);
    document.getElementById("aspirations").innerHTML = mockAspirations[randomAspiration];
}

function setRandomHair() {
    let randomHairColor = Math.floor(Math.random() * mockHairColor.length);
    document.getElementById("hair").innerHTML = mockHairColor[randomHairColor];
}

function setRandomEyes() {
    let randomEyesColor = Math.floor(Math.random() * mockEyesColor.length);
    document.getElementById("eyes").innerHTML = mockEyesColor[randomEyesColor];
}

function setRandomAge() {
    let randomAge = Math.floor(Math.random() * mockAge.length);
    document.getElementById("age").innerHTML = mockAge[randomAge];
}

function setRandomStyle() {
    let randomStyle = Math.floor(Math.random() * mockStyle.length);
    document.getElementById("style").innerHTML = mockStyle[randomStyle];
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