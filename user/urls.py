from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.Userinfo.as_view(), name='user'),
    #도메인 접속 -> views의 해당 뷰의 함수 실행
]