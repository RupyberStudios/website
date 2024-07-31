class Profiles {
    profiles;

    constructor() {
        this.profiles = document.createElement('div');
        this.profiles.classList.add('box', 'background');
        const h2 = document.createElement('h2');
        h2.innerText = 'Our Profiles';
        const links = document.createElement('div');
        links.classList.add('container', 'links');
        const github = document.createElement('div');
        github.classList.add('container', 'link', 'clickable', 'github');
        github.addEventListener('click', () => {
            window.open('https://github.com/Pyrix25633');
        });
        const githubIcon = document.createElement('img');
        githubIcon.classList.add('icon');
        githubIcon.alt = 'GitHub Icon';
        githubIcon.src = '../../img/github.svg';
        const githubSpan = document.createElement('span');
        githubSpan.innerText = 'GitHub';
        github.appendChild(githubIcon);
        github.appendChild(githubSpan);
        const curseforge = document.createElement('div');
        curseforge.classList.add('container', 'link', 'clickable', 'curseforge');
        curseforge.addEventListener('click', () => {
            window.open('https://curseforge.com/members/rupyberstudios/projects');
        });
        const curseforgeIcon = document.createElement('img');
        curseforgeIcon.classList.add('icon');
        curseforgeIcon.alt = 'CurseForge Icon';
        curseforgeIcon.src = '../../img/curseforge.svg';
        const curseforgeSpan = document.createElement('span');
        curseforgeSpan.innerText = 'CurseForge';
        curseforge.appendChild(curseforgeIcon);
        curseforge.appendChild(curseforgeSpan);
        const modrinth = document.createElement('div');
        modrinth.classList.add('container', 'link', 'clickable', 'modrinth');
        modrinth.addEventListener('click', () => {
            window.open('https://modrinth.com/user/RupyberStudios');
        });
        const modrinthIcon = document.createElement('img');
        modrinthIcon.classList.add('icon');
        modrinthIcon.alt = 'Modrinth Icon';
        modrinthIcon.src = '../../img/modrinth.svg';
        const modrinthSpan = document.createElement('span');
        modrinthSpan.innerText = 'Modrinth';
        modrinth.appendChild(modrinthIcon);
        modrinth.appendChild(modrinthSpan);
        links.appendChild(github);
        links.appendChild(curseforge);
        links.appendChild(modrinth);
        this.profiles.appendChild(h2);
        this.profiles.appendChild(links);
    }

    appendTo(main) {
        main.appendChild(this.profiles);
    }
}

const main = new Main([new Profiles()]);