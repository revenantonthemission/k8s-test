const express = require('express');                      // Express 웹 프레임워크 모듈을 불러옵니다
const app = express();                                   // Express 애플리케이션 인스턴스를 생성합니다
const port = process.env.PORT || 3000;                   // 포트를 환경변수에서 가져오고, 없으면 기본값 3000을 사용합니다

app.get('/', (_, res) => {                               // 루트 경로("/")로 요청이 들어오면 실행되는 핸들러입니다
  res.send('Hello from Github Actions + ArgoCD CI/CD!'); // 응답으로 간단한 문자열을 보냅니다
});

app.listen(port, () => {                                 // 지정된 포트에서 서버를 시작합니다
  console.log(`App listening on port ${port}`);          // 서버가 시작되었음을 콘솔에 출력합니다
});
