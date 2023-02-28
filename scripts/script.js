$(document).ready(function () {
  $("#btnGetFacts").click(function () {
    let userName = $("#userName").val();
    let nameLength = generateNameFacts(userName);
    $("#outputDiv").html(nameLength);
  });
});

function generateNameFacts(userName) {
  let nameLength = "";
  nameLength = getNameLength(userName);
  nameLength += " <div> " + getFirstLetter(userName) + "</div>";
  nameLength += "<div> " + getLastLetter(userName) + "</div>";
  return nameLength;
}

function getNameLength(name) {
  return "Your name is " + name.length + " letters long!";
}

function getFirstLetter(name) {
  return "The first letter of your name is " + name[0];
}

function getLastLetter(name) {
  let lastIndex = name.length - 1;
  return "The last letter of your name is " + name[lastIndex];
}
