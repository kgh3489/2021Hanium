# 2021Hanium
2021한이음 프로젝트 '빌려드림'


<br/><br/>

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

## APP추가 후, 마이그레이션
py manage.py makemigrations
py manage.py migrate

## 프로그램 실행

1. frontend폴더에서 : yarn build
2. 2021Hanium 폴더에서 : py [manage.py](http://manage.py) runserver
