from .models import Colors
from rest_framework import serializers
from django.contrib.auth.models import User

class ColorSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    
    class Meta:
        model = Colors
        fields = ('hex_code_1', 'hex_code_2', 'hex_code_3', 'hex_code_4', 'hex_code_5', 'user')
   
   
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'email')

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user     