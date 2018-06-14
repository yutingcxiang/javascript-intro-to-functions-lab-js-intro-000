function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === "I love you, too") {
    return "I love you, Grandma";
  } else if (string.toLowerCase() === true) {
    return "I can't hear you!";
  } else if (string.toUpperCase() === true) {
    return "YES INDEED!"
  } 
}

