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

    $(document).on('click', '.delete-btn', function () {
        const idtext = $(this).siblings("p.idtext").text();
        // console.log(idtext);
        $.post('/api/gallery/' + idtext);
    });

})
    // $(document).on('click', '.edit-btn',function(){
    //     $(this).siblings('input#imagetitle').prop('disabled', !$(this).siblings('input#imagetitle').prop('disabled'));
    // };





    // Add upload preview in gallery admin page

//     function readURL(input) {
//         if (input.files && input.files[0]) {
//             const reader = new FileReader();
//
//             reader.onload = function(e) {
//                 $(#preview-thumbnail)
//                     .att('src', e.target.result)
//             };
//             reader.readAsDataURL(input.files[0])
//         }
//     }
//
//
// });
