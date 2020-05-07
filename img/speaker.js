var audiostatus = 'off';
var video = $("#bannerVid").get(0);
$(document).on('click', '.speaker', function () {
  /* Touchend is necessary for mobile devices, click alone won't work */
  if (!$('.speaker').hasClass("speakerplay")) {
    if (audiostatus == 'off') {
      $('.speaker').addClass('speakerplay');
      video.muted = false;
      window.clearTimeout(mouseovertimer);
      audiostatus = 'on';
      return false;
    } else if (audiostatus == 'on') {
      $('.speaker').addClass('speakerplay');
      video.muted = false;
    }
  } else if ($('.speaker').hasClass("speakerplay")) {
    $('.speaker').removeClass('speakerplay');
    video.muted = true;
    audiostatus = 'on';
  }
});

$(document).on('touchend', '.speaker', function () {
    /* Touchend is necessary for mobile devices, click alone won't work */
    if (!$('.speaker').hasClass("speakerplay")) {
      if (audiostatus == 'off') {
        $('.speaker').addClass('speakerplay');
        video.muted = false;
        window.clearTimeout(mouseovertimer);
        audiostatus = 'on';
        return false;
      } else if (audiostatus == 'on') {
        $('.speaker').addClass('speakerplay');
        video.muted = false;
      }
    } else if ($('.speaker').hasClass("speakerplay")) {
      $('.speaker').removeClass('speakerplay');
      video.muted = true;
      audiostatus = 'on';
    }
  });