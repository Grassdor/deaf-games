$(function() {
  
    var $video = $('.fourth-video');
    var $window = $(window);
  
    $window.scroll(function() {
  
      var $topOfVideo = $video.offset().top + 200;
      var $bottomOfVideo = $video.offset().top + $video.outerHeight() - 200;
  
      var $topOfScreen = $window.scrollTop();
      var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();
      
      if(($bottomOfScreen > $bottomOfVideo) && ($topOfScreen < $topOfVideo)){
        $video[0].play();
      } else {
        $video[0].pause();
      }
      
    });
    
  });

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos == 0) {
    document.getElementById("triup").style.left = "0";
    document.getElementById("tridn").style.right = "0";
  } else {
    document.getElementById("triup").style.left = "-500px";
    document.getElementById("tridn").style.right = "-500px";
  }
  prevScrollpos = currentScrollPos;
}

