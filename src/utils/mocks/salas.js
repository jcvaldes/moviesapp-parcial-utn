const cinesMock = [{
    id: 1,
    nombre: "Cine Atlas Lavalle",
    foto: "https://filer.365.clarin.com/filer/materiales-salesforce/prod/201701/06/201701-06-1f1f0827-4a40-483e-83f4-d4c4bd358d03.jpg",
    paisOrigen: "Argentina",
    peliculas: [{
      id: 1,
      nombre: "Rapido y Furiosos 10",
      tipo: "otros",
      fechaEstreno: "2000-12-02",
      cantidadPublico: 100000,
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
      nombre: "DeadPool 2",
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
    }]
  }, {
    id: 2,
    nombre: "Village Cines Avellaneda",
    foto: "https://lh3.googleusercontent.com/proxy/LLtzCQNCWlrku_dGojYwfv_TMEQ72swn3EhTUoH4YNqExygyeNE7M1TrNv0sWVEUzRPXnkNxOfD-Yke8xqKowLbyrn8M63K9WK3EK0H2SvhCNu_Cqw",
    paisOrigen: "Argentina",
    peliculas: [{
      id: 1,
      nombre: "Rapido y Furiosos 10",
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
    }]
  },
  {
    id: 3,
    nombre: "Village Cines Puerto Madero",
    foto: "https://lh3.googleusercontent.com/proxy/LLtzCQNCWlrku_dGojYwfv_TMEQ72swn3EhTUoH4YNqExygyeNE7M1TrNv0sWVEUzRPXnkNxOfD-Yke8xqKowLbyrn8M63K9WK3EK0H2SvhCNu_Cqw",
    paisOrigen: "Argentina",
    peliculas: [{
      id: 1,
      nombre: "Rapido y Furiosos 10",
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
    }]
  },
  {
    id: 4,
    nombre: "Village Cines Recoleta",
    foto: "https://lh3.googleusercontent.com/proxy/LLtzCQNCWlrku_dGojYwfv_TMEQ72swn3EhTUoH4YNqExygyeNE7M1TrNv0sWVEUzRPXnkNxOfD-Yke8xqKowLbyrn8M63K9WK3EK0H2SvhCNu_Cqw",
    paisOrigen: "Argentina",
    peliculas: [{
      id: 1,
      nombre: "Rapido y Furiosos 10",
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
    }]
  },
  {
    id: 5,
    nombre: "Monumental Lavalle",
    foto: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/1b/d1/2c/cine-multiplex-lavalle.jpg",
    paisOrigen: "Argentina",
    peliculas: [{
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
    }]
  },
]

export class CinesServiceMock {
  async getCines() {
    return Promise.resolve(cinesMock);
  }
}
