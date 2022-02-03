// const obtenerInformacion = (text) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, Math.random() * 1000);
//   });
// };

// const mostrarData = async () => {
//   let data1 = await obtenerInformacion(`1: Willy`);
//   let data2 = await obtenerInformacion(`2: Mitre`);
//   let data3 = await obtenerInformacion(`3: Vikingo`);
//   console.log(data1);
//   console.log(data2);
//   console.log(data3);
// };

// mostrarData();

const materiasHTML = document.querySelector(`.materias`);

const materias = [
  {
    nombre: `Física 4`,
    nota: 7,
  },
  {
    nombre: `Cálculo 3`,
    nota: 8,
  },
  {
    nombre: `Bases de Datos 3`,
    nota: 9,
  },
  {
    nombre: `Matemáticas discretas 2`,
    nota: 7,
  },
  {
    nombre: `Programación 4`,
    nota: 8,
  },
];

const obtenerMateria = (id) => {
  return new Promise((resolve, reject) => {
    let materia = materias[id];
    if (materia == undefined) reject(`La materia no existe`);
    else
      setTimeout(() => {
        resolve(materia);
      }, Math.random() * 1400);
  });
};

const devolverMaterias = async () => {
  let materia = [];
  for (let i = 0; i < materias.length; i++) {
    materia[i] = await obtenerMateria(i);
    let newHTMLCode = `<div class="materia">
    <div class="nombre div-interno">${materia[i].nombre}</div>
    <div class="nota div-interno">${materia[i].nota}</div>
  </div>`;
    materiasHTML.innerHTML += newHTMLCode;
  }
};

devolverMaterias();
