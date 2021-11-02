from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'product',views.ProductViewSet) #product url 라우터에 등록


urlpatterns = [
    path('',include(router.urls)), #라우터를 위한 path
    path('product/', views.Product_Register_View.as_view(), name='product'),
    path('product/<int:pk>/', views.Product_Detail_View.as_view(), name='product-detail'),
    path('api-auth/', include('rest_framework.urls')),
    #도메인 접속 -> views의 해당 뷰의 함수 실행
]