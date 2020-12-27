

window.onload = init;

function init() {
  var images = document.getElementsByTagName('img');
  for(var i=0; i < images.length;i++) {
    images[i].onclick = showAnswer;
  }

}

function showAnswer(eventObject) {
  var image = eventObject.target;
  var name = "img/" + image.id;
  name = name + ".jpg";
  image.src = name;
}
