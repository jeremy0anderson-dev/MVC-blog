const { Post } = require('../models');

const postData = [
  {
    postTitle: 'Donec posuere metus vitae ipsum.',
    postContent: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 10
  },
  {
    postTitle: 'Morbi non quam nec dui luctus rutrum.',
    postContent: 'https://nasa.gov/donec.json',
    userId: 8
  },
  {
    postTitle: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    postContent: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    userId: 1
  },
  {
    postTitle: 'Nunc purus.',
    postContent: 'http://desdev.cn/enim/blandit/mi.jpg',
    userId: 4
  },
  {
    postTitle: 'Pellentesque eget nunc.',
    postContent: 'http://google.ca/nam/nulla/integer.aspx',
    userId: 7
  },
  {
    postTitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    postContent: 'https://stanford.edu/consequat.png',
    userId: 4
  },
  {
    postTitle: 'In hac habitasse platea dictumst.',
    postContent: 'http://edublogs.org/non/ligula/pellentesque.js',
    userId: 1
  },
  {
    postTitle: 'Morbi non quam nec dui luctus rutrum.',
    postContent: 'http://ucla.edu/consequat/nulla.html',
    userId: 1
  },
  {
    postTitle: 'Duis ac nibh.',
    postContent: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    userId: 9
  },
  {
    postTitle: 'Curabitur at ipsum ac tellus semper interdum.',
    postContent: 'https://reverbnation.com/ligula/sit.jpg',
    userId: 5
  },
  {
    postTitle: 'In hac habitasse platea dictumst.',
    postContent: 'http://china.com.cn/lectus/vestibulum.json',
    userId: 3
  },
  {
    postTitle: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    postContent: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    userId: 10
  },
  {
    postTitle: 'Donec dapibus.',
    postContent: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    userId: 8
  },
  {
    postTitle: 'Nulla tellus.',
    postContent: 'https://lycos.com/natoque/penatibus/et.html',
    userId: 3
  },
  {
    postTitle: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    postContent: 'https://gmpg.org/lorem.jpg',
    userId: 3
  },
  {
    postTitle:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    postContent: 'https://paginegialle.it/mattis/egestas.jsp',
    userId: 7
  },
  {
    postTitle: 'In hac habitasse platea dictumst.',
    postContent: 'http://wikia.com/turpis/eget.jpg',
    userId: 6
  },
  {
    postTitle: 'Etiam justo.',
    postContent: 'https://shareasale.com/quis.json',
    userId: 4
  },
  {
    postTitle: 'Nulla ut erat id mauris vulputate elementum.',
    postContent: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    userId: 6
  },
  {
    postTitle: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    postContent: 'https://java.com/at/nibh/in.png',
    userId: 7
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
