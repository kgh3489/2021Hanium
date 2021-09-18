from django.db import models

# Create your models here.
class UserModel(models.Model):

    username = models.CharField(max_length=128, null=False)
    password = models.CharField(max_length=256, null=False)
    nickname = models.CharField(max_length=256, null=False)
    phone = models.CharField(max_length=256, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'UserModel'