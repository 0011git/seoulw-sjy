[![seoulw_logo](https://github.com/user-attachments/assets/345224b4-4917-4c46-84f2-7eec5f876b4a)](https://seoulw.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-181717?style=flat-square&logo=redux&logoColor=white) ![MUI](https://img.shields.io/badge/Material_UI-0078D4?style=flat-square&logo=mui&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white) ![PWA](https://img.shields.io/badge/PWA-1A73E8?style=flat-square&logo=pwa&logoColor=white) ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-5A29E6?style=flat-square&logo=axios&logoColor=white) ![xml-js](https://img.shields.io/badge/xml--js-F9A826?style=flat-square&logo=javascript&logoColor=white) ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-892B56?style=flat-square&logo=sweetalert2&logoColor=white) ![NextAuth](https://img.shields.io/badge/NextAuth.js-000000?style=flat-square&logo=next.js&logoColor=white)


## 🌱 소개
서울 문화 공연 정보 PWA 사이트 **Seoul, W**입니다.

![seoulw_sub (3)](https://github.com/user-attachments/assets/060e9daa-d00c-49b2-8adb-213097e32366)


## 🔗 배포 URL
<https://seoulw.vercel.app/>



## 📑 요약
### 1. **주제**
   - 서울 문화 공연 정보 제공 모바일(480px) 사이트

### 2. **목표**
   - **서울 문화 정보 제공**: 서울에서 열리는 공연, 전시, 콘서트 등 다양한 문화 행사 정보를 실시간으로 확인
   - **회원가입 및 로그인 기능**: 회원가입 및 로그인, SNS 연동 로그인 서비스를 제공
   - **회원 전용 서비스 추가**: 회원전용 서비스인 리뷰 작성과 북마크 등록/삭제 기능을 제공, 사용자 경험 강화

### 3. **핵심 기능**
   - KOPIS 오픈 API 활용 
   - 로그인 (자체, sns) 
   - 리뷰 작성 및 북마크 등록/삭제
     
### 4. **주요 기술 스택**
   - Next.js, Firebase, Vercel
     
### 5. **기간 및 인원**
   - 2024.09.30 ~ 2024.10.17 (18일), 4인



## 🙌 담당 직무
| 이름   | GitHub                              | 직무              |해당 |
|:--------:|:---------------------------------------:|:-------------------:|:----:|
| 고유나 | [tolix-a](https://github.com/tolix-a) | 기능개발, API     |     |
| 박지연 | [pjiyeon90](https://github.com/pjiyeon90) | 디자인, 로그인    |     |
| **성주영** | [0011git](https://github.com/0011git) | 기획, 팀장            | ✔    |
| 허다영 | [Pon119](https://github.com/Pon119) | 서버관리, 배포    |     |



## 💡 주요 기능
### 1. 공연예술통합전산망(KOPIS) API 활용
   - [KOPIS API](https://www.kopis.or.kr/por/cs/openapi/openApiList.do?menuId=MNU_00074)를 활용해 메인 컨텐츠를 제공

### 2. 카카오맵 API 지도
   - [카카오맵 API](https://apis.map.kakao.com/web/)를 사용해 디테일 페이지에서 공연장 지도 출력

### 3. 회원가입 및 로그인
   - sns 로그인 (Github, 네이버, 구글) 지원
   - Next Auth 사용
   - 이메일 등의 입력값 유효성 검사
   - DB로 Google Firebase 사용

### 4. 리뷰 작성 및 북마크 기능
   - 회원 전용으로 리뷰 작성 및 북마크 등록/삭제 기능 제공
   - DB로 Google Firebase를 사용



## 💼 폴더 구조
    📦seoulw
     ┣ 📂.next
     ┣ 📂public
     ┃ ┣ 📂assets
     ┃ ┃ ┣ 📂icons
     ┃ ┃ ┗ 📂images
     ┃ ┣ 📜sw.js            # PWA
     ┃ ┣ 📜sw.js.map        # PWA
     ┃ ┣ 📜workbox.js       # PWA
     ┃ ┣ 📜workbox.js.map   # PWA
     ┃ ┗ 📜manifest.json    # PWA
     ┣ 📂src
     ┃ ┣ 📂components       # 컴포넌트 폴더
     ┃ ┣ 📂lib
     ┃ ┃ ┗ 📜firebase.js    # DB
     ┃ ┣ 📂pages            # 페이지 폴더
     ┃ ┃ ┣ 📂api
     ┃ ┃ ┃ ┣ 📂auth
     ┃ ┃ ┃ ┃ ┗ 📜[...nextauth].js    # 로그인 관련 (Next Auth)
     ┃ ┃ ┃ ┣ 📜api.js       # KOPIS API
     ┃ ┃ ┃ ┗ 📜mapapi.js    # 카카오맵 API
     ┃ ┣ 📂store            # zustand 전역 상태 관리
     ┃ ┣ 📂styles           # scss
     ┃ ┗ 📂utils            # api 함수, xmlToJson변환 함수 등 공통 함수 폴더
     ┣ 📜.env
     ┗ 📜README.md



## 🛠️ 개발 환경
| 기술            | 기술명                                                 | Badge                                                           |
|:-----------------:|:-----------------------------------------------------:|:-------------------------------------------------------------:|
| **프레임워크**    | Next.js                                               | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white) |
| **데이터베이스**  | Google Firebase                                      | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) |
| **배포**          | Vercel                                               | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white) |
| **API 테스트**    | Postman                                              | ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white) |
| **버전 관리**     | GitHub                                               | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white) |
| **상태 관리**     | Zustand                                              | ![Zustand](https://img.shields.io/badge/Zustand-181717?style=flat-square&logo=redux&logoColor=white) |
| **UI 라이브러리** | Material UI (MUI)                                    | ![MUI](https://img.shields.io/badge/Material_UI-0078D4?style=flat-square&logo=mui&logoColor=white) |
| **스타일링**      | SASS                                                 | ![SASS](https://img.shields.io/badge/SASS-CC6699?style=flat-square&logo=sass&logoColor=white) |
| **PWA**          | Progressive Web App                                  | ![PWA](https://img.shields.io/badge/PWA-1A73E8?style=flat-square&logo=pwa&logoColor=white) |
| **슬라이더**      | Swiper                                               | ![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white) |
| **HTTP 요청**     | Axios                                                | ![Axios](https://img.shields.io/badge/Axios-5A29E6?style=flat-square&logo=axios&logoColor=white) |
| **XML 파싱**      | xml-js                                               | ![xml-js](https://img.shields.io/badge/xml--js-F9A826?style=flat-square&logo=javascript&logoColor=white) |
| **알림**          | SweetAlert2                                           | ![SweetAlert2](https://img.shields.io/badge/SweetAlert2-892B56?style=flat-square&logo=sweetalert2&logoColor=white) |
| **인증**          | NextAuth.js                                           | ![NextAuth](https://img.shields.io/badge/NextAuth.js-000000?style=flat-square&logo=next.js&logoColor=white) |



## 📚 참고 URL
- 기획서 : 
[SeoulW Google Docs](<https://docs.google.com/document/d/1Ieh-tqHfDDQsXYfCo3cP_YHhUgt8ATDOMHSVXXcL5fs/edit?tab=t.0>)
- 화면 설계 : 
[SeoulW Figma](<https://www.figma.com/design/dDn9TXA4NRfNO3gDJMFwO1/%EA%B7%B8%EB%A6%B0-2%EC%B0%A8)%ED%8C%80%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&node-type=canvas&t=uCwArR6SShR2lg8n-0>)
- ppt : 
[SeoulW Canva](https://www.canva.com/design/DAGTt3bDvUE/-n3BoRlItJUojwIII0JnqQ/edit)


---
# 담당 개발 상세 : 성주영

## 📑 요약

- **담당 직무**

   : 기획, 팀장
  
- **담당 페이지**

   : [메인](https://seoulw.vercel.app/),
  [에러페이지](https://seoulw.vercel.app/err),
  [이용약관](https://seoulw.vercel.app/policy)
  ${\color{#cccccc}(클릭\ 시\ 해당\ 페이지로\ 이동합니다.)}$

- **역할** 
  #### (1) 기획
    - Postman를 활용하여 api 응답 결과 분석, 컨텐츠별 API URL 작성 및 문서화
  
   #### (2) 초기 개발 환경 세팅
    - 프로젝트 생성, 폴더구조 설계, 패키지 및 라이브러리 설치, 페이지-컴포넌트 분리 및 파일 생성, 전역 스타일 설정 등
  
   #### (3) 공통 컴포넌트 제작
    - 헤더, 푸터, 장르 버튼, 컨텐츠 카드 등 공통으로 사용하는 컴포넌트 제작
  
   #### (4) PWA 적용
    - manifest.json 작성, [next-pwa](https://www.npmjs.com/package/@ducanh2912/next-pwa)패키지 사용
  
   #### (5) 이슈 발생 시 보조
    - 버그 수정 등
   


## ✏ 기획
- Postman으로 여러 경우의 수의 API 응답 데이터를 분석
- xml형식으로 들어온 데이터를 json으로 변환할 방법을 서치, 패키지를 설치해 사용하기로 함
- 이번주 공연, 공연 예정 등 컨텐츠별 데이터를 요청하는 로직 설계, API URL 작성 **(하단 추가 설명)**
- [API 작업자용 구글 스프레드시트](https://docs.google.com/spreadsheets/d/1hunhgwcZAyoGM4le85ZqblnQ8PAMn-0ZT9beVzkbr7c/edit?gid=584743467#gid=584743467) 작성
- 문서화 : [Seoul, W 기획서](https://docs.google.com/document/d/1Ieh-tqHfDDQsXYfCo3cP_YHhUgt8ATDOMHSVXXcL5fs/edit?tab=t.0)

<details>
  <summary>$\bf{{\color{#0969DA}정보\ 설계:\ 구조}}$</summary>
  
  ![seoulw_정보설계](https://github.com/user-attachments/assets/a2aac419-6649-4a1e-9212-3a64d2ccd293)
</details>


<details>
<summary>$\bf{\rm{\color{#0969DA}추가\ 설명:\ API\ URL}}$</summary>
	
  ### < API URL >
  #### 1. 공통
  - **공연시작일**(stdate), **공연종료일**(eddate), **페이지**(cpage), **페이지당 데이터 개수**(rows)는 필수 쿼리 값
  - 데이터 개수는 **20**으로 고정, 추가 데이터가 필요한 경우 **페이지** 값을 1씩 증가시켜 요청
  - **지역**(signgucode)은 **서울**로 고정
  - 각 페이지(메인, 카테고리, 검색, 디테일)에 맞게 기간을 변경하고 필요한 쿼리를 추가
  
  #### 2. 메인
  - 1단위 요청 시 컨텐츠별로 묶어 **(이번주 공연, 공연 예정, 장르별)** 총 3그룹으로 나누어 API를 3번 요청
  - 카테고리와 동일한 데이터를 사용하나, 카테고리 API 요청 함수를 사용하면 장르 8개×3그룹=총 24번의 요청이 필요해 **요청 횟수를 줄이기 위해 메인 전용 함수를 별도로 작성**함
  - 메인 페이지로 돌아갈 때마다 반복적 API요청을 피하기 위해 메인 페이지 최초 접속 시에만 데이터를 요청할 수 있도록 **메인 데이터는 최초 접속 이후 store에 저장하여 관리**
  - 1단위 요청에서 많은 데이터를 가져오므로 store에 데이터를 저장·관리 시 메인 페이지 로딩 대기 시간을 줄일 수 있는 추가적 이점이 있음
  
  #### 3. 카테고리
  - **장르**(shcate) 선택 시 API 요청
  - 장르 선택 후 하위 탭(**전체, 이번주, 공연중, 공연예정**) 선택 시, 각 항목에 맞는 쿼리를 추가해 API를 다시 요청
  - 장르 선택값에서 필터링을 할 경우, 결과를 안정적으로 **20개**씩 표시하기 어려운 경우가 있어, 그때마다 API를 새로 요청
  - 무한스크롤 방식으로 페이지 쿼리값을 **1씩 증가**시키며 API 요청. 결과가 없을 때까지 요청을 계속하며, 결과가 없으면 스크롤 종료
  
  - **기간 설정**:
    - **이번주**: 접속일 기준 **오늘**부터 **가장 가까운 일요일**까지
        - 예시: 접속일이 **2024.10.01**(화)이라면, **2024.10.01~2024.10.06**까지
    - **공연중**: 접속일 기준 **어제~오늘**까지
        - 공연 중인 행사에 대해서는 **공연중** 쿼리를 추가하여 **시작일**과 **종료일**에 관계없이 모두 출력. 이때, 응답 속도를 위해 범위를 좁혀 **어제~오늘**으로 설정
    - **공연 예정**: 접속일 기준 **내일~내일+1년**까지
        - 늦게 열릴 수 있는 콘서트 등을 고려해 최대 1년 후까지 공연 정보를 보여주도록 설정
    - **전체**: 접속일 기준 **어제~내일+1년**까지 설정. 이 범위는 **이번주**, **공연중**, **공연 예정** 범위를 모두 포함
  
  #### 4. 검색
  - 하나의 **검색 키워드**에 대해 **공연명**과 **공연장명** 두 가지 경우로 API 요청이 가능
  - 검색 이벤트 발생 시 두 가지를 동시에 요청하여, 결과가 없더라도 **각각 20개**씩 요청하여 최대 **40개**의 결과를 한 번에 표시 가능
  - 무한스크롤 방식으로 페이지 쿼리값을 **1씩 증가**시키며 결과가 없을 때까지 API를 요청하고, 결과가 없으면 스크롤 종료
  
  - **기간 설정**:
    - 접속일 기준 **KOPIS 서비스 시작일 2014.01.01**부터 **내일 +1년**까지
    - 시작일은 **KOPIS API Version 1.0** 배포일로 고정, 종료일은 카테고리에서 정한 범위 중 가장 늦은 **내일 +1년**까지 설정
  
  #### 5. 디테일
  - **공연 정보**와 **공연장 정보**를 모두 표시하기 위해 총 **2번의 API 요청**이 필요
  - 공연장 정보 요청을 위한 **공연장 ID** 값은 **공연 정보** 데이터에 포함되어 있으므로, 반드시 공연 정보 요청 후 공연장 정보를 요청
</details>



## 🔧 초기 개발 환경 세팅
### 1. 프로젝트 생성
- 페이지 라우팅 방식 선택

### 2. 폴더 구조 설계
- 아이콘, 이미지 등 정적 파일들을 src외부의 public폴더에 분리
- src폴더 내에 store폴더(상태 관리), utils폴더(api 함수, xml-json변환 함수), lib폴더(DB) 추가 생성

### 3. 패키지 및 라이브러리 설치
- axios, zustand, firebase, next-auth, swiper 등 사전 설치

### 4. 페이지-컴포넌트 분리 및 파일 생성
- 디자인을 기반으로 페이지와 컴포넌트화 할 요소들을 분리하고 이에 맞게 파일을 생성
- _app.js에 헤더, 푸터, 네비바 등 공통 컴포넌트를 추가해 기본 레이아웃을 설정
- 팀원 간 작업 영역이 겹치지 않도록 파일을 분리하고 각자의 작업 영역을 명확히 공유

### 5. 전역 스타일 설정 및 CSS 모듈화
- global.scss / reset.scss로 css 초기화, 폰트 설치, 색상 설정, 기본 레이아웃 설정 등 작업 전 필요한 전역 스타일 적용
- 4에서 생성한 파일을 기반으로 ```.module.scss``` 생성하고 각 파일에 import함



## 🧩 공통 컴포넌트 제작
: 기획 및 디자인 단계 이후 공통으로 사용할 컴포넌트를 구분해 제작

### 1.  로딩 
- [CSS Loaders](https://css-loaders.com/)에서 애니메이션 선택, ![FF4B77](https://github.com/user-attachments/assets/578b5d58-d2d8-4324-94f6-0be6ea7355fd)```#FFD4DF``` 테마색으로 변경

### 2. 헤더, 푸터, 네비게이션 바
- 라우팅에 따라 페이지별로 다르게 노출

### 3. 장르 버튼
- 메인, 카테고리 페이지에서 사용
  
### 4. 카드
- 메인, 카테고리, 검색 페이지에서 사용


![components_sjy](https://github.com/user-attachments/assets/2666c187-3aca-4a43-a3a2-c49d83f93930)



## ❗ 이슈 발생 시 보조
- xml 파싱 과정에서 값이 없는 태그와 값이 있는 태그가 서로 다른 형태로 변환되어 키값이 undefined되는 오류 발생

	⇒ **해결 방법**: Postman으로 여러 건의 응답을 받아 항상 값이 있는 태그와 아닌 태그를 확인, 아닌 태그에 조건식 작성



## 💥 트러블 슈팅
- 카테고리 페이지, 디테일 페이지에서 헤더와 네비바에 데이터를 넘겨줘야 하는 이슈

   : 헤더와 네비바는 최상위에 위치한 컴포넌트라 자식에서 부모로 props를 넘길 수 없는 이슈 발생

  ⇒ **해결 방법**: Zustand store에 데이터를 저장하여 전달


- 라우팅 시 같은 레벨에 있는 페이지에게 props를 넘겨줄 수 없는 이슈

  ⇒ **해결 방법**: 라우팅 시 쿼리로 데이터 전달



## 💭 프로젝트를 통해 배운점
모바일 환경에서의 헤더, 네비게이션 영역의 역할과 데이터 흐름 설계의 중요성을 배웠습니다.  

모바일은 정보를 표시할 영역이 좁기 때문에 웹과 달리 헤더와 네비게이션이 페이지마다 동일하지 않고 그 공간까지 컨텐츠에 활용하고 있었습니다.
그런데 **헤더와 네비게이션**이 **최상위 레이아웃**에 위치하다 보니, 컨텐츠 영역인 자식에서 부모로 데이터 전달이 불가능한 **props 이슈**가 발생했습니다.
처음 기획할 때는 이런 부분을 알지 못했고 전체적인 데이터 구조를 수정하기엔 너무 늦은 시점에 이 문제를 알게 되어, 헤더와 네비게이션에 데이터를 전달 하기 위해 세션에 저장하는 등의 여러 방안들을 시도해보다가 최종적으로 **store**를 사용하게 되었습니다.

향후 모바일 구조 설계를 하게 된다면 **최상위에서 데이터가 자연스럽게 전달**될 수 있도록 할 생각입니다.



---
## 📱 스크린샷
![t](https://github.com/user-attachments/assets/dd46735e-4f07-4ab9-9eb6-7377388ddaa3)
