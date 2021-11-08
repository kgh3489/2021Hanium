from .models import CommentModel, ProductModel
from rest_framework import serializers

class CommentSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()

    class Meta:
        model = CommentModel
        fields = [
            'id',
            'product',
            'author',
            'comment',
            'created_at'
            ]

    
    def get_author(self, obj):
        return obj.author.username

class ProductSerializer(serializers.ModelSerializer):
    product_img = serializers.ImageField(use_url=True)
    comments = CommentSerializer(many=True, read_only=True)
    author = serializers.SerializerMethodField()

    class Meta:
        model = ProductModel
        fields = (
            'id',
            'author',
            'product_img',
            'product_name',
            'product_type',
            'product_lend_h',
            'product_lend_d',
            'product_location',
            'product_detail',
            'comments'
            ) # 필드 설정


    def get_author(self, obj):
        return obj.author.username
