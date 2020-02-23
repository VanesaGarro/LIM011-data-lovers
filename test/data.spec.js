import {
  // eslint-disable-next-line max-len
  filtrar, searchName, agregarRol, agregarNewData, agregarVarita, agregarImagenCasa, filterPatronus, filterVarita,
} from '../src/data.js';

const input = [
  {
    name: 'Harry Potter',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '31-07-1980',
    yearOfBirth: 1980,
    ancestry: 'half-blood',
    eyeColour: 'green',
    hairColour: 'black',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    },
    patronus: 'stag',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Daniel Radcliffe',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  }];
const ouputinicio = [{
  imagenCasa: '/imagenes/casa/gryffindor.jpg',
  name: 'Harry Potter',
  image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  species: 'human',
  gender: 'male',
  house: 'Gryffindor',
  dateOfBirth: '31-07-1980',
  actor: 'Daniel Radcliffe',
  wood: 'holly',
  core: 'phoenix feather',
  length: 11,
  nucleo: '/imagenes/phoenix.jpg',
  rol: 'Student',
  patronus: 'stag',
}];
// IMAGENES Y ROL QUE SE AGREGA A LA ESCUELA
describe('La funcion AGREGAR ROL ingresa un objeto y retornar un string indicando el rol:estudiante,staff o si no tiene rol', () => {
  it('debería ser una función', () => {
    expect(typeof agregarRol).toBe('function');
  });
  it('debería ingresar el objeto con la propiedad hogwartsStudent y retonar un string student', () => {
    const inputes = { hogwartsStudent: true };
    expect(agregarRol(inputes)).toEqual('Student');
  });
  it('debería ingresar el objeto con la propiedad hogwartsStaff y retonar un string staff', () => {
    const inputpro = { hogwartsStaff: true };
    expect(agregarRol(inputpro)).toEqual('Staff');
  });
  it('debería ingresar el objeto con la propiedad hogwartsStudent hogwartsStaff indicando que ambos son falsos   y retonar un string que indique que no tiene rol ', () => {
    const inputnin = { hogwartsStudent: false, hogwartsStaff: false };
    expect(agregarRol(inputnin)).toEqual('no tiene rol');
  });
});
// IMAGENES QUE SE AGREGAN A EL TIPO DE CASA
describe('La funcion AGREGAR Imagen Casa ingresa un objeto y retornar un string indicando la imagen de la casa que corresponde', () => {
  it('debería ser una función', () => {
    expect(typeof agregarImagenCasa).toBe('function');
  });
  it('Debería ingresar un objeto con la propiedad house Gryffindor y retonar un string con la imagen que corresponde a la propiedad', () => {
    const inputImagenCasa = { house: 'Gryffindor' };
    expect(agregarImagenCasa(inputImagenCasa)).toEqual('/imagenes/casa/gryffindor.jpg');
  });
  it('Debería ingresar un objeto con la propiedad house Hufflepufft y retonar un string con la imagen que corresponde a la propiedad', () => {
    const inputImagenCasa = { house: 'Hufflepuff' };
    expect(agregarImagenCasa(inputImagenCasa)).toEqual('/imagenes/casa/Hufflepuff.jpg');
  });
  it('Debería ingresar un objeto con la propiedad house Ravenclaw y retonar un string con la imagen que corresponde a la propiedad', () => {
    const inputImagenCasa = { house: 'Ravenclaw' };
    expect(agregarImagenCasa(inputImagenCasa)).toEqual('/imagenes/casa/ravenclaw.jpg');
  });
  it('Debería ingresar un objeto con la propiedad house Slytherin y retonar un string con la imagen que corresponde a la propiedad', () => {
    const inputImagenCasa = { house: 'Slytherin' };
    expect(agregarImagenCasa(inputImagenCasa)).toEqual('/imagenes/casa/slytherin.png');
  });
  it('Debería ingresar un objeto con la propiedad house vacía y retonar un string con la imagen que corresponde a la propiedad', () => {
    const inputImagenCasa = { house: '' };
    expect(agregarImagenCasa(inputImagenCasa)).toEqual('/imagenes/pregunta.jpg');
  });
});
// IMAGENES QUE SE AGREGAN AL NUCLEO DE LA VARITA
describe('La funcion AGREGAR VARITA ingresa un objeto y retornar un string indicando la imagen que corresponde', () => {
  it('debería ser una función', () => {
    expect(typeof agregarVarita).toBe('function');
  });
  it('Debería ingresar un objeto con la propiedad core dragon heartstring y retonar un string con la imagen que corresponde a la propiedad', () => {
    const inputdra = { wand: { core: 'dragon heartstring' } };
    expect(agregarVarita(inputdra)).toEqual('/imagenes/dragon.jpg');
  });
  it('Debería ingresar un objeto con la propiedad core unicorn tail-hair y retonar un string con la imagen que corresponde a la propiedad', () => {
    const inputuni = { wand: { core: 'unicorn tail-hair' } };
    expect(agregarVarita(inputuni)).toEqual('/imagenes/unicorn.jpg');
  });
  it('Debería ingresar un objeto con la propiedad core phoenix y retonar un string con la imagen que corresponde a la propiedad', () => {
    const inputpho = { wand: { core: 'phoenix feather' } };
    expect(agregarVarita(inputpho)).toEqual('/imagenes/phoenix.jpg');
  });
  it('Debería ingresar un objeto con la propiedad core vacio y retonar un string vacio ', () => {
    const inputpho = { wand: { core: '' } };
    expect(agregarVarita(inputpho)).toEqual('');
  });
});

// LA NUEVA DATA CREADA CON EL QUE SE VA A TRABAJAR
describe('La función AGREGAR NEWDATA Debería ingresar el array de la data potter y retornar un nuevo array', () => {
  it('es una función', () => {
    expect(typeof agregarNewData).toBe('function');
  });
  it('Debería ingresar el array de la data potter y retornar un nuevo array', () => {
    expect(agregarNewData(input)).toEqual(ouputinicio);
  });
});
// FILTRADOS
describe('filtrar po propiedad ', () => {
  it('debería ser una función', () => {
    expect(typeof filtrar).toBe('function');
  });
  // para filtro según casas
  it('debería ingresar un array con los objetos cuya propiedad es House y retonar el array con la propiedad filtrado por nombre  GRYFFINDOR', () => {
    const inputHouse = [{ name: 'Harry Potter', house: 'Gryffindor' }, { name: 'Cho Chang', house: 'Ravenclaw' }, { name: 'Hermonie Granger', house: 'Gryffindor' }];
    const outputHouse = [{ name: 'Harry Potter', house: 'Gryffindor' }, { name: 'Hermonie Granger', house: 'Gryffindor' }];
    expect(filtrar(inputHouse, ['house'], 'Gryffindor')).toEqual(outputHouse);
  });
  it('debería ingresar un array con los objetos cuya propiedad Rol y retonar el array con la propiedad filtrado por nombre  Student', () => {
    const inputRol = [{ name: 'Luna Lovegood', rol: 'Student' }, { name: 'Cho Chang', rol: 'Student' }, { name: 'Hermonie Granger', rol: 'Staff' }];
    const outputRol = [{ name: 'Luna Lovegood', rol: 'Student' }, { name: 'Cho Chang', rol: 'Student' }];
    expect(filtrar(inputRol, ['rol'], 'Student')).toEqual(outputRol);
  });
  it('retorna un array filtrado por varita ', () => {
    const inputvarita = [{ core: 'phoenix feather', length: 11 }, { core: 'phoenix feather', length: 13.5 }, { core: 'dragon heartstring', length: 10.25 }];
    const outputvarita = [{ core: 'phoenix feather', length: 11 }, { core: 'phoenix feather', length: 13.5 }];
    expect(filtrar(inputvarita, ['core'], 'phoenix feather')).toEqual(outputvarita);
  });
});

describe('busqueda', () => {
  it('debería ser una función', () => {
    expect(typeof searchName).toBe('function');
  });

  it('debería retornar los elementos que coincidan tanto en nombre o apellido con el input en mayuscula', () => {
    const dataBM = [{ name: 'Harry Potter', house: 'Gryffindor' }, { name: 'Cho Chang', house: 'Ravenclaw' }, { name: 'Draco Malfoy', house: 'Gryffindor' }];
    const esperoBM = [{ name: 'Harry Potter', house: 'Gryffindor' }, { name: 'Cho Chang', house: 'Ravenclaw' }];
    expect(searchName(dataBM, 'HA')).toEqual(esperoBM);
  });

  it('debería retornar los elementos que coincidan tanto en nombre o apellido con el input en minuscula', () => {
    const dataBm = [{ name: 'Harry Potter', house: 'Gryffindor' }, { name: 'Cho Chang', house: 'Ravenclaw' }, { name: 'Draco Malfoy', house: 'Gryffindor' }];
    const esperoBm = [{ name: 'Harry Potter', house: 'Gryffindor' }, { name: 'Cho Chang', house: 'Ravenclaw' }];
    expect(searchName(dataBm, 'ha')).toEqual(esperoBm);
  });
});

describe('La función filtrar Patronus debería ingresar el array potter y filtrarme el objeto con la propiedad patronus, todos aquellos que no estén vacio', () => {
  it('debería ser una función', () => {
    expect(typeof filterPatronus).toBe('function');
  });

  it('debería retornar un array con la propiedad  patronus el cual es diferente a vacio', () => {
    const dataBM = [{ name: 'Harry Potter', patronus: 'stag' }, { name: 'Draco Malfoy', patronus: '' }];
    const esperoBM = [{ name: 'Harry Potter', patronus: 'stag' }];
    expect(filterPatronus(dataBM, 'patronus')).toEqual(esperoBM);
  });
});

describe('La función filtrar Varita debería ingresar el array potter y filtrarme los objetos con la propiedad wand, core, legth, todos aquellos que no estén vacio', () => {
  it('debería ser una función', () => {
    expect(typeof filterVarita).toBe('function');
  });

  it('debería retornar un array con la propiedad  wan, core, legth', () => {
    const dataBM = [{
      name: 'Minerva McGonagall', wood: '', core: '', length: '',
    }, {
      name: 'Draco Malfoy', wood: 'hawthorn', core: 'unicorn tail-hair', length: 10,
    }, {
      name: 'Rubeus Hagrid', wood: 'oak', core: '', length: 16,
    }];
    const esperoBM = [{
      name: 'Draco Malfoy', wood: 'hawthorn', core: 'unicorn tail-hair', length: 10,
    }, {
      name: 'Rubeus Hagrid', wood: 'oak', core: '', length: 16,
    }];
    expect(filterVarita(dataBM, 'wood', 'core', 'length')).toEqual(esperoBM);
  });
});

describe('La función filtrar Varita debería ingresar el array potter y filtrarme los objetos con la propiedad wand, core, legth, todos aquellos que no estén vacio', () => {
    it('debería ser una función', () => {
        expect(typeof filterVarita).toBe('function');
    });

    it('debería retornar un array con la propiedad  wan, core, legth', () => {
        const dataBM = [{
            name: 'Minerva McGonagall',
            wood: '',
            core: '',
            length: '',
        }, {
            name: 'Draco Malfoy',
            wood: 'hawthorn',
            core: 'unicorn tail-hair',
            length: 10,
        }, {
            name: 'Rubeus Hagrid',
            wood: 'oak',
            core: '',
            length: 16,
        }];
        const esperoBM = [{
            name: 'Draco Malfoy',
            wood: 'hawthorn',
            core: 'unicorn tail-hair',
            length: 10,
        }, {
            name: 'Rubeus Hagrid',
            wood: 'oak',
            core: '',
            length: 16,
        }];
        expect(filterVarita(dataBM, 'wood', 'core', 'length')).toEqual(esperoBM);
    });
});