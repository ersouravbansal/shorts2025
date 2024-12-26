$(document).ready(function () {
    // Calculate height
    // function updateHeight() {
    //     const ht = window.innerHeight;
    //     const svVertical2 = document.querySelector(".BepSl_cn");
    //     svVertical2.style.height = `${ht - 71}px`;

    //     if ($(window).width() <= 560) {
    //         svVertical2.style.height = `${ht}px`; 
    //     }
    // }

    // if ($(window).width() <= 767) {
    //     updateHeight();
    //     window.addEventListener('resize', updateHeight, true);
    // }

    // Initialize variables
    var elementsVisible = false;
 


    // Update visibility based on active slide
   // if ($(window).width() <= 767) {
        // $('.VdElMr_wr').click(function (e) {
        //     e.stopPropagation();
        // });

        // $(document).on('click', function (event) {
        //     if (elementsVisible && $('.VdElMr_wr').is(':visible') && $(".VdElMr_ovrly").is(':visible')) {
        //         $('.VdElMr_wr').parents('.BepSl_li').removeClass('js_icon-more');
        //         elementsVisible = false;
        //     } else if ($('.VdEl_ovl').is(':visible')) {
        //         $('.VdEl_ovl').parents('.BepSl_li').removeClass('js_seek-vis');

        //     } else {
        //         $('.VdElMr_wr').parents('.BepSl_li').addClass('js_icon-more');
        //         elementsVisible = true;
        //     }
        // });

        // $('.VdEl_icn-mr').click(function (ev) {
        //     ev.stopPropagation();
        //     if (!elementsVisible) {
        //         $(this).parents('.BepSl_li').toggleClass('js_icon-more');
        //         elementsVisible = true;
        //     } else {
        //         $(this).parents('.BepSl_li').removeClass('js_icon-more');
        //         elementsVisible = false;
        //     }
        // });

        // $('.VdElMr_ovrly').click(function (e) {
        //     e.stopPropagation();
        //     $(this).parents('.BepSl_li').removeClass('js_icon-more');
        //     elementsVisible = false;
        // });
 //   }

   // Volume functionality
//    $(".VdEl_icn-vol").click(function (e) {
    
//     e.stopPropagation(); // Prevent the event from bubbling up
//     $(".VdEl_icn-vol-full").css("display", function (index, value) {
//         return value === "none" ? "flex" : "none";
//     });
//     $(".VdEl_icn-mute").css("display", function (index, value) {
//         return value === "none" ? "flex" : "none";
//     });
// });

    // Toggle expand functionality
    $('.VdEl_ic-exp').click(function () {
        $(this).parents('.VdEl_ic-exp-wr').toggleClass('js_VdEl_ic-exp');
    });

    // More info functionality
    // $(".js-MorInf").click(function (e) {
    //     e.stopPropagation();
    // $(this).parents('.swiper-slide-active').addClass('js_seek-vis');

    //     $("body").toggleClass('VdElCht_on');
    //     $('.VdElMr_wr').parents('.BepSl_li').removeClass('js_icon-more');
    // });

    // Close chat functionality
    $(".VdElCht_btn, .VdElCht_over-bg, .VdElCht_hd-icn, .VdElCht_cls").click(function (e) {
        e.stopPropagation();
        $("body").removeClass('VdElCht_on');
    });

    // Play pause functionality
    // $('.VdEl_sk_pp').click(function (event) {
    //     event.stopPropagation();
    //     $(this).closest('.VdEl_sk_pp-btn').toggleClass('js_VdEl_sk_pp-act');
    // });
});