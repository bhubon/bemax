$(document).ready(function(){

  //Slider
  $('.slider-active').owlCarousel({
  loop:true,
  items:1,
  margin:10,
  nav:true,
  navText:['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});
// latest post
$('.project-active').owlCarousel({
loop:true,
margin:10,
nav:true,
dots:false,
navText:['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
responsive:{
    0:{
        items:1
    },
    767:{
        items:4
    },
    1000:{
        items:4
    }
}
});

//Video popup
$('.video-popup').magnificPopup({
  type: 'iframe'
  // other options
});
//Blog carousel

$('.blog-active').owlCarousel({
loop:true,
margin:10,
nav:true,
items:1,
dots:false,
navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
responsive:{
    0:{
        items:1
    },
    767:{
        items:1
    },
    1000:{
        items:1
    }
}
});
//testimonial carousel

$('.testimonial-active').owlCarousel({
loop:true,
margin:10,
nav:true,
dots:false,
navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
});
//Brand carousel

$('.brand-active').owlCarousel({
loop:true,
margin:10,
nav:false,
dots:false,
navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
responsive:{
    0:{
        items:1
    },
    480:{
        items:2
    },
    767:{
        items:3
    },
    992:{
        items:5
    },
    1200:{
        items:6
    }
}
});
$(function(){
       $('#menu').slicknav();
   });

});
