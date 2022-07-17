 // Navbar
 $(function() {
     $(document).scroll(function() {
         var $nav = $(".fixed-top");
         var $hero = $(".hero-img")
         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
     });
 });

 ///////Owl-Carousel