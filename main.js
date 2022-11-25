const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const divContent = `<div class="mobile-div">
<div class="cross-icon">X</div>
<div class="home-about-container">
    <div class='mobile-homepage'><a href="./index.html">Homepage</a></div>
    <div class='mobile-about'><a href="./about.html">About</a></div>
</div>
</div>`;
menuDiv.innerHTML = divContent;
body.appendChild(menuDiv);
const hamburgerIcon = document.querySelector('.mobile-logo');
hamburgerIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
});

const crossClose = document.querySelector('.cross-icon');
crossClose.addEventListener('click', () => {
  menuDiv.style.display = 'none';
});

const homepageClose = document.querySelector('.mobile-homepage');
homepageClose.addEventListener('click', () => {
  menuDiv.style.display = 'none';
});

const aboutClose = document.querySelector('.mobile-about');
aboutClose.addEventListener('click', () => {
  menuDiv.style.display = 'none';
});

const body2 = document.querySelector('#speaker-mother-container');
const speakersSection = document.createElement('div');
speakersSection.className = 'speaker-container-big';

const speakers = [
  {
    id: 'speaker-1',
    Name: 'William Ruto',
    image: './images/William-ruto.webp',
    quote: 'Climates change is a great matter for concern, we need to act urgently',
    Description: 'Phd Havard University, Masters Degree',
  },
  {
    id: 'speaker-2',
    Name: 'James Mwangi',
    image: './images/Ramaphosa.jpg',
    quote: 'Climates change is a great matter for concern, we need to act urgently',
    Description: 'Phd Havard University, Masters Degree',
  },
  {
    id: 'speaker-3',
    Name: 'Cyril Ramaphosa',
    image: './images/Ramaphosa.jpg',
    quote: 'Climates change is a great matter for concern, we need to act urgently',
    Description: 'Phd Havard University, Masters Degree',
  },
  {
    id: 'speaker-4',
    Name: 'Teressa May',
    image: './images/Teressa-May.avif',
    quote: '',
    Description: 'Phd Havard University, Masters Degree',
  },
  {
    id: 'speaker-5',
    Name: 'David Rono',
    image: './images/William-ruto.webp',
    quote: 'Climates change is a great matter for concern, we need to act urgently',
    Description: 'Phd Havard University, Masters Degree',
  },
  {
    id: 'speaker-6',
    Name: 'Tedrose Guteress',
    image: './images/hz-tedros2.jpg',
    quote: 'Climates change is a great matter for concern, we need to act urgently',
    Description: 'Phd Havard University, Masters Degree',
  },

];
const speakerArray = [];
speakers.forEach((item) => {
  const speakerDispaly = `<div><img class="speaker-image" src="${item.image}" alt="${item.Name}"></div>
    <div class="speaker-description">
        <div class="speaker-name">${item.Name}</div>
        <div class="profession-des">${item.Description}</div>
        <div class="speaker-content">${item.quote}</div>
    </div>`;
  speakerArray.push(speakerDispaly);
});

for (let i = 0; i < speakers.length; i += 1) {
  speakers[i].id = document.createElement('div');
  speakers[i].id.className = 'speaker-container';
  speakers[i].id.innerHTML = speakerArray[i];
  body2.appendChild(speakers[i].id);
}
