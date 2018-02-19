var observer = new MutationObserver(function(mutations) {
  var word = $(".gag").text()
  var prononciationSrc = "https://protected-dusk-33233.herokuapp.com/?text=" + word
  var onclick = "document.getElementById('player').play()"
  $('.gag').after("<a href=# onclick=" + onclick + "><span class='g2 gb3 gbf'></span></a>")
  $('.gag').after("<audio id=player><source src=" + prononciationSrc + " type='audio/mp3'>Your browser does not support the audio tag.</audio>")
  $('.gag').after("<span class='gn'> </span>")
});

var target = document.querySelector("#lemmaContent");
var config = { attributes: true, childList: true, characterData: true };
observer.observe(target, config);
