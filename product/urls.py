from django.urls import path
from . import views

urlpatterns = [
    path('product/', views.Product_Register_View.as_view(), name='product'),
    path('product/<int:pk>/', views.Product_Detail_View.as_view(), name='product-detail'),
    #도메인 접속 -> views의 해당 뷰의 함수 실행
]