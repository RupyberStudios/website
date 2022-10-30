let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if(style == null) {
  setTheme('image');
} else {
  setTheme(style);
}

for(let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  let themeCss;
  if (theme == 'light') {
    themeCss = '../../css/light.css';
  } else if (theme == 'dark') {
    themeCss = '../../css/dark.css';
  } else if (theme == 'image') {
    themeCss = '../../css/image.css';
  }
  document.getElementById('theme-css').href = themeCss;
  localStorage.setItem('style', theme);
}