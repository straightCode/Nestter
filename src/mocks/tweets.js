const faker = require('faker');

const tweets = new Array(10).fill(null).map(e => {
  return {
    _id: faker.datatype.uuid(),
    createdAt: faker.date.recent(2),
    content: {
      text: faker.lorem.words(Math.random()*45),
      photo: {
        url: faker.image.image(),
        hasPhoto: Math.random() > 0.5,
      },
    },
    statistic: {
      isLicked: false,
      isReplied: false,
      isRetweeted: false,
      replies: faker.datatype.number(1200),
      retweets: faker.datatype.number(1200),
      lickes: faker.datatype.number(1200),
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