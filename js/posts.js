const pyrix25633 = { id: 'pyrix25633', username: 'Pyrix25633' };
const posts = [];

class Post {
    post;

    constructor(author, date, title, text) {
        this.post = document.createElement('div');
        this.post.classList.add('box', 'background');
        const pfpUsername = document.createElement('div');
        pfpUsername.classList.add('container', 'icon-span');
        const pfp = document.createElement('img');
        pfp.classList.add('pfp');
        pfp.alt = author.username + ' Pfp';
        pfp.src = getImagePath(author.id + '.png');
        const username = document.createElement('span');
        username.innerText = author.username;
        pfpUsername.appendChild(pfp);
        pfpUsername.appendChild(username);
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('container', 'icon-span');
        const dateIcon = document.createElement('img');
        dateIcon.classList.add('icon');
        dateIcon.alt = 'Date Icon';
        dateIcon.src = getImagePath('date.svg');
        const dateSpan = document.createElement('span');
        dateSpan.classList.add('small');
        dateSpan.innerText = 'On: ' + date.toLocaleDateString('en-ZA');
        dateDiv.appendChild(dateIcon);
        dateDiv.appendChild(dateSpan);
        const h2 = document.createElement('h2');
        h2.innerText = title;
        const span = document.createElement('span');
        span.innerText = text;
        this.post.appendChild(pfpUsername);
        this.post.appendChild(dateDiv);
        this.post.appendChild(h2);
        this.post.appendChild(span);
        posts.push(this);
    }

    appendTo(main) {
        main.appendChild(this.post);
    }
}

const helloThere = new Post(pyrix25633, new Date('2024/07/27'), 'Hello there!',
`   Ruken and I have been quite busy in the last year because of school, so unfortunately development has been really slow.
    I'm happy to inform you that I graduated in Computer Science with a grade of "100 cum laude" and I will study computer, communications and electronics engineering at the University of Trento (IT).
    I'm currently working on updating all the mods to 1.20.6 and 1.21 (if possible) and there are two interesting mods work in progress, we will update you in due time.
    Regards, Pyrix25633 from Rubyper Studios.`
);
const starWarsCloneWars = new Post(pyrix25633, new Date('2023/01/13'), 'Star Wars Clone Wars',
`   I'm happy to announce that Star Wars Clone Wars, one of my mods, is now a Rupyber Studios project, 1.18.2 and 1.19.2 releases are now work in progress!
    Regards, Pyrix25633 from Rubyper Studios.`
);
const fbiAndSwatArmors = new Post(pyrix25633, new Date('2022/12/29'), 'FBI And SWAT Armors',
`   I'm happy to announce that we will soon release a new mod to add FBI and SWAT armors to the game!
    Regards, Pyrix25633 from Rubyper Studios.`
);
const vanillaPlus = new Post(pyrix25633, new Date('2022/09/04'), 'Vanilla Plus',
`   I'm happy to announce that my mod, Vanilla Plus, is now a Rupyber Studios project, a new version is now work in progress!
    Regards, Pyrix25633 from Rubyper Studios.`
);
const websiteIsNowPublic = new Post(pyrix25633, new Date('2022/05/19'), 'Website is now public',
`   Our website is now public, that means that if you search "Rupyber Studios" on Google you will be able to find our home page and more!
    Regards, Pyrix25633 from Rubyper Studios.`
);
const delayedImprovedEndBeta = new Post(pyrix25633, new Date('2022/05/08'), 'Delayed Improved End Beta',
`   We are sorry to inform you that we decided to delay the Beta Release of the Improved End mod because of some technical delays and some personal commitments. The Beta Release is now planned for 10 August 2022 instead of 1 August 2022.
    Regards, Pyrix25633 from Rubyper Studios.`
);

const main = new Main(match == null ? posts.splice(0, 2) : posts);