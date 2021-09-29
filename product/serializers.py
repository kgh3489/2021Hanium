from .models import ProductModel
from rest_framework import serializers

class ProductSerializer(serializers.ModelSerializer):
    product_img = serializers.ImageField(use_url=True)
    #author = serializers.ReadOnlyField(source='Usermodel.username')

    class Meta:
        model = ProductModel
        fields = (
            #'author',
            'product_img',
            'product_name',
            'product_type',
            'product_lend_h',
            'product_lend_d',
            'product_location',
            'product_detail'
            ) # 필드 설정