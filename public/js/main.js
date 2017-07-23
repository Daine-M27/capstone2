jQuery.each( [ "put", "delete" ], function( i, method ) {
    jQuery[ method ] = function( url, data, callback, type ) {
        if ( jQuery.isFunction( data ) ) {
            type = type || callback;
            callback = data;
            data = undefined;
        }

        return jQuery.ajax({
            url: url,
            type: method,
            dataType: type,
            data: data,
            success: callback
        });
    };
});

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
        const sure = confirm("Are you sure?")
            if(sure) {
                $.post('/api/gallery/' + idtext, function(a,b){
                    window.location.reload();
                });
            } else {

            }

    });

    $(document).on('click', '.edit-btn',function(){
        $(this).closest('li#edit-gallery').toggleClass('hidden');
        $(this).closest('li#edit-gallery').next('li').toggleClass('hidden');


    });
    //
    $(document).on('click', '.cancel-edit',function(e){
        $(this).closest('li#edit-form').toggleClass('hidden');
        $(this).closest('li#edit-form').prev().toggleClass('hidden');


    });

    // edit title and description
    $(document).on('click', '.submit-edit', function(e){
        e.preventDefault();
        const idtext = $(this).siblings("p.idtext").text();
        const titleField = $(this).siblings('form.edit-fields').children('input.image-title').val();
        const descriptionField = $(this).siblings('form.edit-fields').children('textarea.image-description').val();
        $.put('/api/gallery/'+ idtext + '/'+ titleField +'/'+ descriptionField, function(a,b){
            window.location.reload();
        });
        console.log(titleField);
        console.log(descriptionField);
    });

});








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
