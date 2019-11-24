import POTTER from './data/potter/potter.js';
import {
  // eslint-disable-next-line import/named
  agregarNewData, filtrar, searchName, filterPatronus, filterVarita,
} from './data.js';

console.log(filterPatronus(agregarNewData(POTTER)));
console.log(filterVarita(agregarNewData(POTTER)));
const newData = agregarNewData(POTTER);
const traerData = (dataPotter) => {
  const template = document.createElement('article');
  template.className = 'card-data-personajes';
  template.innerHTML = `
    <div class = "card-holder">
    <div class="card">
    <div class="front">
      <div class="imagenes-casa"><img src=${dataPotter.imagenCasa}></div>
      <h2>${dataPotter.name}</h2>
      <div class ="imagenes"><img src=${dataPotter.image}></div>
      </div>
      <div class="back">
      <p> <label> Specie: ${dataPotter.species}</p>
      <p> <label> Gender: ${dataPotter.gender}</p>
      <p> <label> House: ${dataPotter.house}</p>
      <p> <label> Rol: ${dataPotter.rol}</p>
      <p> <label> Date Of Birth: ${dataPotter.dateOfBirth}</p>
      <p> <label> Actor: ${dataPotter.actor}</p>
      </div>
      </div>
      </div>`;
  return template;
};

const traerpatronus = (dato) => {
  const template = document.createElement('div');
  template.className = 'template';
  let patronusH = '';
  patronusH += `<div  class="card-container-patronus">
      <div class="card-patronus"> 
        <img class="img-patronus" src='${dato.image}'/>
        <h1 id="letter1" >${dato.name}</h1>
        <h1 id="letter1" >-${dato.patronus}-</h1>
        <button class="boton" type='submit'>VER PATRONUS</button> 
        </div>  
        </div>  
        `;

  template.innerHTML = patronusH;
  return template;
};

const traerVaritas = (dato) => {
  const template = document.createElement('div');
  template.className = 'template';
  let varitaH = '';
  varitaH += `
            <div class = "box-wands">
            <div class="imagenes"><img src=img/varita.gif></div>
             <label>  ${dato.name}
             <div class = "icono-personajes"> <img src=${dato.image}> </div>
            <button> Madera: ${dato.wood}</button>
            <label> Núcleo :${dato.core}
            <div class="imagenes-nucleo"><img src=${dato.nucleo}></div>
            <label> Longitud: ${dato.length}
            <div class="icono-longitud"><img src=img/longitud.png></div>
            
            </div>
            `;
  template.innerHTML = varitaH;
  return template;
};
document.querySelector('#menu-home').addEventListener('click', () => {
  let res = '';
  res += `<video id="video" autoplay muted loop>
     <source src="img/videofondo.mp4" />
     </video>
    `;
  document.querySelector('#res').innerHTML = res;
});
// foreach de personajes
const dataPersonaje = (data) => {
  document.querySelector('#res').innerHTML = '';
  data.forEach((dataPotter) => {
    document.querySelector('#res').appendChild(traerData(dataPotter));
  });
};
// foreach de patronus
const datapatronus = (data) => {
  document.querySelector('#res').innerHTML = '';
  data.forEach((obj) => {
    document.querySelector('#res').appendChild(traerpatronus(obj));
  });
};
// foreach de varitas
const dataVarita = (data) => {
  document.querySelector('#res').innerHTML = '';
  data.forEach((obj) => {
    document.querySelector('#res').appendChild(traerVaritas(obj));
  });
};

document.querySelector('#personajes').addEventListener('click', () => {
  dataPersonaje(newData);
});
document.querySelector('#rol').addEventListener('change', () => {
  const seleccionarcasa = document.querySelector('#rol').value;
  const muestracasa = filtrar(newData, 'rol', seleccionarcasa);
  document.querySelector('#res').innerHTML = traerData(muestracasa);
});
document.querySelector('#input-search').addEventListener('input', () => {
  const name = document.getElementById('input-search').value;
  const buscar = searchName(newData, name);
  document.querySelector('#res').innerHTML = traerData(buscar);
});
document.querySelector('#varitas').addEventListener('click', () => {
  const filtrarVarita = filterVarita(newData);
  dataVarita(filtrarVarita);
});
document.querySelector('#patronus').addEventListener('click', () => {
  const filtrarpatronuss = filterPatronus(newData);
  datapatronus(filtrarpatronuss);
});
document.querySelector('#house').addEventListener('change', () => {
  const seleccionarcasa = document.querySelector('#house').value;
  const muestracasa = filtrar(newData, 'house', seleccionarcasa);
  document.getElementById('res').innerHTML = traerData(muestracasa);
});

document.querySelector('#core').addEventListener('change', () => {
  const seleccionarNucleo = document.querySelector('#core').value;
  const muestracore = filtrar(newData, 'core', seleccionarNucleo);
  document.getElementById('res').innerHTML = traerVaritas(muestracore);
});
