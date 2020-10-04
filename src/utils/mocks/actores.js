const actoresMock = [{
    nombre: "Robert",
    apellido: "Donwey",
    sexo: "M",
    fechaNacimiento: "1976-12-12",
    foto: "https://avatarfiles.alphacoders.com/127/127275.jpg",
    paisOrigen: "estados unidos"
  }
]

export class ActoresServiceMock {
  async getActores() {
    return Promise.resolve(actoresMock);
  }
}
