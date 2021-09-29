from django.urls import path
from . import views

urlpatterns = [
    path('product/', views.product_register_view.as_view(), name='product'),
    #도메인 접속 -> views의 해당 뷰의 함수 실행
]