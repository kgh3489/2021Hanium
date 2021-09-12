from user.models import UserModel
from django.db import models

class ProductModel (models.Model):
    author = models.ForeignKey(UserModel, on_delete=models.CASCADE) #UserModel에서 참조
    product_img = models.ImageField(blank=False)
    product_name = models.CharField(max_length=100)
    product_type = models.CharField(max_length=100)
    product_lend_h = models.CharField(max_length=50)
    product_lend_d = models.CharField(max_length=50)
    product_detail = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True) #데이터 생성 시 현재 시간 저장
    updated_at = models.DateTimeField(auto_now=True) #데이터 갱신 시 현재 시간 저장

    def __str__(self):
        return self.author #함수에서 반환하는 속성을 기준으로 레코드를 확인