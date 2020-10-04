const peliculasMock = [{
    id: 1,
    nombre: "Rapido y Furiosos",
    tipo: "otros",
    fechaEstreno: "2000-12-03",
    cantidadPublico: 300000,
    fotoPelicula: "https://static.misionesonline.news/wp-content/uploads/2020/03/16084200/rapidos-y-furiosos-9-coronavirus.jpeg",
    actores: [{
        id: 1,
        nombre: "Vin Disel",
        apellido: "Perez",
        sexo: "Masculino",
        fechaNacimiento: "04/06/2000",
        foto: "https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2020/03/12164026/Vin_Diesel_Countdown_Rep2.jpg"
      },
      {
        id: 2,
        nombre: "Paul",
        apellido: "Walker",
        sexo: "Masculino",
        fechaNacimiento: "04/06/2000",
        foto: "https://zolfm.com/admin/imagenes/paul_walker_1-1572955487.jpg"
      }
    ]
}, {
  id: 2,
  nombre: "DeadPool",
  tipo: "comedia",
  fechaEstreno: "2010-12-11",
  cantidadPublico: 560000,
  fotoPelicula: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  actores: [{
    id: 1,
    nombre: "Ryan",
    apellido: "Reinolds",
    sexo: "Masculino",
    fechaNacimiento: "22/02/1996",
    foto: "https://upload.wikimedia.org/wikipedia/commons/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg"
    }]
  }
]

export class PeliculasServiceMock {
  async getPeliculas() {
    return Promise.resolve(peliculasMock);
  }
}
