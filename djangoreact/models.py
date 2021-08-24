from django.db import models

class User(models.Model):
    class Meta:
        db_table = 'user_table'
        
    userid = models.CharField(max_length=20, null=False)
    password = models.CharField(max_length=256, null=False)
    nickname = models.CharField(max_length=20, null=False)
    phonenum = models.CharField(max_length=20, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# Create your models here.
