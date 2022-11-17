const shape = "circle";
const topics = ["HTML", "CSS", "Git", "JavaScript"];
const topic = "HTML";
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

for (let x = 0; x < topics.length; x++) {
  console.log(topics[x]);
}

function listTopics() {
  for (x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selectTopics(input) {
  if (topic === "HTML") {
    console.log("lets study HTML");
  } else if (topic === "CSS") {
    console.log("Lets study CSS!");
  } else if (topic === "Git") {
    console.log("Lets study Git!");
  } else if (topic === "JavaScript") {
    console.log("lets study JavaScript");
  } else {
    console.log("Please try again!");
  }
}
function helloWorld() {
  console.log("Hello, world I am a function");
}
// selectTopics("HTML");
// helloWorld();
// listTopics();
console.log(randomTopic);
