var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyHrunqjlAPKU2dx7WpscSYEM7pA7sTv9YeGR0oKcyx3gGOviN10SzExh7lN_PhgaU/exec';
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector(".confirmation");


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML ="Message Sent successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        },3000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

//   ----------Them changer---------
const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("light")) {
            body.classList.replace("light", "dark");
            themeToggle.textContent = "☀ Light";
        } else {
            body.classList.replace("dark", "light");
            themeToggle.textContent = "🌙 Dark";
        }
    });




window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    const header = document.getElementById("header");

    const scrollY = window.scrollY;
    const headerHeight = header.offsetHeight/4;

    if (scrollY > headerHeight - 80) { // 80px is approx nav height
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});