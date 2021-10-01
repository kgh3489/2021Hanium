from rest_framework import serializers
from .models import UserModel
from product.serializers import ProductSerializer

class UserSerializer(serializers.ModelSerializer):
    # product_model = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = UserModel
        fields = ('username','password','nickname','phone') # 필드 설정