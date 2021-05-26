const faker = require('faker');

const trends = new Array(5).fill(null).map(e => {
  return {
    _id: faker.datatype.uuid(),
    country: faker.address.country(),
    tweets: faker.random.number(10000),
    name: faker.random.word(),
  }
});

export default trends;