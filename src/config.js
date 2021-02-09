const gallery = [ // galley image list
  require('./Image/gallery/1.png'),
  require('./Image/gallery/2.jpg'),
  require('./Image/gallery/3.jpg'),
  require('./Image/gallery/4.jpg'),
  require('./Image/gallery/5.jpg'),
  require('./Image/gallery/6.jpg'),
];

export default {
  global: {
    googleMapAPIKey: 'AIzaSyDSjYdBUN_NDRJQShxs0ugvMBV2goZvT2o',
    comment: {
      livere: {
        enable: false, // if false, not rendering livere comment component
        service: 'city',
        uid: 'MTAyMC8yNTYzNi8yMjMy',
      },
      facebook: {
        enable: false, // if false, not rendering facebook comment component
        appId: '1535680996513864',
      },
    },
  },
  title: 'Wedding Invitation', // recomanded English
  wedding: {
    place: {
      name: '예쁜 예식장 3F 아름다운홀',
      address: '서울 영등포구 여의도동 60 63빌딩',
      latitude: 37.51990006878117,
      longitude: 126.94020220536675,
    },
    at: '2018-01-27 12:00',
  },
  bridal: {
    name: '장멍수',
    image: require('./Image/tom.png'),
    phone: '+8201033719178',
    facebook: false, // if false, not showing facebook icon
    father: '아빠',
    mother: '엄마',
    position: '장남',
  },
  groom: {
    name: '장맹은',
    image: require('./Image/jerry.png'),
    phone: '+821022222222',
    facebook: false,
    father: '아버님',
    mother: '어머님',
    position: '장녀',
  },
  image: {
    header: require('./Image/tomNjerry.png'),
    gallery: gallery.map(item => ({
      original: item,
      thumbnail: item,
    })),
  },
};
