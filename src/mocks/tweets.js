const faker = require('faker');

const tweets = new Array(10).fill(null).map(e => {
  return {
    _id: faker.datatype.uuid(),
    createdAt: faker.date.recent(2),
    content: {
      text: faker.lorem.words(Math.random()*45),
      photo: faker.image.image(),
    },
    user: {
      avatarUrl: faker.image.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      _nickname: faker.internet.userName(),
      avatar: faker.image.avatar(),
    },
  }
});


export default tweets;