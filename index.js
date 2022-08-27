// AOS.init();
// document.querySelector('#pc3').scrollIntoView({
//     behavior: 'smooth'
// });


// $(document).ready(function () {
//     // Add smooth scrolling to all links
//     $("a").on('click', function (event) {

//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//             // Prevent default anchor click behavior
//             event.preventDefault();

//             // Store hash
//             var hash = this.hash;

//             // Using jQuery's animate() method to add smooth page scroll
//             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//             $('body , horizontal-scroll').animate({
//                 scrollTop: $(hash).offset().top
//             }, 1000, function () {

//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = hash;
//             });
//         } // End if
//     });
// });



// const nodeList = document.querySelectorAll(".link");
// for (let i = 0; i < nodeList.length; i++) {
//     nodeList[i].style.backgroundColor = "red";
// }

let thirdLink = document.querySelector("#three");
let thirdSection = document.querySelector("#pc3");



function navigateThird(e) {

    thirdSection.scrollIntoView({ block: 'end', behavior: 'smooth' });
}

thirdLink.addEventListener("click", navigateThird);
console.log("hey");


