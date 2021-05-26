const faker = require('faker');

const recomendations = new Array(3).fill(null).map(e => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.lorem.word(),
    avatar: faker.image.avatar(),
  }
})

export default recomendations;