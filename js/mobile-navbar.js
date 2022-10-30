let navbar = document.getElementById("navbar");
let menu = document.getElementById("menu");
let home = document.getElementById("home");
let projects = document.getElementById("projects");
let about = document.getElementById("about");
let events = document.getElementById("events");
let posts = document.getElementById("posts");
let menuOpen = false;

onResize();

function onResize() {
  mobile = getWidth() < 1000;
  if(mobile) {
    menu.style.display = "";
    home.style.display = "none";
    projects.style.display = "none";
    about.style.display = "none";
    events.style.display = "none";
    posts.style.display = "none";
  }
  else {
    menu.style.display = "none";
    home.style.display = "";
    projects.style.display = "";
    about.style.display = "";
    events.style.display = "";
    posts.style.display = "";
  }
}

menu.addEventListener("click", function () {
  console.log("Menu: " + menuOpen)
  menuOpen = !menuOpen;
  if(menuOpen) {
    home.style.display = "";
    projects.style.display = "";
    about.style.display = "";
    events.style.display = "";
    posts.style.display = "";
  }
  else {
    home.style.display = "none";
    projects.style.display = "none";
    about.style.display = "none";
    events.style.display = "none";
    posts.style.display = "none";
  }
});

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}