// "Main function to operate actions on website"
$(function(){
	
	// Make collapsed menu close on click (Mobile Devices)

	$('#my-navbar a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Add scrollspy to <body>
  $('body').scrollspy({target: "#my-navbar"});

  // Add smooth scrolling on all links inside container with id #my-navbar
  $("#my-navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  // Scroll Top Button Appearance

  // When the user scrolls down 350px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      document.getElementById("scrollTopBtn").style.display = "block";
      // $(document.getElementById("scrollTopBtn")).fadeIn(1000);
    } else {
      document.getElementById("scrollTopBtn").style.display = "none";
    }
  }


});

// Form validation
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();