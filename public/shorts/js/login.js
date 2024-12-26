// document.addEventListener("DOMContentLoaded", function () {
//   const logTriggerElements = document.querySelectorAll(".__log_trigger");
//   logTriggerElements.forEach(function (element) {
//     element.addEventListener("click", function () {
//       if (!parent_c_islogin()) {
//         let __rurl = window.location.href;
//         window.location.href =
//           "https://stage-auth.ndtv.com/w/sso.html?siteurl=" +
//           encodeURIComponent(__rurl);
//       } else {
//         const toggleClass = element.getAttribute("data-class");
//         document.body.classList.toggle(toggleClass);
//       }
//     });
//   });

//   const overlaySideNav = document.querySelector(".overlay__side-nav");
//   const logSdCls = document.querySelector(".LogSd-cls");
//   overlaySideNav.addEventListener("click", removeJsSideNavClass);
//   logSdCls.addEventListener("click", removeJsSideNavClass);

//   function removeJsSideNavClass() {
//     document.body.classList.remove("js_sid-nav-right");
//   }
// });
