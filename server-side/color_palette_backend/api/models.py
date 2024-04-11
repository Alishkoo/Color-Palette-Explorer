from django.db import models
from django.contrib.auth.models import User

class Colors(models.Model):
    hex_code_1 = models.CharField(max_length=20)
    hex_code_2 = models.CharField(max_length=20)
    hex_code_3 = models.CharField(max_length=20)
    hex_code_4 = models.CharField(max_length=20)
    hex_code_5 = models.CharField(max_length=20)
    user = models.ForeignKey(User, on_delete=models.CASCADE )
    
    def __str__(self):
        return 'colors'
