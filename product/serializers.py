from django.db.models import fields
#from user.serializers import UserSerializer
from .models import ProductModel
from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
    product_img = serializers.ImageField(use_url=True)
    author = serializers.ReadOnlyField(source = 'user.nickname')

    class Meta:
        model = ProductModel
        fields = (
            'author', #perform_create를 통해 전달받은 user 값을 사용
            'id',
            'product_img',
            'product_name',
            'product_type',
            'product_lend_h',
            'product_lend_d',
            'product_location',
            'product_detail'
            ) # 필드 설정