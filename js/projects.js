const tags = [];
const projects = [];

class LoaderTag {
    loader;
    pascalCase;

    constructor(loader) {
        this.loader = loader;
        this.pascalCase = loader[0].toUpperCase() + loader.substring(1);
        tags.push(this);
    }

    appendTo(tags, clickListener = undefined) {
        const tag = document.createElement('div');
        tag.classList.add('container', 'tag');
        if(clickListener != undefined) {
            tag.classList.add('clickable');
            tag.addEventListener('click', () => {
                clickListener(tag);
            });
        }
        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.alt = this.pascalCase + ' Icon';
        icon.src = '../../img/' + this.loader + '.svg';
        const loader = document.createElement('span');
        loader.innerText = this.pascalCase;
        tag.appendChild(icon);
        tag.appendChild(loader);
        tags.appendChild(tag);
    }
}

class VersionTag {
    version;

    constructor(version) {
        this.version = version;
    }

    appendTo(tags, clickListener = undefined) {
        const tag = document.createElement('div');
        tag.classList.add('container', 'tag');
        if(clickListener != undefined) {
            tag.classList.add('clickable');
            tag.addEventListener('click', () => {
                clickListener(tag);
            });
        }
        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.alt = 'Minecraft Icon';
        icon.src = '../../img/minecraft.svg';
        const loader = document.createElement('span');
        loader.innerText = this.version;
        tag.appendChild(icon);
        tag.appendChild(loader);
        tags.appendChild(tag);
    }
}

const forge = new LoaderTag('forge');
const fabric = new LoaderTag('fabric');
const quilt = new LoaderTag('quilt');
const _1_18_2 = new VersionTag('1.18.2');
const _1_19_2 = new VersionTag('1.19.2');
const _1_19_4 = new VersionTag('1.19.4');
const _1_20_1 = new VersionTag('1.20.1');
const _1_20_4 = new VersionTag('1.20.4');
const _1_20_6 = new VersionTag('1.20.6');
const _1_21_1 = new VersionTag('1.21.1');

tags.push(_1_18_2, _1_19_4, _1_20_6, _1_21_1);

class Filter {
    filter;

    constructor() {
        this.filter = document.createElement('div');
        this.filter.classList.add('box', 'background');
        const iconSpan = document.createElement('div');
        iconSpan.classList.add('container', 'icon-span');
        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.alt = 'Filter Icon';
        icon.src = '../../img/filter.svg';
        const span = document.createElement('span');
        span.innerText = 'Filter';
        iconSpan.appendChild(icon);
        iconSpan.appendChild(span);
        const tagsDiv = document.createElement('div');
        tagsDiv.classList.add('container', 'tags');
        for(const tag of tags) {
            tag.appendTo(tagsDiv, (tagDiv) => {
                if(tagDiv.classList.contains('current')) {
                    tagDiv.classList.remove('current');
                    for(const project of projects)
                        project.hide(false);
                }
                else {
                    for(const t of tagsDiv.childNodes)
                        t.classList.remove('current');
                    tagDiv.classList.add('current');
                    for(const project of projects)
                        project.hide(!project.containsTag(tag));
                }
            });
        }
        this.filter.appendChild(iconSpan);
        this.filter.appendChild(tagsDiv);
    }

    appendTo(main) {
        main.appendChild(this.filter);
    }
}

class Project {
    project;
    tags;
    hiddenTags;

    constructor(id, tags, hiddenTags, description, links) {
        this.project = document.createElement('div');
        this.project.classList.add('box', 'background');
        const logo = document.createElement('img');
        logo.classList.add('logo');
        logo.alt = id.toUpperCase().replaceAll('_', ' ') + ' Logo';
        logo.src = '../../img/' + id + '.png';
        this.project.appendChild(logo);
        const tagsContainer = document.createElement('div');
        tagsContainer.classList.add('container', 'tags');
        this.tags = tags;
        this.hiddenTags = hiddenTags;
        for(const tag of tags) {
            tag.appendTo(tagsContainer);
        }
        this.project.appendChild(tagsContainer);
        const descriptionSpan = document.createElement('span');
        descriptionSpan.innerText = description;
        this.project.appendChild(descriptionSpan);
        const linksContainer = document.createElement('div');
        linksContainer.classList.add('container', 'links');
        if(links.github != undefined) {
            const github = document.createElement('div');
            github.classList.add('container', 'link', 'clickable', 'github');
            github.addEventListener('click', () => {
                window.open('https://github.com/Pyrix25633/' + links.github + '/releases');
            });
            const githubIcon = document.createElement('img');
            githubIcon.classList.add('icon');
            githubIcon.alt = 'GitHub Icon';
            githubIcon.src = '../../img/github.svg';
            const githubSpan = document.createElement('span');
            githubSpan.innerText = 'GitHub';
            github.appendChild(githubIcon);
            github.appendChild(githubSpan);
            linksContainer.appendChild(github);
        }
        if(links.curseforge != undefined) {
            const curseforge = document.createElement('div');
            curseforge.classList.add('container', 'link', 'clickable', 'curseforge');
            curseforge.addEventListener('click', () => {
                window.open('https://curseforge.com/minecraft/mc-mods/' + links.curseforge);
            });
            const curseforgeIcon = document.createElement('img');
            curseforgeIcon.classList.add('icon');
            curseforgeIcon.alt = 'CurseForge Icon';
            curseforgeIcon.src = '../../img/curseforge.svg';
            const curseforgeSpan = document.createElement('span');
            curseforgeSpan.innerText = 'CurseForge';
            curseforge.appendChild(curseforgeIcon);
            curseforge.appendChild(curseforgeSpan);
            linksContainer.appendChild(curseforge);
        }
        if(links.modrinth != undefined) {
            const modrinth = document.createElement('div');
            modrinth.classList.add('container', 'link', 'clickable', 'modrinth');
            modrinth.addEventListener('click', () => {
                window.open('https://modrinth.com/mod/' + links.modrinth);
            });
            const modrinthIcon = document.createElement('img');
            modrinthIcon.classList.add('icon');
            modrinthIcon.alt = 'Modrinth Icon';
            modrinthIcon.src = '../../img/modrinth.svg';
            const modrinthSpan = document.createElement('span');
            modrinthSpan.innerText = 'Modrinth';
            modrinth.appendChild(modrinthIcon);
            modrinth.appendChild(modrinthSpan);
            linksContainer.appendChild(modrinth);
        }
        this.project.appendChild(linksContainer);
        projects.push(this);
    }

    appendTo(main) {
        main.appendChild(this.project);
    }

    hide(hide) {
        this.project.style.display = hide ? 'none' : '';
    }

    containsTag(tag) {
        return this.tags.includes(tag) || this.hiddenTags.includes(tag);
    }
}


const vanillaPlus = new Project('vanilla_plus', [fabric, quilt, _1_20_4], [_1_18_2, _1_19_4],
    'Adds Decoration Blocks and new Music Discs easy to obtain in survival.',
    { github: 'Fabric-VanillaPlus', curseforge: 'vanilla-plus-mod', modrinth: 'vanilla-plus-mod' }
);
const fbiAndSwatArmors = new Project('fbi_and_swat_armors', [forge, fabric, quilt, _1_21_1], [_1_19_4, _1_20_4, _1_20_6],
    'Adds FBI and SWAT armors.',
    { github: 'Fabric-Forge-FbiAndSwatArmors', curseforge: 'fbi-and-swat-armors', modrinth: 'fbi-and-swat-armors' }
);
const fabricTps = new Project('fabric_tps', [fabric, quilt, _1_21_1], [_1_18_2, _1_19_4, _1_20_6],
    'Adds an equivalent to the \'/forge tps\' command.',
    { github: 'Fabric-FabricTPS', curseforge: 'fabric-tps', modrinth: 'fabric-tps' }
);
const exploreDecorateCreate = new Project('explore_decorate_create', [fabric, quilt, _1_20_4], [_1_20_1],
    'Modpack designed to improve Exploration, Decoration and Creation.',
    { modrinth: 'explore-decorate-create' }
);
const starWarsCloneWars = new Project('star_wars_clone_wars', [forge, _1_20_1], [_1_18_2, _1_19_4],
    'Adds Clones, Battle Droids, Dimensions and much more.',
    { github: 'Forge-StarWarsCloneWars', curseforge: 'star-wars-clone-wars', modrinth: 'star-wars-clone-wars' }
);
const improvedEnd = new Project('improved_end', [fabric, quilt, _1_19_2], [_1_18_2],
    'Adds tons of new Blocks, Biomes and Mobs to the End Dimension.',
    { github: 'Fabric-ImprovedEnd', curseforge: 'improved-end', modrinth: 'improved-end' }
);
const minecraftLegendsMod = new Project('minecraft_legends_mod', [fabric, quilt, _1_19_2], [],
    'Adds add some Mobs, Structures and Items from Minecraft Legends.',
    { github: 'Fabric-MinecraftLegends', curseforge: 'minecraft-legends-mod', modrinth: 'minecraft-legends-mod' }
);

const main = new Main([new Filter()].concat(projects));