let filterForge = document.getElementById("filter-forge");
let filterFabric = document.getElementById("filter-fabric");
let filterQuilt = document.getElementById("filter-quilt");
let mods = document.getElementById("mods");
let footer = document.getElementById("footer");

const modsForge = ["fbi-and-swat-armors"];
const modsFabric = ["improved-end", "vanilla-plus", "minecraft-legends-mod", "fbi-and-swat-armors"];
const modsQuilt = ["improved-end", "vanilla-plus", "minecraft-legends-mod", "fbi-and-swat-armors"];
const allMods = ["improved-end", "vanilla-plus", "minecraft-legends-mod", "fbi-and-swat-armors"];

filterForge.addEventListener("click", () => {
  if(filterForge.classList.contains("active")) {
    filterForge.classList.remove("active");
    showAll();
    return;
  }
  hideNotInList(modsForge);
  filterForge.classList.add("active");
  filterFabric.classList.remove("active");
  filterQuilt.classList.remove("active");
  modifyFooter(modsForge);
});

filterFabric.addEventListener("click", () => {
  if(filterFabric.classList.contains("active")) {
    filterFabric.classList.remove("active");
    showAll();
    return;
  }
  hideNotInList(modsFabric);
  filterFabric.classList.add("active");
  filterForge.classList.remove("active");
  filterQuilt.classList.remove("active");
  modifyFooter(modsFabric);
});

filterQuilt.addEventListener("click", () => {
  if(filterQuilt.classList.contains("active")) {
    filterQuilt.classList.remove("active");
    showAll();
    return;
  }
  hideNotInList(modsQuilt);
  filterQuilt.classList.add("active");
  filterForge.classList.remove("active");
  filterFabric.classList.remove("active");
  modifyFooter(modsQuilt);
});

function hideNotInList(list) {
  allMods.forEach(element => {
    let e = document.getElementById(element);
    if(!listContains(list, element)) e.style.display = "none";
    else e.style.display = "";
  });
}

function showAll() {
  allMods.forEach(element => {
    let e = document.getElementById(element);
    e.style.display = "";
  });
  modifyFooter(allMods);
}

function modifyFooter(list) {
  if(list.length < 2)
    footer.classList.add("footer-bottom");
  else
    footer.classList.remove("footer-bottom")
}

function listContains(list, element) {
  let toReturn = false;
  list.forEach(e => {
    if(e == element) {
      toReturn = true;
      return;
    }
  });
  return toReturn;
}