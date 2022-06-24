const coachSection = document.querySelector('.card-container');

const coaches1 = [
  {
    name: 'Coach Sarki',
    position: 'Team Manager',
    remark: 'A well experienced coach, He coached the basket ball team for the Taraba State University from 2012 to 2018 then he joined the BAcademy',
    thumbnail: 'sarki.jpeg',
  },
  {
    name: 'Coach Kawu',
    position: 'Head Coach',
    remark: 'A well experienced coach, He coached the basket ball team for the Taraba State University from 2012 to 2018 then he joined the BAcademy',
    thumbnail: 'kawu.jpeg',
  },
  {
    name: 'Coach Umar',
    position: 'Assistant Coach',
    remark: 'Coach Anas played professionally in 6 different countries; and started his coaching career in 2016 as a graduate assistant for Mississippi State Men’s basketball team.',
    thumbnail: 'umar.jpg',
  },
];

const coaches2 = [
  {
    name: 'Coach Bassi',
    position: 'Assistant Coach',
    remark: 'Coach Anas played professionally in 6 different countries; and started his coaching career in 2016 as a graduate assistant for Mississippi State Men’s basketball team.',
    thumbnail: 'bassi.jpg',
  },
  {
    name: 'Coach Mai-abdu',
    position: 'Team Doctor',
    remark: ' Coach Sall specializes in youth player development with the Memphis Grizzlies (2018-2020), NBA Basketball Without Borders (2019- Present) and African Basketball Academy. (2020- Present)',
    thumbnail: 'abdallah.jpeg',
  },
  {
    name: 'Coach Mallam',
    position: 'Head Coach',
    remark: 'A well experienced coach, He coached the basket ball team for the Taraba State University from 2012 to 2018 then he joined the BAcademy',
    thumbnail: 'mallam.jpg',
  },
];

for (let i = 0; i < coaches1.length; i += 1) {
  const coachContainer = document.createElement('div');
  coachContainer.innerHTML = `
  <div class="card-section">
    <div class="card">
      <div class="card-img">
        <img src="images/${coaches1[i].thumbnail}" alt="Coach-image">
      </div>
      <div class="card-item">
        <h3>${coaches1[i].name}</h3>
        <article>${coaches1[i].position}</article>
        <p>${coaches1[i].remark}</p>
      </div>
    </div>
    <div class="card">
      <div class="card-img">
        <img src="images/${coaches2[i].thumbnail}" alt="Coach-image">
      </div>
      <div class="card-item">
        <h3>${coaches2[i].name}</h3>
        <article>${coaches2[i].position}</article>
        <p>${coaches2[i].remark}</p>
      </div>
    </div>
  </div>
    `;  
  coachContainer.classList.add('card-container-js');
  coachSection.appendChild(coachContainer);
}
