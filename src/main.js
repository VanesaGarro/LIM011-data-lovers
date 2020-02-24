import POTTER from './data/potter/potter.js';
import {
  agregarNewData, filtrar, searchName, filterPatronus, filterVarita,
} from './data.js';

const newData = agregarNewData(POTTER);

const mostrarInicio = () => {
  let res = '';
  res += `<video id="video" autoplay muted loop>
     <source src="/imagenes/videofondo.mp4" />
     </video>
    `;
  document.querySelector('#paint-template').innerHTML = res;
};

const DataforCharacter = (dataPotter) => {
  const template = document.createElement('div');
  template.className = 'template-holder-character';
  template.innerHTML += `
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
    `;
  return template;
};
const DataforPatronus = (dataPotter) => {
  const template = document.createElement('div');
  template.className = 'template-contairner-patronus';
  let patronusH = '';
  patronusH += `
      <div class="card-container-patronus">
      <div class="card-patronus"> 
      <h2 id="letter1"> ❖ ${dataPotter.name} ❖ </h2>
      <img class="img-patronus" src='${dataPotter.image}'/>
      <h2 id="letter1"> PATRONUS</h2>  
      <h2 id="letter1"> ☆ ${dataPotter.patronus} ☆ </h2>
        </div>  
        </div>  
      `;
  template.innerHTML = patronusH;
  return template;
};


const DataforWand = (dato) => {
  const template = document.createElement('div');
  template.className = 'template';
  let varitaH = '';
  varitaH = `
            <div class = "box-wands">
            <div class="imagenes"><img src="../imagenes/varita.gif"></div>
             <label>  ${dato.name}
             <div class = "icono-personajes"> <img src=${dato.image}> </div>
            <button> Madera: ${dato.wood}</button>
            <label> Núcleo :${dato.core}
            <div class="imagenes-nucleo"><img src=${dato.nucleo}></div>
            <label> Longitud: ${dato.length}
            <div class="icono-longitud"><img src="../imagenes/longitud.PNG"></div>
            
            </div>
            `;
  template.innerHTML = varitaH;
  return template;
};

const dataPersonaje = (data) => {
  document.querySelector('#paint-template').innerHTML = '';
  data.forEach((dataPotter) => {
    document.querySelector('#paint-template').appendChild(DataforCharacter(dataPotter));
  });
};
// foreach de patronus
const datapatronus = (data) => {
  document.querySelector('#paint-template').innerHTML = '';
  data.forEach((obj) => {
    document.querySelector('#paint-template').appendChild(DataforPatronus(obj));
  });
};
// foreach de varitas
const dataVarita = (data) => {
  document.querySelector('#paint-template').innerHTML = '';
  data.forEach((obj) => {
    document.querySelector('#paint-template').appendChild(DataforWand(obj));
  });
};
// DO RETURN TO DATA
document.querySelector('#menu-home').addEventListener('click', () => {
  document.getElementById('input-search').classList.add('ocultar');
  document.getElementById('rol').classList.add('ocultar');
  document.getElementById('house').classList.add('ocultar');
  document.getElementById('core').classList.add('ocultar');
  mostrarInicio();
});

document.querySelector('#personajes').addEventListener('click', () => {
  document.getElementById('input-search').classList.remove('ocultar');
  document.getElementById('rol').classList.remove('ocultar');
  document.getElementById('house').classList.remove('ocultar');
  document.getElementById('core').classList.add('ocultar');
  dataPersonaje(newData);
});
document.querySelector('#rol').addEventListener('change', () => {
  const seleccionarcasa = document.querySelector('#rol').value;
  const muestracasa = filtrar(newData, 'rol', seleccionarcasa);
  dataPersonaje(muestracasa);
});
document.querySelector('#house').addEventListener('change', () => {
  const seleccionarcasa = document.querySelector('#house').value;
  const muestracasa = filtrar(newData, 'house', seleccionarcasa);
  dataPersonaje(muestracasa);
});

document.querySelector('#input-search').addEventListener('input', () => {
  const name = document.getElementById('input-search').value;
  const buscar = searchName(newData, name);
  dataPersonaje(buscar);
});
document.querySelector('#varitas').addEventListener('click', () => {
  document.getElementById('core').classList.remove('ocultar');
  document.getElementById('input-search').classList.add('ocultar');
  document.getElementById('rol').classList.add('ocultar');
  document.getElementById('house').classList.add('ocultar');
  const filtrarVarita = filterVarita(newData);
  dataVarita(filtrarVarita);
});
document.querySelector('#patronus').addEventListener('click', () => {
  document.getElementById('input-search').classList.add('ocultar');
  document.getElementById('rol').classList.add('ocultar');
  document.getElementById('house').classList.add('ocultar');
  document.getElementById('core').classList.add('ocultar');
  const filtrarpatronuss = filterPatronus(newData);
  datapatronus(filtrarpatronuss);
});

document.querySelector('#core').addEventListener('change', () => {
  const seleccionarNucleo = document.querySelector('#core').value;
  const muestracore = filtrar(newData, 'core', seleccionarNucleo);
  dataVarita(muestracore);
});
