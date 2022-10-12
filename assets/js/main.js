// moving name
var typed = new Typed(".auto-input", {
    strings: ["Ashiquzzaman"],
    typeSpeed: 500,
    backSpeed: 300,
    loop: true
})
// skill section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// back to top 
$(function () {

    $('.bck').backToTop({
        iconName: 'fas fa-arrow-up',
        fxName: 'rightToLeft'
    });

});

//progress bar
// $('#html').LineProgressbar({
//     percentage: 90,
//     radius: '3px',
//     height: '10px',
//     fillBackgroundColor: '#DA4453'
// });
// $('#css').LineProgressbar({
//     percentage: 80,
//     radius: '3px',
//     height: '10px',
//     fillBackgroundColor: '#E0C341'
// });
// $('#bootstrap').LineProgressbar({
//     percentage: 78,
//     radius: '3px',
//     height: '10px',
//     fillBackgroundColor: '#4C6793'
// });
// $('#jq').LineProgressbar({
//     percentage: 60,
//     radius: '3px',
//     height: '10px',
//     fillBackgroundColor: '#B1B2FF'
// });

// contact form 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxghP7EHOOSRGSAitzUxpAH-KhNqojjPipe1g8sY9VlM7igGytwWVSH15JVk3UqUNwb/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
        msg.innerHTML = "Message Sent Sucessfully"
        setTimeout(function()
        {
            msg.innerHTML = ""
        },2000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})