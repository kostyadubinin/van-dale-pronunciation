var target = document.querySelector('#lemmaContent');

var observer = new MutationObserver(function(mutations) {
  var word = $('.gag').text()
  var src = "https://protected-dusk-33233.herokuapp.com/?text=" + word
  $('.gag').after("<a href=# onclick='document.getElementById(&quot;player&quot;).play()'><span class='g2 gb3 gbf'></span></a>")
  $('.gag').after("<audio autoplay id=player><source src=" + src + " type='audio/mp3'>Your browser does not support the audio tag.</audio>")
  $('.gag').after("<span class='gn'> </span>")
});

var config = { attributes: true, childList: true, characterData: true };
observer.observe(target, config);
