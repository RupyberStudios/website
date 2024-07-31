const beta = { title: 'Beta Release', version: '0.1.0', class: 'beta' };
const release = { title: 'Official Release', version: '1.0.0', class: 'release' };
const discordServer = 'Rupyber Studios Discord Server';

class Event {
  event;

  constructor(id, release, info, description) {
    this.event = document.createElement('div');
    this.event.classList.add('box', 'background');
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.alt = id.toUpperCase().replaceAll('_', ' ') + ' ' + release.title + ' Logo';
    logo.src = '../../img/' + id + '_' + release.version + '.png';
    const h2 = document.createElement('h2');
    h2.classList.add(release.class);
    h2.innerText = release.title;
    const date = document.createElement('div');
    date.classList.add('container', 'icon-span');
    const dateIcon = document.createElement('img');
    dateIcon.classList.add('icon');
    dateIcon.alt = 'Date Icon';
    dateIcon.src = '../../img/date.svg';
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('small');
    dateSpan.innerText = 'On: ' + info.dateTime.toLocaleDateString('en-ZA');
    date.appendChild(dateIcon);
    date.appendChild(dateSpan);
    const time = document.createElement('div');
    time.classList.add('container', 'icon-span');
    const timeIcon = document.createElement('img');
    timeIcon.classList.add('icon');
    timeIcon.alt = 'Time Icon';
    timeIcon.src = '../../img/time.svg';
    const timeSpan = document.createElement('span');
    timeSpan.classList.add('small');
    timeSpan.innerText = 'At: ' + info.dateTime.toLocaleTimeString('en-ZA');
    time.appendChild(timeIcon);
    time.appendChild(timeSpan);
    const location = document.createElement('div');
    location.classList.add('container', 'icon-span');
    const locationIcon = document.createElement('img');
    locationIcon.classList.add('icon');
    locationIcon.alt = 'Location Icon';
    locationIcon.src = '../../img/location.svg';
    const locationSpan = document.createElement('span');
    locationSpan.classList.add('small');
    locationSpan.innerText = 'In: ' + info.location;
    location.appendChild(locationIcon);
    location.appendChild(locationSpan);
    const descriptionSpan = document.createElement('span');
    descriptionSpan.innerText = description;
    this.event.appendChild(logo);
    this.event.appendChild(h2);
    this.event.appendChild(date);
    this.event.appendChild(time);
    this.event.appendChild(location);
    this.event.appendChild(descriptionSpan);
  }

  appendTo(main) {
    main.appendChild(this.event);
  }
}

const minecraftLegendsModBeta = new Event('minecraft_legends_mod', beta, {dateTime: new Date('2022/10/31 14:00 UTC'),
  location: discordServer}, 'The first Beta version of Minecraft Legends Mod released to public.'
);
const improvedEndRelease = new Event('improved_end', release, {dateTime: new Date('2022/09/01 15:00 UTC'),
  location: discordServer}, 'The first Official version of Improved End released to public.'
);
const improvedEndBeta = new Event('improved_end', beta, {dateTime: new Date('2022/08/10 15:00 UTC'),
  location: discordServer}, 'The first Beta version of Improved End released to public.'
);

const main = new Main([minecraftLegendsModBeta, improvedEndRelease, improvedEndBeta]);