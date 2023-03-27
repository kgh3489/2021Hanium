# 2021 한이음 프로젝트 '빌려드림(Lend)'

```
프로젝트 인원: 3명 (FE 2명, BE 1명)

프로젝트 기간: 21.03 ~ 22.10

프로젝트 개요:
              React와 Django를 활용한 개인의 이동수단을 공유할 수 있는 웹 플랫폼
              사용하지 않는 개인 소유의 이동수단을 타인에게 빌려줌으로써 공유경제를 활성화함과 동시에 이익 창출이 가능한 플랫폼
```


## 구현 화면

- 메인화면 & 회원가입 & 로그인 & 상세정보
<p align="center">
<img src="https://user-images.githubusercontent.com/69743800/228020858-ab40ffca-5ee8-4985-bbae-44e43e135bbe.png" width="150px" height="300px" />
<img src="https://user-images.githubusercontent.com/69743800/228018049-91a62494-96f7-4773-b78f-8ae8905d33ff.png" width="150px" height="300px" />
<img src="https://user-images.githubusercontent.com/69743800/228015356-89cd6de2-3047-42fd-936e-192ccb618fba.png" width="150px" height="300px" />
<img src="https://user-images.githubusercontent.com/69743800/228018107-983bff1b-ff13-4cec-b6c7-33e89a67afeb.png" width="150px" height="300px" />
</p>

- 상품등록 & 필터 & 검색 & 사이드바
<p align="center">
<img src="https://user-images.githubusercontent.com/69743800/228018072-8a15686f-2afc-4fd5-98f1-1b2b30625bd5.png" width="150px" height="300px" />
<img src="https://user-images.githubusercontent.com/69743800/228018055-232b4aab-c8a7-4c9d-bf97-7f4eb152ff90.png" width="150px" height="300px" />
<img src="https://user-images.githubusercontent.com/69743800/228018091-11d21850-bb94-4f47-9900-f058bee32e5b.png" width="150px" height="300px" />
<img src="https://user-images.githubusercontent.com/69743800/228016165-989d994f-3b43-498b-92d2-1a3096246879.png" width="150px" height="300px" />
</p>

## 사용 기술
<p align="center">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white">
<img src="https://img.shields.io/badge/sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
</p>
<br/><br/>

## 주요 기능
```
1. 유저 기능
  - JWT를 활용한 회원가입 및 로그인
  
2. 상품 기능
 - 상품 등록, 확인, 수정, 삭제
 - 내가 등록한 상품 확인
 
3. 검색 및 필터 기능
 - 키워드가 들어간 제목, 설명, 위치로 검색
 - 자전거 종류 별 필터링
 
4. 댓글 기능
 - 상품 별 댓글
 
5. 권한 설정
 - 로그인 한 사용자만 특정 기능 사용 가능 (상품 등록, 댓글 등)
```
## 개발 산출물
### ERD
<img src="https://user-images.githubusercontent.com/69743800/228028701-5253f4f5-7aa4-4a31-a74f-40ada48f1f80.png" width="450px" height="250px" />

### 기능 구성도
<img src="https://user-images.githubusercontent.com/69743800/228027882-f1b83182-6cd3-4d2d-8705-c5034a52b88b.png" width="450px" height="250px" />

### 요구사항 정의서
<img src="https://user-images.githubusercontent.com/69743800/228029334-f95a3b5c-6f9f-479f-9cb7-37b981ecf460.png" width="450px" height="250px" />

### 유즈 케이스
<img src="https://user-images.githubusercontent.com/69743800/228029652-5d575e2a-0278-4fc6-83a0-7f527d61903d.png" width="250px" height="300px" />

## 프로젝트 실행 전 설치 명령어

### frontend

—frontend 폴더에서—

- npm 설치 : npm install
- yarn 설치 : npm install yarn --global
- fontawesome free버전 설치 : yarn add @fortawesome/fontawesome-free
- react-router-dom 설치: npm install react-router-dom
- 네이버 로그인 sdk  설치: npm i react-login-by-naver
- axios 설치 :  yarn add axios

### backend

—2021Hanium 폴더에서—

- 가상환경 설치 1 : pip install virtualenv
- 가상환경 설치 2 : virtualenv env
- 가상환경 실행 : cd env -> cd Scripts -> activate.bat

—가상환경 실행 후 2021Hanium폴더에서—

- django 설치 : pip install django
- django-rest-framework 설치 : pip install django-rest-framework
- django-cors-headers 설치 : pip install django-cors-headers
- Pillow 설치 : python -m pip install Pillow
- djangorestframework-jwt 설치 : pip install djangorestframework-jwt

## 백엔드 변경사항 발생 시
#### [선행작업]migrations 폴더에서 숫자로 시작하는 파일 삭제{ ex)0001_initial.py }, db.sqlite3 삭제 
- py manage.py makemigrations
- py manage.py migrate
- py manage.py createsuperuser

## 프로그램 실행

1. frontend폴더에서 : yarn build
2. 2021Hanium 폴더에서 : py [manage.py](http://manage.py) runserver
