const getScriptureVerse = function(scriptureName) {
  const url = "https://bible-api.com/" + scriptureName;
  fetch(url)
    .then((resp) => {
      if (resp.status >= 200 && resp.status <= 400) {
        return resp.json();
      } else {
        document.getElementById("scripture-display").innerHTML = "Could not find verse!"
      }
    })
    .then((json) => {
      let chapterResults = "";
      let results = "";
      chapterResults += json.verses[0].book_name + " " + json.verses[0].chapter + ":" + json.verses[0].verse;
      results += json.verses[0].text;
      document.getElementById("chapter-display").innerHTML = chapterResults;
      document.getElementById("scripture-display").innerHTML = results;
    })
}
const displayScriptureVerse = function(event) {
  event.preventDefault();
  const scriptureName = document.getElementById("scriptForm").value;
  if (scriptureName === "") {
    return;
  }
  getScriptureVerse(scriptureName);
}

document.getElementById('myBtn').addEventListener('click', displayScriptureVerse);
