
## Introduce

## Preparations
```bash
$ sudo npm install -g yarn
$ yarn
```

## Start
```bash
$ npm start
```

## Build & Deploy (using GitHub Page)
```bash
$ npm run build
$ npm run deploy
```

## Edit Contents
- 대부분의 데이터는 `src/config.js` 에서 수정 할 수 있습니다.

### `config.js` (export default Object)
- `const gallery` (array): 갤러리에 불러올 이미지 리스트
- `global` (obejct)
  - `googleMapAPIKey`: 구글 지도를 사용하기 위해 [Google Map API Key](https://console.developers.google.com/apis)가 필요합니다. 사용하려는 Hostname이 Allow 되어야 합니다.
  - `comment` (object): [라이브리(LiveRe)](https://livere.com/) 플러그인과 [Facebook 댓글 플러그인](https://developers.facebook.com/docs/plugins/comments?locale=ko_KR)을 지원합니다. 각 오브젝트의 enable로 플러그인을 사용 할 것인지 결정 할 수 있습니다. 둘 다 사용하지 않거나 둘 다 사용 할 수도 있습니다.
    - LiveRe: 라이브리 사이트에서 발급 받은 uid와 서비스 요금제 (city or premium) 가 필요합니다. city는 무료이며 라이브리는 다수의 SNS 로그인과 익명 작성 기능을 지원합니다.
    - Facebook: 페이스북 개발자 센터에서 앱을 생성 후 발급되는 App Id를 필요로 합니다. 앱 설정에서 Hostname을 추가해줘야합니다.
  - `title` (string): 웹 페이지 상단에 헤더 바의 타이틀을 수정합니다. 영문 폰트로 설정되어 있으니 영문을 추천합니다.
- `wedding` (object): 예식과 관련된 정보입니다.
  - `place` (object): 예식장 정보를 입력합니다.
  - `at` (string): 예식 날짜와 시간을 `YYYY-MM-DD HH:mm` 형태로 입력합니다. 내부에서 [Moment.js](https://momentjs.com/) 를 사용해 `YYYY년 MM월 DD일 오전(후) HH시 mm분`의 형태로 만듭니다.
- `bridal` and `groom` (obejct): 신랑과 신부에 대한 정보입니다.
  - `image` (image): 프로필 사진의 경로입니다. CSS 고자라 1:1 비율의 사진을 추천합니다..
  - `phone` (string): 전화와 SMS 발송에 사용되는 연락처를 입력합니다.
  - `facebook` (string): 페이스북 주소를 입력합니다. `false` 일 경우 페이스북 아이콘이 나타나지 않습니다.
- `image` (object): 이미지 관련 설정입니다.
  - `header` (image): 헤더 아래에 나타다는 대문 이미지를 설정합니다.
  - `gallery` (array): 상단에서 정의한 `const gallery` 변수를 사용합니다.

### HTML & Open Graph
- HTML과 Open Grpah Meta Tag를 동적으로 변경하는 방법을 찾을 수 없어 `public/index.html`을 직접 수정해야합니다. 파일을 참고하세요.
# msNme
