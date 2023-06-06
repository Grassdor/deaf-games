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