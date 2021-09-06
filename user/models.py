from django.db import models

# Create your models here.
class UserModel(models.Model):

    class Meta: #db 정보를 메타에 적어줌
        db_table = 'user_table' #db table 이름을 지정

    username = models.CharField(max_length=20, null=False)
    password = models.CharField(max_length=256, null=False)
    nickname = models.CharField(max_length=256, null=False)
    phonenum = models.CharField(max_length=256, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

