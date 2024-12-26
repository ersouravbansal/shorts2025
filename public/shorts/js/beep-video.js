// $(function () {
//     var timeoutIDs = [];
//     var clicked = false;

//     var mySwiper = new Swiper('.BepSl_rw', {
//         direction: 'vertical',
//         loop: false,
//         centeredSlides: true,
//         cssMode: true,
//         slidesPerView: 'auto',
//         mousewheel: true,
//         keyboard: true,
//         navigation: {
//             nextEl: '.BepNv_nxt',
//             prevEl: '.BepNv_prv',
//         },
//         breakpoints: {
//             768: {
//                 centeredSlides: true,
//                 cssMode: true,
//                 direction: 'horizontal',
//                 loop: false,
//                 slidesPerView: 1.35,
//                 speed: 400,
//                 mousewheel: true,
//                 keyboard: true,
//             },
//             1024: {
//                 centeredSlides: true,
//                 cssMode: true,
//                 direction: 'horizontal',
//                 loop: false,
//                 slidesPerView: 1.6,
//                 speed: 400,
//                 mousewheel: true,
//                 keyboard: true,
//             },
//             1200: {
//                 centeredSlides: true,
//                 cssMode: true,
//                 direction: 'horizontal',
//                 loop: false,
//                 slidesPerView: 2,
//                 speed: 400,
//                 mousewheel: true,
//                 keyboard: true,
//             }
//         },
//         on: {
//             init: function () {
//                 $('.swiper-slide').each(function (index) {
//                     timeoutIDs[index] = setTimeout(function () {
//                         handleTimeout(index);
//                     }, 0);
//                 });
//                 playActiveSlideVideo(this);
//             },
//             slideChange: function () {
//                 clearTimeout(timeoutIDs[this.realIndex]);
//                 timeoutIDs[this.realIndex] = setTimeout(function () {
//                     handleTimeout(mySwiper.realIndex);
//                 }, 0);
//                 playActiveSlideVideo(this);
//             }
//         }
//     });
//     // if ($(window).width() >= 560) {
//         // $('.VdEl_ovl').click(function (event) {
//         //     event.stopPropagation();
//         //     $(this).parents('.BepSl_li').toggleClass('js_seek-vis');
//         //     $(this).parents('.BepSl_li').removeClass('js_seek-vis-sec');
//         //     console.log("hi");
//         //     if ($(window).width() <= 560) {
//         //         $(this).parents('.BepSl_li').toggleClass('js_swp-vis');
//         //     }
//         // });
//     // }
//     if ($(window).width() <= 560) {

//         $('.BepSl_crd').click(function (event) {
//             clicked = true;
//             event.stopPropagation();

//             clearTimeout(timeoutIDs[mySwiper.realIndex]);

//             $(this).parents('.swiper-slide-active').toggleClass('js_seek-vis-sec');
//             if ($(this).parents('.BepSl_li').hasClass('js_seek-vis-sec')) {
//                 $(this).parents('.BepSl_li').addClass('js_swp-vis').removeClass('js_seek-vis-sec');
//             } else {
//                 $(this).parents('.swiper-slide-active').removeClass('js_swp-vis');
//             }


//             if ($(this).parents('.BepSl_li').hasClass('js_swp-vis')) {
//                 $(this).parents('.BepSl_li').toggleClass('js_seek-vis');
//             } else {
//              //   $(this).parents('.swiper-slide-active').removeClass('js_seek-vis');
//             }
//         });

//     }

    
//     function handleTimeout(index) {
//         var activeSlide = $('.swiper-slide').eq(index);
//         $('.swiper-slide').removeClass('js_icon-more');

//         activeSlide.addClass('js_seek-vis-sec');
//         activeSlide.removeClass('js_swp-vis');
//         if ($(window).width() <= 560) {

//             if (!clicked) {
//                 activeSlide.addClass('js_seek-vis-sec');
//                 activeSlide.addClass('js_swp-vis');


//                 setTimeout(function () {
//                     activeSlide.removeClass('js_seek-vis-sec');
//                     activeSlide.removeClass('js_icon-more');
//                     $("body").removeClass('VdElCht_on');

//                 }, 6000);
//             }
//         }
//         if ($(window).width() >= 560) {

//             if (!clicked) {
//                 activeSlide.addClass('js_seek-vis-sec');
//                 //  activeSlide.addClass('js_swp-vis');


//                 setTimeout(function () {
//                     activeSlide.removeClass('js_seek-vis-sec');
//                     activeSlide.removeClass('js_icon-more');

//                 }, 6000);
//             }
//         }
//     }

//     function playActiveSlideVideo(swiper) {
//         var activeSlide = swiper.slides[swiper.activeIndex];
//         var activeSlideVideo = activeSlide.querySelector('video');
//         if (activeSlideVideo) {
//             activeSlideVideo.play();
//         }
//     }
// });
