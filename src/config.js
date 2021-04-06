const gallery = [ // galley image list
  require('./Image/gallery/list01.JPG'),
  require('./Image/gallery/list02.JPG'),
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
      name: '보타닉 웨딩홀 B1',
      address: '서울시 강서구 마곡나루역',
      latitude: 37.51990006878117,
      longitude: 126.94020220536675,
    },
    at: '2021-11-07 15:30',
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
    position: '말썽꾸러기',
  },
  image: {
    header: require('./Image/tomNjerry.png'),
    gallery: gallery.map(item => ({
      original: item,
      thumbnail: item,
    })),
  },
};
