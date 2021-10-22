from django.db import models
from django.contrib.auth.models import AbstractUser, User #장고 유저모델 상속

# Create your models here.
class UserModel(AbstractUser):

    #username = models.CharField(max_length=128, null=False)
    #password = models.CharField(max_length=256, null=False)
    nickname = models.CharField(max_length=256, null=False)
    phone = models.CharField(max_length=256, null=False)
    #created_at = models.DateTimeField(auto_now_add=True)
    #updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'UserModel'