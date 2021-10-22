from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.createuser, name='user'),
    path('userget/', views.getuser, name='getuser'),
    path('userlogin/', views.login, name='userlogin'),
    #도메인 접속 -> views의 해당 뷰의 함수 실행
]