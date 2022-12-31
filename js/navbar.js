let navbar = document.getElementById("navbar");
const pages = ["home", "projects", "installation", "events", "posts", "about"];
let menuOpen = false;
let navbarHtml = `
<ul>
  <li>
    <div class="container">
      <img class="icon" src="../../img/logo_square.png" alt="Rupyber Studios Logo" height="25" style="border-radius: 20%;"> Rupyber Studios
    </div>
  </li>
  <li id="menu" class="hover">
    <div class="container">
      <img class="icon" src="../../img/menu.svg" alt="Menu Icon" height="25" style="margin-right: 0;">
    </div>
  </li>
  <li id="home" class="hover">
    <a href="../../index.html">
      <div class="container">
        <img class="icon" src="../../img/home.svg" alt="Home Icon" height="25"> Home
      </div>
    </a>
  </li>
  <li id="projects" class="hover">
    <a href="../projects/index.html">
      <div class="container">
        <img class="icon" src="../../img/projects.svg" alt="Projects Icon" height="25"> Projects
      </div>
    </a>
  </li>
  <li id="installation" class="hover">
    <a href="../installation/index.html">
      <div class="container">
        <img class="icon" src="../../img/installation.svg" alt="Installation Icon" height="25"> Installation
      </div>
    </a>
  </li>
  <li id="events" class="hover">
    <a href="../events/index.html">
      <div class="container">
        <img class="icon" src="../../img/events.svg" alt="About Icon" height="25"> Events
      </div>
    </a>
  </li>
  <li id="posts" class="hover">
    <a href="../posts/index.html">
      <div class="container">
        <img class="icon" src="../../img/posts.svg" alt="Posts Icon" height="25"> Posts
      </div>
    </a>
  </li>
  <li id="about"  class="hover">
    <a href="../about/index.html">
      <div class="container">
        <img class="icon" src="../../img/about.svg" alt="About Icon" height="25"> About
      </div>
    </a>
  </li>
  <li class="hover">
    <div class="container">
      <div data-theme="light" class="switch" id="switch-light" style="height: 25px;">
        <img src="../../img/light.svg" alt="Light Icon" height="25">
      </div>
      <div data-theme="dark" class="switch" id="switch-dark" style="height: 25px;">
        <img src="../../img/dark.svg" alt="Dark Icon" height="25">
      </div>
      <div data-theme="image" class="switch" id="switch-image" style="height: 25px;">
        <img src="../../img/image.svg" alt="Image Icon" height="25">
      </div>
    </div>
  </li>
</ul>
`

function loadNavbar(active) {
  navbar.innerHTML = navbarHtml;
  document.getElementById(active).classList.add("active");
  loadMobileNavbar();
}

function loadMobileNavbar() {
  menuOpen = false;
  onResize();
  menu.addEventListener("click", function () {
    menuOpen = !menuOpen;
    if(menuOpen) {
      pages.forEach(element => {
        document.getElementById(element).style.display = "";
      });
    }
    else {
      pages.forEach(element => {
        document.getElementById(element).style.display = "none";
      });
    }
  });
}

function onResize() {
  mobile = getWidth() < 1000;
  if(mobile) {
    menu.style.display = "";
    pages.forEach(element => {
      document.getElementById(element).style.display = "none";
    });
  }
  else {
    menu.style.display = "none";
    pages.forEach(element => {
      document.getElementById(element).style.display = "";
    });
  }
}

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}