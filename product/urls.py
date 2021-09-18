from django.urls import path
from . import views

urlpatterns = [
    path('product/', views.prouduct_register_view, name='product'),
    #도메인 접속 -> views의 해당 뷰의 함수 실행
]