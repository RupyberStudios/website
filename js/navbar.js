const match = /\/pages\/(.+)\//.exec(location.pathname);
const themeCss = document.getElementById('theme-css');
let theme = localStorage.getItem('theme');
if(theme == null) setTheme('image');
else setTheme(theme);

function getImagePath(image) {
    return (match == null ? '' : '../.') + './img/' + image;
}

function setTheme(t) {
    themeCss.href = (match == null ? '' : '../.') + './css/' + t + '.css';
    theme = t;
    localStorage.setItem('theme', theme);
}

function getScreenWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

class Tab {
    id;
    text;
    tab;

    constructor(id) {
        this.id = id;
        this.text = this.id.toUpperCase().replaceAll('_', ' ');
    }

    appendTo(navbar) {
        this.tab = document.createElement('div');
        this.tab.classList.add('container', 'tab', 'clickable');
        if((match != null && match[1] == this.id) || (match == null && this.id == 'home'))
            this.tab.classList.add('current');
        this.tab.addEventListener('click', () => {
            if(!this.tab.classList.contains('current'))
                window.location.href = (match == null ? '' : '../') + (this.id == 'home' ? '../' : ('../pages/' + this.id));
        });
        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.alt = this.text + ' Icon';
        icon.src = getImagePath(this.id + '.svg');
        const span = document.createElement('span');
        span.innerText = this.text;
        this.tab.appendChild(icon);
        this.tab.appendChild(span);
        navbar.appendChild(this.tab);
    }

    hide(hide) {
        this.tab.style.display = hide ? 'none' : '';
    }
}

class RupyberStudiosTab {
    appendTo(navbar) {
        const tab = document.createElement('div');
        tab.classList.add('container', 'tab');
        const icon = document.createElement('img');
        icon.classList.add('icon', 'rounded');
        icon.alt = 'Rupyber Studios Logo Square';
        icon.src = getImagePath('rupyber_studios_square.png');
        const span = document.createElement('span');
        span.innerText = 'RUPYBER STUDIOS';
        tab.appendChild(icon);
        tab.appendChild(span);
        navbar.appendChild(tab);
    }

    hide(hide) {}
}

class MenuTab {
    open;
    tab;

    constructor() {
        this.open = true;
    }

    appendTo(navbar) {
        this.tab = document.createElement('div');
        this.tab.classList.add('container', 'tab', 'clickable');
        this.tab.addEventListener('click', () => {
            this.handle(!this.open);
        });
        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.alt = 'Menu Icon';
        icon.src = getImagePath('menu.svg');
        this.tab.appendChild(icon);
        navbar.appendChild(this.tab);
        window.onresize = () => {
            this.onResize(navbar);
        };
    }

    handle(open) {
        this.open = open;
        navbar.hideTabs(!this.open);
    }

    hide(hide) {}

    onResize(navbar) {
        if(getScreenWidth() < 1000) {
            this.handle(false);
            this.tab.style.display = '';
        }
        else {
            this.handle(true);
            this.tab.style.display = 'none';
        }
    }
}

class ThemeSelectorTab {
    tab;

    appendTo(navbar) {
        this.tab = document.createElement('div');
        this.tab.classList.add('container', 'tab');
        const light = document.createElement('img');
        light.classList.add('icon', 'clickable');
        light.alt = 'Light Theme';
        light.src = getImagePath('light.svg');
        light.addEventListener('click', () => {
            setTheme('light');
        });
        const dark = document.createElement('img');
        dark.classList.add('icon', 'clickable');
        dark.alt = 'Dark Theme';
        dark.src = getImagePath('dark.svg');
        dark.addEventListener('click', () => {
            setTheme('dark');
        });
        const image = document.createElement('img');
        image.classList.add('icon', 'clickable');
        image.alt = 'Image Theme';
        image.src = getImagePath('image.svg');
        image.addEventListener('click', () => {
            setTheme('image');
        });
        this.tab.appendChild(light);
        this.tab.appendChild(dark);
        this.tab.appendChild(image);
        navbar.appendChild(this.tab);
    }

    hide(hide) {
        this.tab.style.display = hide ? 'none' : '';
    }
}

class NavBar {
    navbar;
    tabs;

    constructor(tabs) {
        this.tabs = tabs;
        this.navbar = document.getElementById('navbar');
        for(const tab of this.tabs)
            tab.appendTo(this);
    }

    appendChild(node) {
        this.navbar.appendChild(node);
    }

    hideTabs(hide) {
        for(const tab of this.tabs)
            tab.hide(hide);
    }
}

const menuTab = new MenuTab();

const navbar = new NavBar([
    new RupyberStudiosTab(), menuTab, new Tab('home'),
    new Tab('projects'), new Tab('installation'), new Tab('events'),
    new Tab('posts'), new Tab('about'), new ThemeSelectorTab()
]);

menuTab.onResize(navbar);

class Main {
  main;

  constructor(elements) {
    this.main = document.getElementById('main');
    for(const element of elements)
      element.appendTo(this);
  }

  appendChild(node) {
    this.main.appendChild(node);
  }
}