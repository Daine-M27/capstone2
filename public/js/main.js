$(document).ready(() => {
// Initialize Tooltip
//   $('[data-toggle="tooltip"]').tooltip();
//
//     // Add smooth scrolling to all links in navbar + footer link
//   $(".navbar a.scroll, footer a.scroll[href='#myPage']").on('click', function (event) {
//         // Prevent default anchor click behavior
//     event.preventDefault();
//
//         // Store hash
//     const hash = this.hash;
//
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//     $('html, body').animate({
//       scrollTop: $(hash).offset().top
//     }, 900, () => {
//             // Add hash (#) to URL when done scrolling (default click behavior)
//       window.location.hash = hash;
//     });
//   });

  $('.delete-btn').on('click', function(e) {
      e.preventDefault();
      alert('click');
      //console.log('this is working');
  });

    // modal submit handler
    // function verifyUser()

    // $('.loginmodal-submit').on('click', function(e){
    //     e.preventDefault();
    //
    // })
});
